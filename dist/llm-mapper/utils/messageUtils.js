"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedMessageContent = void 0;
exports.getRequestMessages = getRequestMessages;
exports.getResponseMessage = getResponseMessage;
exports.getMessages = getMessages;
function removeLeadingWhitespace(str) {
    if (typeof str !== "string")
        return "";
    return str.replace(/^\s+/, ""); // Replace one or more whitespace characters at the beginning of the string with an empty string
}
const getFormattedMessageContent = (content) => {
    if (Array.isArray(content)) {
        if (content.length > 0 && typeof content[0] === "string") {
            return content[0];
        }
        const textMessage = content.find((msg) => msg.type === "text");
        return (textMessage === null || textMessage === void 0 ? void 0 : textMessage.text) || "";
    }
    return removeLeadingWhitespace((content === null || content === void 0 ? void 0 : content.toString()) || "");
};
exports.getFormattedMessageContent = getFormattedMessageContent;
// Helper functions
function getRequestMessages(llmSchema, requestBody) {
    var _a, _b;
    let messages = (_b = (_a = llmSchema === null || llmSchema === void 0 ? void 0 : llmSchema.request.messages) !== null && _a !== void 0 ? _a : requestBody === null || requestBody === void 0 ? void 0 : requestBody.messages) !== null && _b !== void 0 ? _b : [];
    // Process each message to ensure correct formatting
    messages = messages.map((msg) => {
        if (Array.isArray(msg.content)) {
            // Handle array content (e.g., tool results)
            return {
                ...msg,
                content: msg.content.map((item) => {
                    if (item.type === "tool_result") {
                        return {
                            type: "text",
                            text: `tool_result(${item.content})`,
                        };
                    }
                    return item;
                }),
            };
        }
        return msg;
    });
    if ((requestBody === null || requestBody === void 0 ? void 0 : requestBody.system) &&
        !messages.some((msg) => (msg === null || msg === void 0 ? void 0 : msg.role) === "system" && (msg === null || msg === void 0 ? void 0 : msg.content) === (requestBody === null || requestBody === void 0 ? void 0 : requestBody.system))) {
        messages = [
            {
                id: crypto.randomUUID(),
                role: "system",
                content: requestBody === null || requestBody === void 0 ? void 0 : requestBody.system,
            },
            ...messages,
        ];
    }
    return messages;
}
function getResponseMessage(llmSchema, responseBody, model) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    if (/^claude/.test(model)) {
        if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.content) {
            // Handle Anthropic (Claude) response
            if (Array.isArray(responseBody === null || responseBody === void 0 ? void 0 : responseBody.content)) {
                return {
                    id: responseBody.id || crypto.randomUUID(),
                    role: "assistant",
                    content: responseBody.content,
                    _type: "message",
                };
            }
            return {
                id: responseBody.id || crypto.randomUUID(),
                role: "assistant",
                content: (_c = (_b = (_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.content) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.text) !== null && _c !== void 0 ? _c : "",
                _type: "message",
            };
        }
    }
    else {
        // Handle OpenAI response
        if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.object) === "chat.completion.chunk") {
            // Handle streaming response chunk
            const choice = (_d = responseBody.choices) === null || _d === void 0 ? void 0 : _d[0];
            if (choice) {
                return {
                    id: responseBody.id || crypto.randomUUID(),
                    role: "assistant",
                    content: (_f = (_e = choice.delta) === null || _e === void 0 ? void 0 : _e.content) !== null && _f !== void 0 ? _f : "",
                    tool_calls: ((_g = choice.delta) === null || _g === void 0 ? void 0 : _g.function_call) || ((_h = choice.delta) === null || _h === void 0 ? void 0 : _h.tool_calls),
                    _type: "message",
                };
            }
        }
        else {
            // Handle standard OpenAI response
            const openAIMessage = (_p = (_l = (_k = (_j = llmSchema === null || llmSchema === void 0 ? void 0 : llmSchema.response) === null || _j === void 0 ? void 0 : _j.messages) === null || _k === void 0 ? void 0 : _k[0]) !== null && _l !== void 0 ? _l : (_o = (_m = responseBody === null || responseBody === void 0 ? void 0 : responseBody.choices) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.message) !== null && _p !== void 0 ? _p : null;
            if (openAIMessage) {
                return {
                    ...openAIMessage,
                    id: openAIMessage.id || crypto.randomUUID(),
                    model: model,
                };
            }
        }
    }
    return null;
}
function getMessages(requestMessages, responseMessage, status) {
    let messages = requestMessages || [];
    if (status === 200 && responseMessage) {
        messages = messages.concat([responseMessage]);
    }
    return messages;
}
