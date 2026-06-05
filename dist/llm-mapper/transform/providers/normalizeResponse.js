"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIStreamUsageNormalizer = void 0;
exports.toOpenAIResponse = toOpenAIResponse;
exports.toOpenAIStreamResponse = toOpenAIStreamResponse;
exports.normalizeOpenAIStreamText = normalizeOpenAIStreamText;
exports.normalizeAIGatewayResponse = normalizeAIGatewayResponse;
const getUsageProcessor_1 = require("@helicone-package/cost/usage/getUsageProcessor");
const mapModelUsageToOpenAI_1 = require("@helicone-package/cost/usage/mapModelUsageToOpenAI");
const providers_1 = require("@helicone-package/cost/models/providers");
const toOpenai_1 = require("./anthropic/response/toOpenai");
const toOpenai_2 = require("./anthropic/streamedResponse/toOpenai");
const toOpenai_3 = require("./google/response/toOpenai");
const toOpenai_4 = require("./google/streamedResponse/toOpenai");
const toResponses_1 = require("./responses/openai/response/toResponses");
const toResponses_2 = require("./responses/streamedResponse/toResponses");
function decodeBase64(base64) {
    if (typeof atob === "function") {
        const binary = atob(base64);
        const length = binary.length;
        const bytes = new Uint8Array(length);
        for (let i = 0; i < length; i += 1) {
            bytes[i] = binary.charCodeAt(i);
        }
        return new TextDecoder().decode(bytes);
    }
    const bufferCtor = globalThis.Buffer;
    if (bufferCtor) {
        return bufferCtor.from(base64, "base64").toString("utf-8");
    }
    throw new Error("Base64 decoding is not supported in this environment.");
}
function isBedrockEventStreamResponse(text) {
    return (text.includes(":event-type") ||
        text.includes(":message-type") ||
        text.includes('{"bytes"'));
}
function extractBedrockEventPayloads(text) {
    const payloads = [];
    let index = 0;
    while (index < text.length) {
        const start = text.indexOf('{"bytes"', index);
        if (start === -1) {
            break;
        }
        let braceCount = 0;
        let end = start;
        let parsed = null;
        while (end < text.length) {
            const char = text[end];
            if (char === "{") {
                braceCount++;
            }
            else if (char === "}") {
                braceCount--;
                if (braceCount === 0) {
                    const candidate = text.slice(start, end + 1);
                    try {
                        parsed = JSON.parse(candidate);
                    }
                    catch (error) {
                        // ignore malformed payloads
                    }
                    break;
                }
            }
            end++;
        }
        if (parsed) {
            payloads.push(parsed);
        }
        index = end + 1;
    }
    return payloads;
}
function serializeOpenAIChunks(chunks, includeDone = true) {
    const lines = chunks.map((chunk) => `data: ${JSON.stringify(chunk)}`);
    if (includeDone) {
        lines.push("data: [DONE]");
    }
    return lines.join("\n\n") + "\n\n";
}
async function convertBedrockAnthropicStreamToOpenAI(responseText) {
    var _a, _b;
    const converter = new toOpenai_2.AnthropicToOpenAIStreamConverter();
    const openAIChunks = [];
    const payloads = extractBedrockEventPayloads(responseText);
    // as of 2025-10-16 bedrock does not include 1h cache buckets
    let messageStartUsage = null;
    for (const payload of payloads) {
        if (!(payload === null || payload === void 0 ? void 0 : payload.bytes)) {
            continue;
        }
        try {
            const decoded = decodeBase64(payload.bytes);
            let event;
            try {
                event = JSON.parse(decoded);
            }
            catch (error) {
                console.error("Failed to parse Bedrock decoded payload:", error);
                continue;
            }
            if ((event === null || event === void 0 ? void 0 : event.type) === "message_start" && ((_a = event === null || event === void 0 ? void 0 : event.message) === null || _a === void 0 ? void 0 : _a.usage)) {
                messageStartUsage = {
                    input_tokens: event.message.usage.input_tokens,
                    cache_creation_input_tokens: event.message.usage.cache_creation_input_tokens,
                    cache_read_input_tokens: event.message.usage.cache_read_input_tokens,
                    output_tokens: event.message.usage.output_tokens,
                };
            }
            if ((event === null || event === void 0 ? void 0 : event.type) === "message_delta") {
                const usage = {
                    ...((_b = event.usage) !== null && _b !== void 0 ? _b : {}),
                };
                if (messageStartUsage) {
                    if (usage.input_tokens === undefined &&
                        messageStartUsage.input_tokens !== undefined) {
                        usage.input_tokens = messageStartUsage.input_tokens;
                    }
                    if (usage.cache_creation_input_tokens === undefined &&
                        messageStartUsage.cache_creation_input_tokens !== undefined) {
                        usage.cache_creation_input_tokens =
                            messageStartUsage.cache_creation_input_tokens;
                    }
                    if (usage.cache_read_input_tokens === undefined &&
                        messageStartUsage.cache_read_input_tokens !== undefined) {
                        usage.cache_read_input_tokens =
                            messageStartUsage.cache_read_input_tokens;
                    }
                    if (usage.output_tokens === undefined &&
                        messageStartUsage.output_tokens !== undefined) {
                        usage.output_tokens = messageStartUsage.output_tokens;
                    }
                }
                if (Object.keys(usage).length > 0) {
                    event.usage = usage;
                }
            }
            const anthropicSSE = `data: ${JSON.stringify(event)}\n\n`;
            converter.processLines(anthropicSSE, (chunk) => {
                openAIChunks.push(chunk);
            });
        }
        catch (error) {
            console.error("Failed to decode Bedrock payload:", error);
        }
    }
    if (openAIChunks.length === 0) {
        return "";
    }
    return serializeOpenAIChunks(openAIChunks);
}
async function toOpenAIResponse(response, provider, providerModelId, isStream = false) {
    try {
        // Step 1: Parse response body (already in OpenAI format)
        const providerResponse = await response.text();
        const openAIBody = JSON.parse(providerResponse);
        // Step 2: Normalize usage for ALL providers
        const usageProcessor = (0, getUsageProcessor_1.getUsageProcessor)(provider);
        if (usageProcessor) {
            const modelUsageResult = await usageProcessor.parse({
                responseBody: providerResponse,
                isStream,
                model: providerModelId,
            });
            if (modelUsageResult.data) {
                // Map normalized ModelUsage to OpenAI format and replace in response
                openAIBody.usage = (0, mapModelUsageToOpenAI_1.mapModelUsageToOpenAI)(modelUsageResult.data);
            }
        }
        // Step 3: Return new response with normalized body
        return new Response(JSON.stringify(openAIBody), {
            status: response.status,
            statusText: response.statusText,
            headers: {
                ...Object.fromEntries(response.headers.entries()),
                "content-type": "application/json",
            },
        });
    }
    catch (error) {
        console.error("Failed to normalize response usage:", error);
        // Return original response if normalization fails
        return response;
    }
}
function toOpenAIStreamResponse(response, provider, providerModelId) {
    if (!response.body) {
        return response;
    }
    const transformedStream = normalizeOpenAIStream(response.body, provider, providerModelId);
    return new Response(transformedStream, {
        status: response.status,
        statusText: response.statusText,
        headers: {
            "content-type": "text/event-stream; charset=utf-8",
            "cache-control": "no-cache",
            connection: "keep-alive",
            ...Object.fromEntries(response.headers.entries()),
        },
    });
}
/**
 * Normalizes usage in OpenAI-formatted streaming responses.
 *
 * Processes OpenAI SSE streams and normalizes usage fields in chunks
 * that contain usage data using provider-specific usage processors.
 */
class OpenAIStreamUsageNormalizer {
    constructor(provider, providerModelId) {
        this.accumulatedChunks = [];
        this.provider = provider;
        this.providerModelId = providerModelId;
    }
    async processLines(raw, onChunk) {
        const lines = raw.split("\n");
        for (const line of lines) {
            if (line.startsWith("data: ")) {
                try {
                    const jsonStr = line.slice(6);
                    // Skip the [DONE] message
                    if (jsonStr.trim() === "[DONE]") {
                        continue;
                    }
                    const chunk = JSON.parse(jsonStr);
                    // Accumulate all chunks for usage parsing
                    this.accumulatedChunks.push(jsonStr);
                    // If this chunk has usage, normalize it
                    if (chunk.usage) {
                        const usageProcessor = (0, getUsageProcessor_1.getUsageProcessor)(this.provider);
                        if (usageProcessor) {
                            // Reconstruct full response text from accumulated chunks
                            const fullResponseText = this.accumulatedChunks
                                .map((c) => `data: ${c}\n\n`)
                                .join("");
                            const modelUsageResult = await usageProcessor.parse({
                                responseBody: fullResponseText,
                                isStream: true,
                                model: this.providerModelId,
                            });
                            if (modelUsageResult.data) {
                                chunk.usage = (0, mapModelUsageToOpenAI_1.mapModelUsageToOpenAI)(modelUsageResult.data);
                            }
                        }
                    }
                    onChunk(chunk);
                }
                catch (error) {
                    console.error("Failed to parse SSE data:", error);
                }
            }
            else if (line.startsWith("event:") || line.startsWith(":")) {
                // Skip event type lines and comments
                continue;
            }
        }
    }
}
exports.OpenAIStreamUsageNormalizer = OpenAIStreamUsageNormalizer;
/**
 * Normalizes usage in OpenAI-formatted SSE text.
 *
 * Takes raw SSE text, normalizes usage fields in chunks, and returns
 * reconstructed SSE text with normalized usage.
 */
async function normalizeOpenAIStreamText(sseText, provider, providerModelId) {
    const normalizer = new OpenAIStreamUsageNormalizer(provider, providerModelId);
    const normalizedChunks = [];
    await normalizer.processLines(sseText, (chunk) => {
        normalizedChunks.push(chunk);
    });
    return serializeOpenAIChunks(normalizedChunks);
}
/**
 * Converts OpenAI Chat Completions SSE stream to Responses API SSE stream.
 */
function convertOpenAIStreamToResponses(sseText) {
    const converter = new toResponses_2.ChatToResponsesStreamConverter();
    const lines = sseText.split("\n");
    const outputLines = [];
    for (const line of lines) {
        if (line.startsWith("data: ")) {
            const jsonStr = line.slice(6);
            // Skip the [DONE] message
            if (jsonStr.trim() === "[DONE]") {
                continue;
            }
            try {
                const chunk = JSON.parse(jsonStr);
                const events = converter.convert(chunk);
                for (const ev of events) {
                    const type = ev.type;
                    // Include the type field inside data to match OpenAI SDK expectations
                    const sseMessage = `event: ${type}\ndata: ${JSON.stringify(ev)}`;
                    outputLines.push(sseMessage);
                }
            }
            catch (error) {
                // Skip invalid json
            }
        }
    }
    return outputLines.join("\n\n") + "\n\n";
}
/**
 * Transforms an OpenAI SSE stream to normalize usage in chunks.
 */
function normalizeOpenAIStream(stream, provider, providerModelId) {
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    const normalizer = new OpenAIStreamUsageNormalizer(provider, providerModelId);
    let buffer = "";
    return new ReadableStream({
        async start(controller) {
            const reader = stream.getReader();
            try {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                        if (buffer.trim()) {
                            await processBuffer(buffer, controller, encoder, normalizer);
                        }
                        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                        controller.close();
                        break;
                    }
                    buffer += decoder.decode(value, { stream: true });
                    const messages = buffer.split("\n\n");
                    buffer = messages.pop() || "";
                    for (const message of messages) {
                        if (message.trim()) {
                            await processBuffer(message + "\n\n", controller, encoder, normalizer);
                        }
                    }
                }
            }
            catch (error) {
                controller.error(error);
            }
            finally {
                reader.releaseLock();
            }
        },
    });
}
async function processBuffer(buffer, controller, encoder, normalizer) {
    await normalizer.processLines(buffer, (chunk) => {
        const sseMessage = `data: ${JSON.stringify(chunk)}\n\n`;
        controller.enqueue(encoder.encode(sseMessage));
    });
}
/**
 * Normalizes AI Gateway responses to OpenAI format with correct usage.
 *
 * Handles both streaming and non-streaming responses, converting from
 * provider-native format to OpenAI format when needed, and normalizing
 * usage fields for all providers.
 *
 * If bodyMapping is "RESPONSES", converts the response to Responses API format.
 */
async function normalizeAIGatewayResponse(params) {
    const { responseText, isStream, provider, providerModelId, responseFormat, bodyMapping, } = params;
    try {
        if (isStream) {
            // Streaming responses
            let normalizedOpenAIText = responseText;
            if (responseFormat === "ANTHROPIC") {
                if (isBedrockEventStreamResponse(responseText)) {
                    const normalized = await convertBedrockAnthropicStreamToOpenAI(responseText);
                    if (normalized) {
                        normalizedOpenAIText = normalized;
                    }
                }
                else {
                    const converter = new toOpenai_2.AnthropicToOpenAIStreamConverter();
                    const openAIChunks = [];
                    converter.processLines(responseText, (chunk) => {
                        openAIChunks.push(chunk);
                    });
                    normalizedOpenAIText = serializeOpenAIChunks(openAIChunks);
                }
            }
            else if (responseFormat === "GOOGLE") {
                const converter = new toOpenai_4.GoogleToOpenAIStreamConverter();
                const openAIChunks = [];
                converter.processLines(responseText, (chunk) => {
                    openAIChunks.push(chunk);
                });
                normalizedOpenAIText = serializeOpenAIChunks(openAIChunks);
            }
            else if (responseFormat === "OPENAI") {
                // Already in OpenAI format, just normalize usage
                normalizedOpenAIText = await normalizeOpenAIStreamText(responseText, provider, providerModelId);
            }
            // by this line, normalizedOpenAIText is now in Chat Completions format
            if (bodyMapping === "RESPONSES" && !(0, providers_1.nativelySupportsResponsesAPI)(provider, providerModelId)) {
                return convertOpenAIStreamToResponses(normalizedOpenAIText);
            }
            return normalizedOpenAIText;
        }
        else {
            // Non-streaming responses
            const providerBody = JSON.parse(responseText);
            let openAIBody = providerBody;
            if (responseFormat === "ANTHROPIC") {
                // Convert Anthropic to OpenAI format
                openAIBody = (0, toOpenai_1.toOpenAI)(providerBody);
            }
            else if (responseFormat === "GOOGLE") {
                openAIBody = (0, toOpenai_3.toOpenAI)(providerBody);
            }
            // Normalize usage for all providers
            // We do this "extra" work because while some providers return OpenAI-format usage,
            // the usage numbers may not be accurate or consistent.
            // Ex: input tokens = prompt tokens + cached prompt tokens instead of just prompt tokens
            const usageProcessor = (0, getUsageProcessor_1.getUsageProcessor)(provider);
            if (usageProcessor) {
                const modelUsageResult = await usageProcessor.parse({
                    responseBody: responseText,
                    isStream: false,
                    model: providerModelId,
                });
                if (modelUsageResult.data) {
                    openAIBody.usage = (0, mapModelUsageToOpenAI_1.mapModelUsageToOpenAI)(modelUsageResult.data);
                }
            }
            if (bodyMapping === "RESPONSES" && !(0, providers_1.nativelySupportsResponsesAPI)(provider, providerModelId)) {
                const responsesBody = (0, toResponses_1.toResponses)(openAIBody);
                return JSON.stringify(responsesBody);
            }
            return JSON.stringify(openAIBody);
        }
    }
    catch (error) {
        console.error("Failed to normalize AI Gateway response:", error);
        throw error;
    }
}
