"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleClaudeResponse = exports.formatStreamingToolCalls = exports.handleToolResponse = exports.handleImageMessage = exports.handleToolCalls = exports.handleObjectContent = exports.handleArrayContent = exports.mapToolCallToFunction = exports.parseFunctionArguments = exports.isImageContent = void 0;
const isImageContent = (content) => {
    var _a;
    return (typeof content === "object" &&
        content !== null &&
        content.type === "image_url" &&
        ((_a = content.image_url) === null || _a === void 0 ? void 0 : _a.url));
};
exports.isImageContent = isImageContent;
const parseFunctionArguments = (args) => {
    try {
        return JSON.parse(args !== null && args !== void 0 ? args : "{}");
    }
    catch (_a) {
        return {};
    }
};
exports.parseFunctionArguments = parseFunctionArguments;
const mapToolCallToFunction = (tool) => {
    var _a, _b, _c;
    return ({
        name: (_b = (_a = tool.function) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "",
        arguments: (0, exports.parseFunctionArguments)((_c = tool.function) === null || _c === void 0 ? void 0 : _c.arguments),
    });
};
exports.mapToolCallToFunction = mapToolCallToFunction;
const handleArrayContent = (content) => {
    const textContent = content.find((item) => typeof item === "string" || (item === null || item === void 0 ? void 0 : item.type) === "text");
    if (textContent) {
        return typeof textContent === "string" ? textContent : textContent.text;
    }
    const imageContent = content.find(exports.isImageContent);
    if (imageContent) {
        return "[Image]";
    }
    return JSON.stringify(content);
};
exports.handleArrayContent = handleArrayContent;
const handleObjectContent = (content) => {
    if (content.transcript)
        return content.transcript;
    if (content.text)
        return content.text;
    return JSON.stringify(content);
};
exports.handleObjectContent = handleObjectContent;
const handleToolCalls = (message) => {
    var _a, _b, _c;
    return ({
        content: message.content || "",
        role: (_a = message.role) !== null && _a !== void 0 ? _a : "assistant",
        tool_calls: message.function_call
            ? [
                {
                    name: message.function_call.name,
                    arguments: (0, exports.parseFunctionArguments)(message.function_call.arguments),
                },
            ]
            : (_c = (_b = message.tool_calls) === null || _b === void 0 ? void 0 : _b.map(exports.mapToolCallToFunction)) !== null && _c !== void 0 ? _c : [],
        _type: "functionCall",
    });
};
exports.handleToolCalls = handleToolCalls;
const handleImageMessage = (msg, imageContent) => {
    var _a;
    return ({
        role: msg.role,
        _type: "image",
        content: (_a = msg.content) === null || _a === void 0 ? void 0 : _a.text,
        image_url: imageContent.image_url.url,
    });
};
exports.handleImageMessage = handleImageMessage;
const handleToolResponse = (msg) => {
    var _a, _b;
    if (msg.role === "function") {
        return {
            content: msg.content,
            role: msg.role,
            _type: "function",
            name: msg.name,
            tool_calls: [
                {
                    name: msg.name,
                    arguments: {
                        query_result: msg.content,
                    },
                },
            ],
        };
    }
    if (msg.role === "tool") {
        return {
            content: msg.content,
            role: msg.role,
            tool_call_id: msg.tool_call_id,
            _type: "function",
            name: msg.name,
            tool_calls: [
                {
                    name: msg.name,
                    arguments: {
                        query_result: msg.content,
                    },
                },
            ],
        };
    }
    return {
        content: msg.content,
        role: msg.role,
        tool_call_id: msg.tool_call_id,
        _type: "function",
        tool_calls: (_b = (_a = msg.tool_calls) === null || _a === void 0 ? void 0 : _a.map(exports.mapToolCallToFunction)) !== null && _b !== void 0 ? _b : [],
    };
};
exports.handleToolResponse = handleToolResponse;
const formatStreamingToolCalls = (toolCalls) => {
    return toolCalls
        .map((tool) => {
        var _a, _b;
        const args = (0, exports.parseFunctionArguments)((_a = tool.function) === null || _a === void 0 ? void 0 : _a.arguments);
        return `${(_b = tool.function) === null || _b === void 0 ? void 0 : _b.name}(${JSON.stringify(args)})`;
    })
        .join("\n");
};
exports.formatStreamingToolCalls = formatStreamingToolCalls;
const handleClaudeResponse = (responseBody) => {
    var _a, _b, _c;
    if (((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.content) === null || _a === void 0 ? void 0 : _a[0].type) === "tool_use") {
        const toolUse = responseBody.content.find((item) => item.type === "tool_use");
        if (toolUse) {
            return `${toolUse.name}(${JSON.stringify(toolUse.input)})`;
        }
    }
    if ((_c = (_b = responseBody === null || responseBody === void 0 ? void 0 : responseBody.content) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.text) {
        return responseBody.content[0].text;
    }
    return undefined;
};
exports.handleClaudeResponse = handleClaudeResponse;
