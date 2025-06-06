"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOpenAIResponse = exports.openaiResponseMapper = void 0;
const builder_1 = require("../../path-mapper/builder");
const typeMap = {
    input_text: "message",
    input_image: "image",
    input_file: "file",
};
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
    return input
        .map((msg, msgIdx) => {
        if (typeof msg.content === "string") {
            return {
                _type: "message",
                role: msg.role,
                type: "input_text",
                content: msg.content,
                id: `req-msg-${msgIdx}`,
            };
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
            return {
                _type: "contentArray",
                role: msg.role,
                id: `req-msg-${msgIdx}`,
                contentArray,
            };
        }
        return null;
    })
        .filter(Boolean);
};
const toExternalRequest = (responses) => {
    if (!responses)
        return [];
    return responses.map(({ role, _type, content, contentArray }) => {
        const validRole = role || "user";
        if (_type === "contentArray" && contentArray) {
            const textContent = contentArray.filter((c) => c._type === "message");
            const imageContent = contentArray.filter((c) => c._type === "image");
            const fileContent = contentArray.filter((c) => c._type === "file");
            if (textContent.length > 0) {
                return {
                    role: validRole,
                    content: textContent.map((c) => {
                        var _a;
                        return ({
                            type: "input_text",
                            text: (_a = c.content) !== null && _a !== void 0 ? _a : "",
                        });
                    }),
                };
            }
            if (imageContent.length > 0) {
                return {
                    role: validRole,
                    content: imageContent.map((c) => {
                        var _a;
                        return ({
                            type: "input_image",
                            detail: ((_a = c.detail) !== null && _a !== void 0 ? _a : "auto"),
                            image_url: c.image_url,
                            file_id: c.file_id,
                        });
                    }),
                };
            }
            if (fileContent.length > 0) {
                return {
                    role: validRole,
                    content: fileContent.map((c) => ({
                        type: "input_file",
                        file_data: c.content,
                        file_id: c.file_id,
                        filename: c.filename,
                    })),
                };
            }
            return {
                role: validRole,
                content: "",
            };
        }
        return {
            role: validRole,
            content: content || "",
        };
    });
};
const convertTools = (tools) => {
    if (!tools)
        return [];
    return tools.map((tool) => ({
        type: "function",
        name: tool.function.name,
        description: tool.function.description,
        parameters: tool.function.parameters,
    }));
};
const toExternalTools = (tools) => {
    if (!tools || !Array.isArray(tools))
        return undefined;
    return tools.map((tool) => ({
        type: "function",
        function: {
            name: tool.name,
            description: tool.description,
            parameters: tool.parameters || {},
        },
    }));
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
    if (toolChoice.type === "tool" && toolChoice.name) {
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
    .map("reasoning", "reasoning_effort")
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
    // Check for the 'output' array specific to the Responses API
    if (!responseBody || !Array.isArray(responseBody.output))
        return [];
    const messages = [];
    // Iterate through the output array
    responseBody.output.forEach((outputItem, index) => {
        // Look for items of type 'message'
        if (outputItem.type === "message" && outputItem.content) {
            let messageText = "";
            // The content is an array, find the 'output_text' item
            if (Array.isArray(outputItem.content)) {
                const textContent = outputItem.content.find((c) => c.type === "output_text");
                if (textContent && textContent.text) {
                    messageText = textContent.text;
                }
            }
            messages.push({
                _type: "message",
                role: outputItem.role || "assistant", // Get role from the message item
                content: messageText,
                id: outputItem.id || `resp-msg-${index}`, // Use ID from the output item if available
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
    return {
        schema,
        preview: {
            concatenatedMessages: ((_a = schema.request.messages) !== null && _a !== void 0 ? _a : []).concat(((_b = schema.response) === null || _b === void 0 ? void 0 : _b.messages) || []),
            request: JSON.stringify(request),
            response: JSON.stringify(response),
            fullRequestText: () => JSON.stringify(request),
            fullResponseText: () => JSON.stringify(response),
        },
    };
};
exports.mapOpenAIResponse = mapOpenAIResponse;
