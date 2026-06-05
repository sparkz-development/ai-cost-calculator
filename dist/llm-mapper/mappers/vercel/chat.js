"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapVercelRequest = void 0;
const randomId = () => {
    return (Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15));
};
const getRequestText = (requestBody) => {
    if (requestBody.tooLarge) {
        return "Helicone Message: Input too large";
    }
    // Handle Vercel AI SDK format with 'prompt' field
    if (requestBody.prompt && Array.isArray(requestBody.prompt)) {
        const lastMessage = requestBody.prompt[requestBody.prompt.length - 1];
        if (typeof (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.content) === "string") {
            return lastMessage.content;
        }
        if (Array.isArray(lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.content)) {
            return lastMessage.content
                .map((item) => item.text || JSON.stringify(item))
                .join(" ");
        }
    }
    // Handle standard format with 'messages' field
    else if (requestBody.messages && Array.isArray(requestBody.messages)) {
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
    var _a, _b, _c, _d;
    if ([200, 201, -3].includes(statusCode)) {
        if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) {
            return responseBody.error.message || "";
        }
        // Handle Vercel AI SDK response format
        if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.content) && Array.isArray(responseBody.content)) {
            return responseBody.content
                .map((item) => {
                if (item.type === "text" && item.text) {
                    return item.text;
                }
                return "";
            })
                .join("");
        }
        // Handle streaming format
        if ((_c = (_b = (_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.choices) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content) {
            return responseBody.choices[0].message.content;
        }
        return "";
    }
    else if (statusCode === 0 || statusCode === null) {
        return "";
    }
    else {
        return ((_d = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _d === void 0 ? void 0 : _d.message) || "";
    }
};
const vercelMessageToMessage = (message) => {
    var _a, _b;
    const messageRole = message.role || "user";
    // Handle content array - flatten it to extract text
    if (Array.isArray(message.content)) {
        const textContent = message.content
            .filter((c) => c.type === "text")
            .map((c) => c.text || "")
            .join("");
        // Check if there are any images
        const imageContent = message.content.find((c) => c.type === "image" || c.type === "image_url");
        if (imageContent) {
            return {
                content: textContent,
                role: messageRole,
                _type: "image",
                image_url: ((_a = imageContent.image_url) === null || _a === void 0 ? void 0 : _a.url) || imageContent.url,
                id: randomId(),
            };
        }
        return {
            content: textContent,
            role: messageRole,
            _type: "message",
            id: randomId(),
        };
    }
    if (message.type === "image_url") {
        return {
            content: "",
            role: messageRole,
            _type: "image",
            image_url: (_b = message.image_url) === null || _b === void 0 ? void 0 : _b.url,
            id: randomId(),
        };
    }
    return {
        content: typeof message.content === "string"
            ? message.content
            : message.text || JSON.stringify(message.content || ""),
        role: messageRole,
        _type: "message",
        id: randomId(),
    };
};
const getRequestMessages = (request) => {
    const requestMessages = [];
    // Handle Vercel AI SDK format with 'prompt' field
    if (request.prompt && Array.isArray(request.prompt)) {
        requestMessages.push(...request.prompt.map((message) => vercelMessageToMessage(message)));
    }
    // Handle standard format with 'messages' field
    else if (request.messages && Array.isArray(request.messages)) {
        requestMessages.push(...request.messages.map((message) => vercelMessageToMessage(message)));
    }
    return requestMessages;
};
const getResponseMessages = (response) => {
    const messages = [];
    // Handle Vercel AI SDK non-streaming response format
    if ((response === null || response === void 0 ? void 0 : response.content) && Array.isArray(response.content)) {
        const textContent = response.content
            .filter((item) => item.type === "text")
            .map((item) => item.text)
            .join("");
        if (textContent) {
            messages.push({
                id: randomId(),
                role: "assistant",
                content: textContent,
                _type: "message",
            });
        }
    }
    // Handle streaming format (OpenAI-compatible)
    else if ((response === null || response === void 0 ? void 0 : response.choices) && Array.isArray(response.choices)) {
        response.choices.forEach((choice) => {
            if (choice.message) {
                if (choice.message.tool_calls &&
                    Array.isArray(choice.message.tool_calls)) {
                    messages.push({
                        id: randomId(),
                        role: "assistant",
                        content: "",
                        _type: "functionCall",
                        tool_calls: choice.message.tool_calls.map((toolCall) => {
                            var _a, _b, _c;
                            let parsedArguments = ((_a = toolCall.function) === null || _a === void 0 ? void 0 : _a.arguments) || {};
                            if (typeof ((_b = toolCall.function) === null || _b === void 0 ? void 0 : _b.arguments) === "string") {
                                try {
                                    parsedArguments = JSON.parse(toolCall.function.arguments);
                                }
                                catch (e) {
                                    console.error("Error parsing tool call arguments:", e);
                                    parsedArguments = {};
                                }
                            }
                            return {
                                id: toolCall.id,
                                name: ((_c = toolCall.function) === null || _c === void 0 ? void 0 : _c.name) || "",
                                arguments: parsedArguments,
                            };
                        }),
                    });
                }
                else if (choice.message.content) {
                    messages.push({
                        id: randomId(),
                        role: choice.message.role || "assistant",
                        content: choice.message.content,
                        _type: "message",
                    });
                }
            }
        });
    }
    return messages;
};
const getModelFromResponse = (response, request, model) => {
    var _a, _b, _c;
    // Try to get model from Vercel's provider metadata
    return (((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.providerMetadata) === null || _a === void 0 ? void 0 : _a.gateway) === null || _b === void 0 ? void 0 : _b.routing) === null || _c === void 0 ? void 0 : _c.originalModelId) ||
        (response === null || response === void 0 ? void 0 : response.modelId) ||
        (response === null || response === void 0 ? void 0 : response.model) ||
        (request === null || request === void 0 ? void 0 : request.model) ||
        model ||
        "unknown");
};
const mapVercelRequest = ({ request, response, statusCode = 200, model, }) => {
    var _a;
    const requestMessages = getRequestMessages(request);
    const responseMessages = getResponseMessages(response);
    const responseModel = getModelFromResponse(response, request, model);
    const llmSchema = {
        request: {
            messages: requestMessages,
            model: request.model || model,
            max_tokens: request.maxOutputTokens || request.maxTokens || request.max_tokens,
            temperature: request.temperature,
            top_p: request.topP || request.top_p,
            tools: (_a = request.tools) === null || _a === void 0 ? void 0 : _a.map((tool) => {
                var _a, _b, _c;
                return ({
                    name: ((_a = tool.function) === null || _a === void 0 ? void 0 : _a.name) || "",
                    description: ((_b = tool.function) === null || _b === void 0 ? void 0 : _b.description) || "",
                    parameters: ((_c = tool.function) === null || _c === void 0 ? void 0 : _c.parameters) || {},
                });
            }),
            tool_choice: request.toolChoice || request.tool_choice,
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
                model: responseModel,
            },
    };
    const concatenatedMessages = [...requestMessages, ...responseMessages];
    return {
        schema: llmSchema,
        preview: {
            request: getRequestText(request),
            response: getResponseText(response, statusCode),
            concatenatedMessages,
        },
    };
};
exports.mapVercelRequest = mapVercelRequest;
