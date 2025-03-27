"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOpenAIRequest = exports.getRequestMessages = exports.getResponseText = void 0;
const contentHelpers_1 = require("../../utils/contentHelpers");
const messageUtils_1 = require("../../utils/messageUtils");
const chat_helpers_1 = require("./chat_helpers");
const getRequestText = (requestBody) => {
    try {
        const heliconeMessage = requestBody === null || requestBody === void 0 ? void 0 : requestBody.heliconeMessage;
        if (heliconeMessage) {
            return typeof heliconeMessage === "string"
                ? heliconeMessage
                : JSON.stringify(heliconeMessage);
        }
        const messages = requestBody === null || requestBody === void 0 ? void 0 : requestBody.messages;
        if (!Array.isArray(messages) || messages.length === 0) {
            return "";
        }
        const lastMessage = messages.at(-1);
        if (!lastMessage)
            return "";
        if (lastMessage.function_call || lastMessage.tool_calls) {
            return (0, chat_helpers_1.formatStreamingToolCalls)(lastMessage.tool_calls || [lastMessage.function_call]);
        }
        const lastMessageContent = lastMessage.content;
        if (Array.isArray(lastMessageContent)) {
            return (0, chat_helpers_1.handleArrayContent)(lastMessageContent);
        }
        if ((0, chat_helpers_1.isImageContent)(lastMessageContent)) {
            return "[Image]";
        }
        if (typeof lastMessageContent === "object" && lastMessageContent !== null) {
            return (0, chat_helpers_1.handleObjectContent)(lastMessageContent);
        }
        if (typeof lastMessageContent === "string") {
            return lastMessageContent;
        }
        return JSON.stringify(lastMessageContent || "");
    }
    catch (error) {
        console.error("Error parsing request text:", error);
        return "error_parsing_request";
    }
};
const getResponseText = (responseBody, statusCode = 200, model) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (statusCode === 0 || statusCode === null) {
        return "";
    }
    if ("error" in responseBody) {
        return responseBody.error.heliconeMessage;
    }
    try {
        if (![200, 201, -3].includes(statusCode)) {
            return ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) || (responseBody === null || responseBody === void 0 ? void 0 : responseBody.helicone_error) || "";
        }
        if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.object) === "chat.completion.chunk" ||
            ((_d = (_c = (_b = responseBody === null || responseBody === void 0 ? void 0 : responseBody.choices) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.delta) === null || _d === void 0 ? void 0 : _d.tool_calls)) {
            const choice = (_e = responseBody.choices) === null || _e === void 0 ? void 0 : _e[0];
            if ((_f = choice === null || choice === void 0 ? void 0 : choice.delta) === null || _f === void 0 ? void 0 : _f.content) {
                return choice.delta.content;
            }
            const toolCalls = ((_g = choice === null || choice === void 0 ? void 0 : choice.delta) === null || _g === void 0 ? void 0 : _g.tool_calls) || ((_h = choice === null || choice === void 0 ? void 0 : choice.message) === null || _h === void 0 ? void 0 : _h.tool_calls);
            if (toolCalls) {
                return (0, chat_helpers_1.formatStreamingToolCalls)(toolCalls);
            }
            if ((_j = choice === null || choice === void 0 ? void 0 : choice.delta) === null || _j === void 0 ? void 0 : _j.function_call) {
                return `Function Call: ${JSON.stringify(choice.delta.function_call)}`;
            }
            return "";
        }
        if (/^claude/.test(model)) {
            const claudeResponse = (0, chat_helpers_1.handleClaudeResponse)(responseBody);
            if (claudeResponse)
                return claudeResponse;
        }
        const firstChoice = (_k = responseBody === null || responseBody === void 0 ? void 0 : responseBody.choices) === null || _k === void 0 ? void 0 : _k[0];
        if (firstChoice === null || firstChoice === void 0 ? void 0 : firstChoice.message) {
            const { message } = firstChoice;
            const hasNoContent = (message === null || message === void 0 ? void 0 : message.content) === null || (message === null || message === void 0 ? void 0 : message.content) === undefined;
            if (hasNoContent) {
                if ((message === null || message === void 0 ? void 0 : message.text) && typeof message.text === "object") {
                    return JSON.stringify(message.text);
                }
                if ((message === null || message === void 0 ? void 0 : message.tool_calls) || (message === null || message === void 0 ? void 0 : message.function_call)) {
                    return (0, chat_helpers_1.formatStreamingToolCalls)(message.tool_calls || [message.function_call]);
                }
            }
            return message.content || "";
        }
        return "";
    }
    catch (error) {
        console.error("Error parsing response text:", error);
        return "error_parsing_response";
    }
};
exports.getResponseText = getResponseText;
const processFunctionCall = (msg) => {
    const toolCallMsg = (0, chat_helpers_1.handleToolCalls)(msg);
    return {
        ...toolCallMsg,
        content: toolCallMsg.content || "",
        _type: "functionCall",
    };
};
const processToolResponse = (msg) => {
    const toolResponseMsg = (0, chat_helpers_1.handleToolResponse)(msg);
    return {
        ...toolResponseMsg,
        content: toolResponseMsg.content || "",
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
};
const processArrayContent = (msg) => {
    // Process each item in the array uniformly
    return {
        contentArray: msg.content.map((item) => {
            if (item.type === "text") {
                return {
                    content: item.text || "",
                    role: msg.role || "user",
                    _type: "message",
                };
            }
            else if (item.type === "image_url") {
                return {
                    role: msg.role || "user",
                    _type: "image",
                    content: "",
                    image_url: item.image_url.url,
                };
            }
            return {
                content: JSON.stringify(item),
                role: msg.role || "user",
                _type: "message",
            };
        }),
        _type: "contentArray",
        role: msg.role,
    };
};
const processSingleImage = (msg) => {
    if (typeof msg.content.image_url === "string") {
        return {
            role: msg.role,
            _type: "image",
            content: msg.content.text || "",
            image_url: msg.content.image_url,
        };
    }
    return {
        role: msg.role,
        _type: "image",
        content: msg.content.text || "",
        image_url: msg.content.image_url.url,
    };
};
const processTextMessage = (msg) => {
    return {
        content: (0, messageUtils_1.getFormattedMessageContent)(msg.content) || "",
        role: msg.role || "user",
        _type: (0, contentHelpers_1.getContentType)(msg),
    };
};
const openAIMessageToHeliconeMessage = (msg) => {
    var _a;
    if (msg.function_call || msg.tool_calls) {
        return processFunctionCall(msg);
    }
    if (msg.role === "tool" || msg.role === "function") {
        return processToolResponse(msg);
    }
    if (Array.isArray(msg.content)) {
        return processArrayContent(msg);
    }
    if (((_a = msg.content) === null || _a === void 0 ? void 0 : _a.type) === "image_url") {
        return processSingleImage(msg);
    }
    return processTextMessage(msg);
};
const getRequestMessages = (request) => {
    var _a, _b;
    return (_b = (_a = request.messages) === null || _a === void 0 ? void 0 : _a.map(openAIMessageToHeliconeMessage)) !== null && _b !== void 0 ? _b : [];
};
exports.getRequestMessages = getRequestMessages;
const getLLMSchemaResponse = (response) => {
    var _a;
    if ("error" in response) {
        return {
            error: {
                heliconeMessage: "heliconeMessage" in response.error
                    ? response.error.heliconeMessage
                    : JSON.stringify(response.error),
            },
        };
    }
    return {
        messages: (_a = response === null || response === void 0 ? void 0 : response.choices) === null || _a === void 0 ? void 0 : _a.map((choice) => {
            const message = choice === null || choice === void 0 ? void 0 : choice.message;
            if (!message)
                return null;
            return openAIMessageToHeliconeMessage(message);
        }).filter(Boolean),
        model: response === null || response === void 0 ? void 0 : response.model,
    };
};
const mapOpenAIRequest = ({ request, response, statusCode = 200, model, }) => {
    var _a, _b, _c, _d, _e;
    const requestToReturn = {
        frequency_penalty: request.frequency_penalty,
        max_tokens: request.max_tokens,
        model: model || request.model,
        presence_penalty: request.presence_penalty,
        temperature: request.temperature,
        top_p: request.top_p,
        messages: (0, exports.getRequestMessages)(request),
        tool_choice: request.tool_choice,
        tools: (_a = request.tools) === null || _a === void 0 ? void 0 : _a.map((tool) => ({
            name: tool.name || tool.function.name,
            description: tool.description || tool.function.description,
            parameters: tool.parameters || tool.function.parameters,
        })),
    };
    const llmSchema = {
        request: requestToReturn,
        response: getLLMSchemaResponse(response),
    };
    return {
        schema: llmSchema,
        preview: {
            request: getRequestText(request),
            response: (0, exports.getResponseText)(response, statusCode, model),
            concatenatedMessages: (_e = (_b = llmSchema.request.messages) === null || _b === void 0 ? void 0 : _b.concat((_d = (_c = llmSchema.response) === null || _c === void 0 ? void 0 : _c.messages) !== null && _d !== void 0 ? _d : [])) !== null && _e !== void 0 ? _e : [],
        },
    };
};
exports.mapOpenAIRequest = mapOpenAIRequest;
