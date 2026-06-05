"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOpenAIResponse = exports.openaiResponseMapper = exports.getResponseText = exports.getRequestText = void 0;
const builder_1 = require("../../path-mapper/builder");
const chat_helpers_1 = require("./chat_helpers");
const typeMap = {
    input_text: "message",
    input_image: "image",
    input_file: "file",
    output_text: "message", // Assistant messages that come back as input have output_text type
};
/**
 * Generate a human-readable preview text for Requests API requests.
 * Mirrors the intent of getRequestText in chat.ts, but adapted to the
 * Responses API where the request payload uses `input` instead of `messages`.
 */
const getRequestText = (requestBody) => {
    var _a;
    try {
        const anyRequest = requestBody;
        const heliconeMessage = anyRequest === null || anyRequest === void 0 ? void 0 : anyRequest.heliconeMessage;
        if (heliconeMessage) {
            return typeof heliconeMessage === "string"
                ? heliconeMessage
                : JSON.stringify(heliconeMessage);
        }
        const input = requestBody === null || requestBody === void 0 ? void 0 : requestBody.input;
        if (!input)
            return "";
        // If the entire input is a string, return directly
        if (typeof input === "string") {
            return input;
        }
        if (Array.isArray(input) && input.length > 0) {
            const lastItem = input[input.length - 1];
            // Handle function_call_output items - they don't have extractable text
            if ((lastItem === null || lastItem === void 0 ? void 0 : lastItem.type) === "function_call_output") {
                return "";
            }
            // Handle reasoning items - extract summary text
            if ((lastItem === null || lastItem === void 0 ? void 0 : lastItem.type) === "reasoning") {
                const summary = lastItem === null || lastItem === void 0 ? void 0 : lastItem.summary;
                if (Array.isArray(summary)) {
                    const textItems = summary
                        .filter((s) => (s === null || s === void 0 ? void 0 : s.type) === "summary_text" && (s === null || s === void 0 ? void 0 : s.text))
                        .map((s) => s.text);
                    if (textItems.length > 0) {
                        return textItems.join(" ");
                    }
                }
                else if (typeof summary === "string") {
                    return summary;
                }
                return "";
            }
            const content = lastItem === null || lastItem === void 0 ? void 0 : lastItem.content;
            // Content can be a string or an array of typed items
            if (typeof content === "string") {
                return content;
            }
            if (Array.isArray(content)) {
                // Prefer text content if available
                const textItems = content.filter((c) => (c === null || c === void 0 ? void 0 : c.type) === "input_text" && typeof (c === null || c === void 0 ? void 0 : c.text) === "string");
                if (textItems.length > 0) {
                    return textItems.map((c) => c.text).join(" ");
                }
                // Next, indicate image/file content succinctly
                if (content.some((c) => (c === null || c === void 0 ? void 0 : c.type) === "input_image")) {
                    return "[Image]";
                }
                if (content.some((c) => (c === null || c === void 0 ? void 0 : c.type) === "input_file")) {
                    return "[File]";
                }
                // Fallback to JSON preview of the first item
                return JSON.stringify((_a = content[0]) !== null && _a !== void 0 ? _a : "");
            }
            return JSON.stringify(lastItem);
        }
        return "";
    }
    catch (error) {
        console.error("Error parsing request text (Responses API):", error);
        return "error_parsing_request";
    }
};
exports.getRequestText = getRequestText;
/**
 * Generate a human-readable preview text for Responses API responses.
 * Similar to getResponseText in chat.ts, but tailored to `output` format.
 */
const getResponseText = (responseBody, statusCode = 200) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    try {
        if (statusCode === 0 || statusCode === null) {
            return "";
        }
        // Handle null/undefined inputs
        if (responseBody === null || responseBody === undefined) {
            return "";
        }
        // Handle empty objects
        if (typeof responseBody === "object" &&
            Object.keys(responseBody).length === 0) {
            return "";
        }
        if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) {
            // Prefer message if present; else stringify the error object
            return (_b = (_a = responseBody.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : JSON.stringify(responseBody.error);
        }
        // Responses API returns an `output` array with message items
        if (Array.isArray(responseBody === null || responseBody === void 0 ? void 0 : responseBody.output)) {
            const firstMessage = responseBody.output.find((item) => (item === null || item === void 0 ? void 0 : item.type) === "message");
            const content = firstMessage === null || firstMessage === void 0 ? void 0 : firstMessage.content;
            if (Array.isArray(content)) {
                const textContent = content.find((c) => (c === null || c === void 0 ? void 0 : c.type) === "output_text");
                if (textContent === null || textContent === void 0 ? void 0 : textContent.text) {
                    return textContent.text;
                }
            }
        }
        // A consolidated response from a streamed OpenAI /v1/responses call
        if (((_c = responseBody === null || responseBody === void 0 ? void 0 : responseBody.item) === null || _c === void 0 ? void 0 : _c.content) &&
            Array.isArray(responseBody.item.content) &&
            responseBody.item.content.length) {
            const contentArray = responseBody.item.content;
            const textContent = contentArray.find((c) => (c === null || c === void 0 ? void 0 : c.type) === "output_text");
            if (textContent === null || textContent === void 0 ? void 0 : textContent.text) {
                return textContent.text;
            }
            const firstItemType = (_d = contentArray[0]) === null || _d === void 0 ? void 0 : _d.type;
            if (typeof firstItemType === "string" && firstItemType) {
                return `[${firstItemType}]`;
            }
        }
        // streaming
        if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.type) === "response.completed" &&
            Array.isArray((_e = responseBody === null || responseBody === void 0 ? void 0 : responseBody.response) === null || _e === void 0 ? void 0 : _e.output) &&
            ((_f = responseBody === null || responseBody === void 0 ? void 0 : responseBody.response) === null || _f === void 0 ? void 0 : _f.output.length) &&
            ((_h = (_g = responseBody === null || responseBody === void 0 ? void 0 : responseBody.response) === null || _g === void 0 ? void 0 : _g.output[0]) === null || _h === void 0 ? void 0 : _h.content) &&
            Array.isArray((_k = (_j = responseBody === null || responseBody === void 0 ? void 0 : responseBody.response) === null || _j === void 0 ? void 0 : _j.output[0]) === null || _k === void 0 ? void 0 : _k.content) &&
            ((_m = (_l = responseBody === null || responseBody === void 0 ? void 0 : responseBody.response) === null || _l === void 0 ? void 0 : _l.output[0]) === null || _m === void 0 ? void 0 : _m.content.length)) {
            const contentArray = (_p = (_o = responseBody === null || responseBody === void 0 ? void 0 : responseBody.response) === null || _o === void 0 ? void 0 : _o.output[0]) === null || _p === void 0 ? void 0 : _p.content;
            const textContent = contentArray.find((c) => (c === null || c === void 0 ? void 0 : c.type) === "output_text");
            if (textContent === null || textContent === void 0 ? void 0 : textContent.text) {
                return textContent.text;
            }
            const firstItemType = (_q = contentArray[0]) === null || _q === void 0 ? void 0 : _q.type;
            if (typeof firstItemType === "string" && firstItemType) {
                return `[${firstItemType}]`;
            }
        }
        // Fallbacks
        if (typeof (responseBody === null || responseBody === void 0 ? void 0 : responseBody.text) === "string") {
            return responseBody.text;
        }
        // Safe JSON.stringify to handle circular references
        try {
            return JSON.stringify(responseBody);
        }
        catch (stringifyError) {
            if (stringifyError instanceof Error &&
                stringifyError.message.includes("circular")) {
                return "error_circular_reference";
            }
            throw stringifyError;
        }
    }
    catch (error) {
        console.error("Error parsing response text (Responses API):", error);
        return "error_parsing_response";
    }
};
exports.getResponseText = getResponseText;
const convertRequestInputToMessages = (input) => {
    if (!input)
        return [];
    if (typeof input === "string") {
        return [
            {
                _type: "message",
                role: "user",
                type: "input_text",
                content: input,
                id: "req-msg-0",
            },
        ];
    }
    const messages = [];
    input.forEach((msg, msgIdx) => {
        // Handle function calls - each function_call becomes its own assistant message
        // to preserve chronological order in conversation history
        if (msg.type === "function_call") {
            const toolCall = {
                id: msg.id || msg.call_id || `req-tool-${msgIdx}`,
                name: msg.name,
                arguments: (0, chat_helpers_1.parseFunctionArguments)(msg.arguments),
                type: "function",
            };
            // Create a new assistant message for each function call
            messages.push({
                _type: "message",
                role: "assistant",
                content: "",
                id: `req-msg-assistant-${msgIdx}`,
                tool_calls: [toolCall],
            });
            return;
        }
        // Handle function call outputs (tool results in the new format)
        if (msg.type === "function_call_output") {
            messages.push({
                _type: "function",
                tool_call_id: msg.call_id || `req-tool-result-${msgIdx}`,
                content: msg.output,
                role: "tool",
                id: `req-msg-tool-${msgIdx}`,
            });
            return;
        }
        // Handle reasoning messages from reasoning models (o1, o3, etc.)
        if (msg.type === "reasoning") {
            let reasoningContent = "";
            if (Array.isArray(msg.summary)) {
                reasoningContent = msg.summary
                    .map((s) => {
                    if (s.type === "summary_text" && s.text) {
                        return s.text;
                    }
                    return typeof s === "string" ? s : JSON.stringify(s);
                })
                    .join(" ");
            }
            else if (typeof msg.summary === "string") {
                reasoningContent = msg.summary;
            }
            else if (msg.summary) {
                reasoningContent = JSON.stringify(msg.summary);
            }
            messages.push({
                _type: "message",
                role: "assistant",
                reasoning: reasoningContent,
                content: "", // Reasoning messages don't have regular content
                id: msg.id || `req-msg-reasoning-${msgIdx}`,
            });
            return;
        }
        // Handle regular messages with role and content (type="message" in the new format)
        if ((msg.type === "message" || msg.role) && msg.content !== undefined) {
            if (typeof msg.content === "string") {
                let content = msg.content;
                // Try to parse content if it looks like OpenAI Responses API format with single quotes
                if (content.startsWith("[{") &&
                    content.endsWith("}]") &&
                    content.includes("'type'")) {
                    try {
                        // Only replace quotes if this looks like the specific OpenAI Responses format
                        // This is safer than a global replace and targets the specific case we're handling
                        const normalized = content.replace(/'/g, '"');
                        const parsed = JSON.parse(normalized);
                        if (Array.isArray(parsed) &&
                            parsed.length > 0 &&
                            parsed[0].type === "text") {
                            content = parsed[0].text || content;
                        }
                    }
                    catch (e) {
                        // If parsing fails, keep original content
                    }
                }
                messages.push({
                    _type: "message",
                    role: msg.role,
                    type: "input_text",
                    content: content,
                    id: `req-msg-${msgIdx}`,
                });
                return;
            }
            else if (Array.isArray(msg.content)) {
                const contentArray = msg.content.map((content, contentIdx) => {
                    const baseResponse = {
                        _type: typeMap[content.type] || "message",
                        role: msg.role,
                        type: content.type,
                        id: `req-msg-${msgIdx}-${contentIdx}`,
                    };
                    if (content.type === "input_text" && content.text) {
                        baseResponse.content = content.text;
                    }
                    else if (content.type === "output_text" && content.text) {
                        // Handle output_text from assistant messages that are sent back as input
                        baseResponse.content = content.text;
                    }
                    else if (content.type === "input_image") {
                        baseResponse.detail = content.detail;
                        baseResponse.image_url = content.image_url;
                    }
                    else if (content.type === "input_file") {
                        baseResponse.file_data = content.file_data;
                        baseResponse.file_id = content.file_id;
                        baseResponse.filename = content.filename;
                    }
                    return baseResponse;
                });
                messages.push({
                    _type: "contentArray",
                    role: msg.role,
                    id: `req-msg-${msgIdx}`,
                    contentArray,
                });
                return;
            }
        }
    });
    return messages;
};
const toExternalRequest = (responses) => {
    if (!responses)
        return [];
    const result = [];
    responses.forEach((msg) => {
        // Handle function results
        if (msg._type === "function") {
            result.push({
                type: "function_call_output",
                call_id: msg.tool_call_id,
                output: msg.content,
            });
            return;
        }
        // Handle regular messages
        const { role, _type, content, contentArray, tool_calls } = msg;
        const validRole = role || "user";
        // If this message has tool calls, add them as separate function_call items
        if (tool_calls && Array.isArray(tool_calls) && tool_calls.length > 0) {
            // First add the message itself (if it has content)
            if (content) {
                result.push({
                    type: "message",
                    role: validRole,
                    content: content,
                });
            }
            // Then add each tool call as a separate function_call item
            tool_calls.forEach((toolCall) => {
                result.push({
                    type: "function_call",
                    id: toolCall.id,
                    call_id: toolCall.id,
                    name: toolCall.name,
                    arguments: toolCall.arguments,
                });
            });
            return;
        }
        if (_type === "contentArray" && contentArray) {
            const textContent = contentArray.filter((c) => c._type === "message");
            const imageContent = contentArray.filter((c) => c._type === "image");
            const fileContent = contentArray.filter((c) => c._type === "file");
            if (textContent.length > 0) {
                result.push({
                    type: "message",
                    role: validRole,
                    content: textContent.map((c) => {
                        var _a;
                        return ({
                            type: "input_text",
                            text: (_a = c === null || c === void 0 ? void 0 : c.content) !== null && _a !== void 0 ? _a : "",
                        });
                    }),
                });
            }
            else if (imageContent.length > 0) {
                result.push({
                    type: "message",
                    role: validRole,
                    content: imageContent.map((c) => {
                        var _a;
                        return ({
                            type: "input_image",
                            detail: ((_a = c === null || c === void 0 ? void 0 : c.detail) !== null && _a !== void 0 ? _a : "auto"),
                            image_url: c === null || c === void 0 ? void 0 : c.image_url,
                            file_id: c === null || c === void 0 ? void 0 : c.file_id,
                        });
                    }),
                });
            }
            else if (fileContent.length > 0) {
                result.push({
                    type: "message",
                    role: validRole,
                    content: fileContent.map((c) => ({
                        type: "input_file",
                        file_data: c === null || c === void 0 ? void 0 : c.content,
                        file_id: c === null || c === void 0 ? void 0 : c.file_id,
                        filename: c === null || c === void 0 ? void 0 : c.filename,
                    })),
                });
            }
            return;
        }
        // Regular message
        result.push({
            type: "message",
            role: validRole,
            content: content || "",
        });
    });
    return result;
};
const convertTools = (tools) => {
    if (!tools)
        return [];
    return tools.map((tool) => {
        var _a, _b, _c, _d, _e, _f;
        return ({
            type: "function",
            // Support both Chat API (nested) and Responses API (flat) formats
            name: (_b = (_a = tool.function) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : tool.name,
            description: (_d = (_c = tool.function) === null || _c === void 0 ? void 0 : _c.description) !== null && _d !== void 0 ? _d : tool.description,
            parameters: (_f = (_e = tool.function) === null || _e === void 0 ? void 0 : _e.parameters) !== null && _f !== void 0 ? _f : tool.parameters,
        });
    });
};
const toExternalTools = (tools) => {
    if (!tools || !Array.isArray(tools))
        return undefined;
    return tools.map((tool) => {
        var _a;
        return ({
            type: "function",
            function: {
                name: tool === null || tool === void 0 ? void 0 : tool.name,
                description: (_a = tool === null || tool === void 0 ? void 0 : tool.description) !== null && _a !== void 0 ? _a : "",
                parameters: (tool === null || tool === void 0 ? void 0 : tool.parameters) || {},
            },
        });
    });
};
/**
 * Convert OpenAI tool_choice to internal format
 */
const convertToolChoice = (toolChoice) => {
    var _a;
    if (!toolChoice)
        return undefined;
    // Handle string values
    if (typeof toolChoice === "string") {
        if (toolChoice === "none" || toolChoice === "auto") {
            return { type: toolChoice };
        }
        else if (toolChoice === "required") {
            return { type: "any" };
        }
        return undefined;
    }
    // Handle object format
    if (typeof toolChoice === "object") {
        if (toolChoice.type === "function" && ((_a = toolChoice.function) === null || _a === void 0 ? void 0 : _a.name)) {
            return {
                type: "tool",
                name: toolChoice.function.name,
            };
        }
    }
    return undefined;
};
/**
 * Convert internal tool_choice back to OpenAI format
 */
const toExternalToolChoice = (toolChoice) => {
    if (!toolChoice)
        return undefined;
    // Handle basic types
    if (toolChoice.type === "none" || toolChoice.type === "auto") {
        return toolChoice.type;
    }
    // Handle "any" type (maps to "required" in OpenAI)
    if (toolChoice.type === "any") {
        return "required";
    }
    // Handle "tool" type with name
    if (toolChoice.type === "tool" && (toolChoice === null || toolChoice === void 0 ? void 0 : toolChoice.name)) {
        return {
            type: "function",
            function: {
                type: "function",
                name: toolChoice.name,
            },
        };
    }
    // Default to "auto" if we can't map it properly
    return "auto";
};
function convertToReasoningEffort(reasoning) {
    if (!reasoning)
        return undefined;
    return reasoning.effort;
}
function convertFromReasoningEffort(reasoning_effort) {
    if (!reasoning_effort)
        return undefined;
    return { effort: reasoning_effort };
}
function convertToVerbosity(text) {
    if (!text)
        return undefined;
    return text.verbosity;
}
function convertFromVerbosity(verbosity) {
    if (!verbosity)
        return undefined;
    return { verbosity };
}
exports.openaiResponseMapper = new builder_1.MapperBuilder("openai-response")
    .map("model", "model")
    .mapWithTransform("input", "messages", convertRequestInputToMessages, toExternalRequest)
    .map("instructions", "instructions")
    .map("temperature", "temperature")
    .map("top_p", "top_p")
    .map("n", "n")
    .map("stream", "stream")
    .map("max_output_tokens", "max_tokens")
    .map("parallel_tool_calls", "parallel_tool_calls")
    .mapWithTransform("reasoning", "reasoning_effort", convertToReasoningEffort, convertFromReasoningEffort)
    .mapWithTransform("text", "verbosity", convertToVerbosity, convertFromVerbosity)
    .mapWithTransform("tools", "tools", convertTools, toExternalTools)
    .mapWithTransform("tool_choice", "tool_choice", convertToolChoice, toExternalToolChoice)
    .map("frequency_penalty", "frequency_penalty")
    .map("presence_penalty", "presence_penalty")
    .map("seed", "seed")
    .build();
/**
 * Convert response to internal Message format
 */
const convertResponse = (responseBody) => {
    var _a, _b, _c, _d, _e;
    const messages = [];
    // Handle consolidated response from streamed OpenAI /v1/responses call
    // This format has responseBody.item instead of responseBody.output
    if (((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.item) === null || _a === void 0 ? void 0 : _a.content) && Array.isArray(responseBody.item.content)) {
        const item = responseBody.item;
        let messageText = "";
        let reasoningText = "";
        // Find the 'output_text' item in the content array
        const textContent = item.content.find((c) => c.type === "output_text");
        if (textContent && textContent.text) {
            messageText = textContent.text;
        }
        // Extract reasoning if present
        const reasoningContent = item.content.find((c) => c.type === "output_reasoning");
        if (reasoningContent && reasoningContent.text) {
            reasoningText = reasoningContent.text;
        }
        messages.push({
            _type: "message",
            role: item.role || "assistant",
            content: messageText,
            reasoning: reasoningText || undefined,
            id: item.id || "resp-msg-0",
        });
        return messages;
    }
    // Check for the 'output' array specific to the Responses API
    if (!responseBody ||
        !Array.isArray((_b = responseBody.output) !== null && _b !== void 0 ? _b : (_c = responseBody.response) === null || _c === void 0 ? void 0 : _c.output))
        return [];
    // Iterate through the output array
    ((_d = responseBody.output) !== null && _d !== void 0 ? _d : (_e = responseBody.response) === null || _e === void 0 ? void 0 : _e.output).forEach((outputItem, index) => {
        // Look for items of type 'message'
        if (outputItem.type === "message" && outputItem.content) {
            let messageText = "";
            let reasoningText = "";
            // The content is an array, find the 'output_text' item
            if (Array.isArray(outputItem.content)) {
                const textContent = outputItem.content.find((c) => c.type === "output_text");
                if (textContent && textContent.text) {
                    messageText = textContent.text;
                }
                // Extract reasoning if present
                const reasoningContent = outputItem.content.find((c) => c.type === "output_reasoning");
                if (reasoningContent && reasoningContent.text) {
                    reasoningText = reasoningContent.text;
                }
            }
            messages.push({
                _type: "message",
                role: outputItem.role || "assistant", // Get role from the message item
                content: messageText,
                reasoning: reasoningText || undefined,
                id: outputItem.id || `resp-msg-${index}`, // Use ID from the output item if available
            });
        }
        // Handle standalone reasoning items (e.g., from reasoning models like o1, o3)
        if (outputItem.type === "reasoning") {
            let reasoningContent = "";
            if (Array.isArray(outputItem.summary)) {
                reasoningContent = outputItem.summary
                    .map((s) => {
                    if (s.type === "summary_text" && s.text) {
                        return s.text;
                    }
                    return typeof s === "string" ? s : JSON.stringify(s);
                })
                    .join(" ");
            }
            else if (typeof outputItem.summary === "string") {
                reasoningContent = outputItem.summary;
            }
            else if (outputItem.summary) {
                reasoningContent = JSON.stringify(outputItem.summary);
            }
            messages.push({
                _type: "message",
                role: "assistant",
                reasoning: reasoningContent,
                content: "",
                id: outputItem.id || `resp-msg-reasoning-${index}`,
            });
        }
        // Handle function_call items (assistant tool calls in responses)
        if (outputItem.type === "function_call") {
            const toolCall = {
                id: outputItem.id || outputItem.call_id || `resp-tool-${index}`,
                name: outputItem.name,
                arguments: (0, chat_helpers_1.parseFunctionArguments)(outputItem.arguments),
            };
            messages.push({
                _type: "functionCall",
                role: "assistant",
                tool_calls: [toolCall],
                content: "",
                id: outputItem.id || `resp-msg-${index}`,
            });
        }
    });
    return messages;
};
const mapOpenAIResponse = ({ request, response, model, }) => {
    var _a, _b;
    // Map the request using our path mapper
    const mappedRequest = exports.openaiResponseMapper.toInternal({
        ...request,
        model: model || request.model,
    });
    // Convert instructions field to a system message at the beginning of messages array
    if (request.instructions && mappedRequest.messages) {
        const systemMessage = {
            _type: "message",
            role: "system",
            content: request.instructions,
            id: "instructions-system-msg",
        };
        mappedRequest.messages = [systemMessage, ...mappedRequest.messages];
    }
    else if (request.instructions && !mappedRequest.messages) {
        // If there are no messages but there are instructions, create messages array with just the system message
        const systemMessage = {
            _type: "message",
            role: "system",
            content: request.instructions,
            id: "instructions-system-msg",
        };
        mappedRequest.messages = [systemMessage];
    }
    // Create the LlmSchema structure
    const schema = {
        request: mappedRequest,
        response: null,
    };
    // Add response data if available
    if (response) {
        const messages = convertResponse(response);
        schema.response = {
            messages,
            model: model || response.model,
        };
    }
    // Get request text from mapped messages instead of raw request
    const getRequestPreviewText = () => {
        const requestMessages = schema.request.messages;
        if (!requestMessages || requestMessages.length === 0) {
            return (0, exports.getRequestText)(request); // Fallback to original method
        }
        // Look for the last user message or any message with content
        for (let i = requestMessages.length - 1; i >= 0; i--) {
            const message = requestMessages[i];
            // Handle contentArray type messages (messages with array content)
            if ((message === null || message === void 0 ? void 0 : message._type) === "contentArray" &&
                Array.isArray(message.contentArray)) {
                for (const item of message.contentArray) {
                    if ((item === null || item === void 0 ? void 0 : item._type) === "message" &&
                        item.content &&
                        typeof item.content === "string" &&
                        item.content.trim().length > 0) {
                        return item.content;
                    }
                }
            }
            // Handle regular messages with string content
            if ((message === null || message === void 0 ? void 0 : message.content) &&
                typeof message.content === "string" &&
                message.content.trim().length > 0) {
                return message.content;
            }
        }
        return "";
    };
    return {
        schema,
        preview: {
            concatenatedMessages: ((_a = schema.request.messages) !== null && _a !== void 0 ? _a : []).concat(((_b = schema.response) === null || _b === void 0 ? void 0 : _b.messages) || []),
            request: getRequestPreviewText(),
            response: (0, exports.getResponseText)(response),
            fullRequestText: () => JSON.stringify(request),
            fullResponseText: () => JSON.stringify(response),
        },
    };
};
exports.mapOpenAIResponse = mapOpenAIResponse;
