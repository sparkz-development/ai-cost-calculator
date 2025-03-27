"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestMessages = void 0;
const contentHelpers_1 = require("../../utils/contentHelpers");
const randomId = () => {
    return (Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15));
};
const getMessageContent = (message) => {
    if (message.type === "text") {
        return message.text;
    }
    if (message.type === "image" || message.type === "image_url") {
        return "";
    }
    if (message.type === "tool_use") {
        return `${message.name}(${JSON.stringify(message.input)})`;
    }
    // tool_result is handled below
    return typeof message.content === "string"
        ? message.content
        : JSON.stringify(message.content);
};
const anthropicMessageToMessage = (message, role) => {
    var _a, _b, _c;
    const messageRole = role || message.role;
    // Handle AWS Bedrock format with content array containing text objects
    if (Array.isArray(message.content) && ((_a = message.content[0]) === null || _a === void 0 ? void 0 : _a.text)) {
        return {
            content: message.content.map((c) => c.text).join(" "),
            role: messageRole,
            _type: "message",
            id: randomId(),
        };
    }
    // Handle array content (for images + text, tool use, tool results)
    if (Array.isArray(message.content)) {
        return {
            role: messageRole,
            _type: "contentArray",
            contentArray: message.content.map((c) => anthropicMessageToMessage(c, messageRole)),
            id: randomId(),
        };
    }
    if (message.type === "image" || message.type === "image_url") {
        return {
            content: getMessageContent(message),
            role: messageRole,
            _type: "image",
            image_url: message.type === "image" || message.type === "image_url"
                ? ((_b = message.image_url) === null || _b === void 0 ? void 0 : _b.url) || ((_c = message.source) === null || _c === void 0 ? void 0 : _c.data)
                : undefined,
            id: randomId(),
        };
    }
    if (message.type === "tool_use") {
        return {
            content: getMessageContent(message),
            role: messageRole,
            _type: "function",
            tool_calls: [
                {
                    name: message.name,
                    arguments: message.input,
                },
            ],
            id: randomId(),
        };
    }
    if (message.type === "tool_result") {
        return {
            content: getMessageContent(message),
            role: messageRole,
            _type: "functionCall",
            tool_call_id: message.tool_use_id,
            id: randomId(),
        };
    }
    return {
        content: getMessageContent(message),
        role: messageRole,
        _type: (0, contentHelpers_1.getContentType)(message),
        id: randomId(),
    };
};
const getRequestMessages = (request) => {
    var _a;
    const requestMessages = [];
    // Add system message first if it exists
    if ((request === null || request === void 0 ? void 0 : request.system) &&
        !(Array.isArray(request.system) && request.system.length === 0)) {
        requestMessages.push({
            id: randomId(),
            role: "system",
            content: Array.isArray(request.system)
                ? request.system
                    .map((item) => item.text || JSON.stringify(item))
                    .join(" ")
                : typeof request.system === "string"
                    ? request.system
                    : JSON.stringify(request.system),
            _type: "message",
        });
    }
    requestMessages.push(...(((_a = request.messages) === null || _a === void 0 ? void 0 : _a.map((message) => {
        return anthropicMessageToMessage(message);
    })) || []));
    return requestMessages;
};
exports.getRequestMessages = getRequestMessages;
