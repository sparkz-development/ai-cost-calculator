"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapLlamaRequest = void 0;
// NOTE FOR DEVS:
// -> This Llama mapper is WIP! It takes a lot of code/inspo
// from the Anthropic mapper - hopefully everything is supported but
// definitely something that will be improved as we go.
const randomId = () => {
    return (Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15));
};
const getRequestText = (requestBody) => {
    if (requestBody.tooLarge) {
        return "Helicone Message: Input too large";
    }
    if (requestBody.messages && Array.isArray(requestBody.messages)) {
        const lastMessage = requestBody.messages[requestBody.messages.length - 1];
        if (typeof (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.content) === "string") {
            return lastMessage.content;
        }
        if (Array.isArray(lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.content)) {
            return lastMessage.content
                .map((item) => item.text || JSON.stringify(item))
                .join(" ");
        }
    }
    return JSON.stringify(requestBody);
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a, _b;
    if ([200, 201, -3].includes(statusCode)) {
        if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) {
            return responseBody.error.message || "";
        }
        if ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.completion_message) === null || _a === void 0 ? void 0 : _a.content) {
            const content = responseBody.completion_message.content;
            if (typeof content === "string") {
                return content;
            }
            if (typeof content === "object" && content.text) {
                return content.text;
            }
        }
        return "";
    }
    else if (statusCode === 0 || statusCode === null) {
        return "";
    }
    else {
        return ((_b = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _b === void 0 ? void 0 : _b.message) || "";
    }
};
const llamaMessageToMessage = (message) => {
    var _a;
    const messageRole = message.role || "user";
    if (Array.isArray(message.content)) {
        return {
            role: messageRole,
            _type: "contentArray",
            contentArray: message.content.map((c) => llamaMessageToMessage({
                ...c,
                role: messageRole
            })),
            id: randomId(),
        };
    }
    if (message.type === "image_url") {
        return {
            content: "",
            role: messageRole,
            _type: "image",
            image_url: (_a = message.image_url) === null || _a === void 0 ? void 0 : _a.url,
            id: randomId(),
        };
    }
    return {
        content: typeof message.content === "string"
            ? message.content
            : (message.text || JSON.stringify(message.content || "")),
        role: messageRole,
        _type: "message",
        id: randomId(),
    };
};
const getRequestMessages = (request) => {
    const requestMessages = [];
    if (request.messages && Array.isArray(request.messages)) {
        requestMessages.push(...request.messages.map((message) => llamaMessageToMessage(message)));
    }
    return requestMessages;
};
const getResponseMessages = (response) => {
    const messages = [];
    if (response === null || response === void 0 ? void 0 : response.completion_message) {
        const completionMessage = response.completion_message;
        if (completionMessage.tool_calls && Array.isArray(completionMessage.tool_calls)) {
            messages.push({
                id: randomId(),
                role: "assistant",
                content: "",
                _type: "functionCall",
                tool_calls: completionMessage.tool_calls.map((toolCall) => {
                    var _a, _b, _c;
                    return ({
                        id: toolCall.id,
                        name: ((_a = toolCall.function) === null || _a === void 0 ? void 0 : _a.name) || "",
                        arguments: typeof ((_b = toolCall.function) === null || _b === void 0 ? void 0 : _b.arguments) === "string"
                            ? JSON.parse(toolCall.function.arguments)
                            : ((_c = toolCall.function) === null || _c === void 0 ? void 0 : _c.arguments) || {},
                    });
                }),
            });
        }
        else if (completionMessage.content) {
            const content = completionMessage.content;
            let textContent = "";
            if (typeof content === "string") {
                textContent = content;
            }
            else if (typeof content === "object" && content.text) {
                textContent = content.text;
            }
            else {
                textContent = JSON.stringify(content);
            }
            messages.push({
                id: randomId(),
                role: completionMessage.role || "assistant",
                content: textContent,
                _type: "message",
            });
        }
    }
    return messages;
};
const mapLlamaRequest = ({ request, response, statusCode = 200, model, }) => {
    var _a, _b;
    const requestMessages = getRequestMessages(request);
    const responseMessages = getResponseMessages(response);
    const llmSchema = {
        request: {
            messages: requestMessages,
            model: request.model || model,
            max_tokens: request.max_completion_tokens,
            temperature: request.temperature,
            top_p: request.top_p,
            tools: (_a = request.tools) === null || _a === void 0 ? void 0 : _a.map((tool) => {
                var _a, _b, _c;
                return ({
                    name: ((_a = tool.function) === null || _a === void 0 ? void 0 : _a.name) || "",
                    description: ((_b = tool.function) === null || _b === void 0 ? void 0 : _b.description) || "",
                    parameters: ((_c = tool.function) === null || _c === void 0 ? void 0 : _c.parameters) || {},
                });
            }),
            tool_choice: request.tool_choice,
            stream: request.stream,
        },
        response: (response === null || response === void 0 ? void 0 : response.error)
            ? {
                error: {
                    heliconeMessage: response.error.message || JSON.stringify(response.error),
                },
            }
            : {
                messages: responseMessages,
                model: ((_b = response === null || response === void 0 ? void 0 : response.completion_message) === null || _b === void 0 ? void 0 : _b.model) || request.model || model,
            },
    };
    const concatenatedMessages = [
        ...requestMessages,
        ...responseMessages,
    ];
    return {
        schema: llmSchema,
        preview: {
            request: getRequestText(request),
            response: getResponseText(response, statusCode),
            concatenatedMessages,
        },
    };
};
exports.mapLlamaRequest = mapLlamaRequest;
