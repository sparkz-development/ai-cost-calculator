"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicUsageProcessor = void 0;
class AnthropicUsageProcessor {
    async parse(parseInput) {
        try {
            if (parseInput.isStream) {
                return this.parseStreamResponse(parseInput.responseBody);
            }
            else {
                return this.parseNonStreamResponse(parseInput.responseBody);
            }
        }
        catch (error) {
            return {
                data: null,
                error: `Failed to parse Anthropic usage: ${error}`,
            };
        }
    }
    parseNonStreamResponse(responseBody) {
        try {
            const parsedResponse = JSON.parse(responseBody);
            const usage = this.extractUsageFromResponse(parsedResponse);
            return {
                data: usage,
                error: null,
            };
        }
        catch (error) {
            return {
                data: null,
                error: `Failed to parse non-stream response: ${error}`,
            };
        }
    }
    parseStreamResponse(responseBody) {
        try {
            const lines = responseBody
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line) => {
                if (line.startsWith("data: ")) {
                    try {
                        const dataStr = line.replace("data: ", "").trim();
                        if (dataStr === "[DONE]")
                            return null;
                        return JSON.parse(dataStr);
                    }
                    catch (_a) {
                        return null;
                    }
                }
                return null;
            })
                .filter((data) => data !== null);
            const consolidatedUsage = this.consolidateStreamUsage(lines);
            const usage = this.extractUsageFromResponse(consolidatedUsage);
            return {
                data: usage,
                error: null,
            };
        }
        catch (error) {
            return {
                data: null,
                error: `Failed to parse stream response: ${error}`,
            };
        }
    }
    consolidateStreamUsage(streamData) {
        var _a;
        // message_start and message_delta events that contain usage
        let finalUsage = null;
        for (const chunk of streamData) {
            if ((chunk === null || chunk === void 0 ? void 0 : chunk.type) === "message_start" && ((_a = chunk === null || chunk === void 0 ? void 0 : chunk.message) === null || _a === void 0 ? void 0 : _a.usage)) {
                finalUsage = chunk.message.usage;
            }
            if ((chunk === null || chunk === void 0 ? void 0 : chunk.type) === "message_delta" && (chunk === null || chunk === void 0 ? void 0 : chunk.usage)) {
                // message_delta contains the final usage, merge with any existing usage
                finalUsage = { ...(finalUsage || {}), ...chunk.usage };
            }
        }
        return { usage: finalUsage };
    }
    extractUsageFromResponse(parsedResponse) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!parsedResponse || typeof parsedResponse !== "object") {
            return { input: 0, output: 0 };
        }
        // Case 1: Standard Anthropic response with a usage object
        if (parsedResponse.usage && typeof parsedResponse.usage === "object") {
            const usage = parsedResponse.usage;
            const inputTokens = (_a = usage.input_tokens) !== null && _a !== void 0 ? _a : 0;
            const outputTokens = (_b = usage.output_tokens) !== null && _b !== void 0 ? _b : 0;
            const cacheReadInputTokens = (_c = usage.cache_read_input_tokens) !== null && _c !== void 0 ? _c : 0;
            const cacheCreation = usage.cache_creation || {};
            const ephemeral5mTokens = (_d = cacheCreation.ephemeral_5m_input_tokens) !== null && _d !== void 0 ? _d : 0;
            const ephemeral1hTokens = (_e = cacheCreation.ephemeral_1h_input_tokens) !== null && _e !== void 0 ? _e : 0;
            // Extract web search usage
            const serverToolUse = usage.server_tool_use || {};
            const webSearchRequests = (_f = serverToolUse.web_search_requests) !== null && _f !== void 0 ? _f : 0;
            const modelUsage = {
                input: inputTokens,
                output: outputTokens,
            };
            if (cacheReadInputTokens > 0 ||
                ephemeral5mTokens > 0 ||
                ephemeral1hTokens > 0) {
                modelUsage.cacheDetails = { cachedInput: cacheReadInputTokens };
                if (ephemeral5mTokens > 0) {
                    modelUsage.cacheDetails.write5m = ephemeral5mTokens;
                }
                if (ephemeral1hTokens > 0) {
                    modelUsage.cacheDetails.write1h = ephemeral1hTokens;
                }
            }
            // Add web search usage if present
            if (webSearchRequests > 0) {
                modelUsage.web_search = webSearchRequests;
            }
            return modelUsage;
        }
        // Case 2: Claude “tool-only” token summary at the root
        // Example: { input_tokens: 12470, context_management: { original_input_tokens: 12800 } }
        if (Object.prototype.hasOwnProperty.call(parsedResponse, "input_tokens")) {
            const inputTokens = (_g = parsedResponse.input_tokens) !== null && _g !== void 0 ? _g : 0;
            const modelUsage = {
                input: inputTokens,
                output: 0,
            };
            return modelUsage;
        }
        // Fallback: no recognizable usage
        return { input: 0, output: 0 };
    }
}
exports.AnthropicUsageProcessor = AnthropicUsageProcessor;
