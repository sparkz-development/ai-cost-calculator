"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapGeminiPro = void 0;
const getRequestText = (requestBody) => {
    try {
        const contents = requestBody.contents;
        const messages = Array.isArray(contents)
            ? contents
            : [contents].filter(Boolean);
        const lastMessage = messages[messages.length - 1];
        if (!lastMessage)
            return "";
        const parts = Array.isArray(lastMessage.parts)
            ? lastMessage.parts
            : [lastMessage.parts].filter(Boolean);
        const textParts = parts.filter((part) => part && typeof part.text === "string");
        return textParts.map((part) => part.text).join("\n");
    }
    catch (error) {
        console.error("Error parsing request text:", error);
        return "error_parsing_request";
    }
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a;
    try {
        if (statusCode === 0 || statusCode === null)
            return "";
        if (![200, 201, -3].includes(statusCode)) {
            return ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) || (responseBody === null || responseBody === void 0 ? void 0 : responseBody.helicone_error) || "";
        }
        responseBody = Array.isArray(responseBody)
            ? responseBody
            : [responseBody].filter(Boolean);
        return responseBody
            .map((response) => {
            if (!response || !Array.isArray(response.candidates))
                return "";
            return response.candidates
                .map((candidate) => {
                if (!candidate)
                    return "";
                const contents = Array.isArray(candidate.content)
                    ? candidate.content
                    : [candidate.content].filter(Boolean);
                return contents
                    .map((content) => {
                    if (!content)
                        return "";
                    const parts = Array.isArray(content.parts)
                        ? content.parts
                        : [content.parts].filter(Boolean);
                    return parts
                        .map((part) => {
                        if (part === null || part === void 0 ? void 0 : part.functionCall) {
                            return `Function Call: ${JSON.stringify(part.functionCall)}`;
                        }
                        return part && typeof part.text === "string"
                            ? part.text
                            : "";
                    })
                        .filter(Boolean)
                        .join("");
                })
                    .join("");
            })
                .join("");
        })
            .join("");
    }
    catch (error) {
        console.error("Error parsing response text:", error);
        return "error_parsing_response";
    }
};
const getRequestMessages = (contents) => {
    return contents
        .map((content) => {
        if (!content)
            return null;
        const parts = Array.isArray(content.parts)
            ? content.parts
            : [content.parts].filter(Boolean);
        if (parts.length === 0)
            return null;
        const mappedParts = parts
            .map((part) => {
            var _a, _b;
            if (!part)
                return null;
            if (typeof part.text === "string") {
                return {
                    _type: "message",
                    role: content.role || "user", // Role applied at part level for simplicity, will be overridden if contentArray
                    content: part.text,
                };
            }
            else if ((_a = part.inlineData) === null || _a === void 0 ? void 0 : _a.data) {
                // Assuming inlineData.data contains the base64 string
                return {
                    // NOTE: Setting _type to "file" now as it could be image, pdf, etc.
                    // The UI will use mime_type to determine specific rendering.
                    _type: "file",
                    role: content.role || "user", // Role applied at part level
                    content: part.inlineData.data, // Store base64 here
                    mime_type: (_b = part.inlineData) === null || _b === void 0 ? void 0 : _b.mime_type, // Corrected field name to snake_case
                };
            }
            // Handle other potential part types like functionCall if needed later
            return null;
        })
            .filter((part) => part !== null);
        if (mappedParts.length === 0) {
            return null; // No mappable parts found
        }
        else if (mappedParts.length === 1) {
            // If only one part, return it directly, keeping its original _type and role
            return mappedParts[0];
        }
        else {
            // If multiple parts (e.g., text + image), create a contentArray
            return {
                _type: "contentArray",
                role: content.role || "user",
                contentArray: mappedParts.map((part) => ({
                    ...part,
                    role: undefined, // Role is defined on the parent contentArray message
                })),
            };
        }
    })
        .filter((message) => message !== null);
};
const mapGeminiPro = ({ request, response, statusCode = 200, model, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const generateConfig = (request === null || request === void 0 ? void 0 : request.generationConfig) || {};
    const contents = request === null || request === void 0 ? void 0 : request.contents;
    const messages = Array.isArray(contents)
        ? contents
        : [contents].filter(Boolean);
    // Extract model from response.modelVersion if available and model is not provided or is "unknown"
    const modelVersion = (!model || model === "unknown") && (response === null || response === void 0 ? void 0 : response.modelVersion)
        ? response.modelVersion
        : model;
    // Extract system instruction
    const systemInstructionText = (_c = (_b = (_a = request === null || request === void 0 ? void 0 : request.systemInstruction) === null || _a === void 0 ? void 0 : _a.parts) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.text;
    const systemMessage = systemInstructionText
        ? {
            _type: "message",
            role: "system",
            content: systemInstructionText,
        }
        : null;
    const userMessages = getRequestMessages(messages);
    const requestMessages = systemMessage
        ? [systemMessage, ...userMessages]
        : userMessages;
    response = Array.isArray(response) ? response : [response].filter(Boolean);
    const combinedContent = response
        .map((response) => {
        if (!response || !Array.isArray(response.candidates))
            return "";
        return response.candidates
            .map((candidate) => {
            if (!candidate)
                return "";
            const contents = Array.isArray(candidate.content)
                ? candidate.content
                : [candidate.content].filter(Boolean);
            return contents
                .map((content) => {
                if (!content)
                    return "";
                const parts = Array.isArray(content.parts)
                    ? content.parts
                    : [content.parts].filter(Boolean);
                return parts
                    .map((part) => part && typeof part.text === "string" ? part.text : "")
                    .filter(Boolean)
                    .join("");
            })
                .join("");
        })
            .join("");
    })
        .join("");
    const functionCall = response
        .map((response) => {
        if (!response || !Array.isArray(response.candidates))
            return null;
        return response.candidates
            .map((candidate) => {
            if (!candidate)
                return null;
            const contents = Array.isArray(candidate.content)
                ? candidate.content
                : [candidate.content].filter(Boolean);
            return contents
                .map((content) => {
                var _a;
                if (!content)
                    return null;
                const parts = Array.isArray(content.parts)
                    ? content.parts
                    : [content.parts].filter(Boolean);
                return (_a = parts.find((part) => part && part.functionCall)) === null || _a === void 0 ? void 0 : _a.functionCall;
            })
                .find((funcCall) => funcCall);
        })
            .find((funcCall) => funcCall);
    })
        .find((funcCall) => funcCall);
    const firstContent = (_f = (_e = (_d = response[0]) === null || _d === void 0 ? void 0 : _d.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content;
    const responseMessages = combinedContent || functionCall
        ? {
            role: (_g = firstContent === null || firstContent === void 0 ? void 0 : firstContent.role) !== null && _g !== void 0 ? _g : "model",
            content: combinedContent || undefined,
            tool_calls: functionCall
                ? [
                    {
                        name: functionCall.name,
                        arguments: JSON.parse(JSON.stringify(functionCall.args)),
                    },
                ]
                : undefined,
            _type: functionCall ? "functionCall" : "message",
        }
        : undefined;
    const error = (_h = response.find((item) => item === null || item === void 0 ? void 0 : item.error)) === null || _h === void 0 ? void 0 : _h.error;
    const schema = {
        request: {
            model: modelVersion,
            prompt: null,
            max_tokens: generateConfig === null || generateConfig === void 0 ? void 0 : generateConfig.maxOutputTokens,
            temperature: generateConfig === null || generateConfig === void 0 ? void 0 : generateConfig.temperature,
            top_p: generateConfig === null || generateConfig === void 0 ? void 0 : generateConfig.topP,
            n: generateConfig === null || generateConfig === void 0 ? void 0 : generateConfig.candidateCount,
            stream: false,
            stop: generateConfig === null || generateConfig === void 0 ? void 0 : generateConfig.stopSequences,
            presence_penalty: 0,
            frequency_penalty: 0,
            messages: requestMessages,
        },
        response: {
            messages: responseMessages ? [responseMessages] : [],
            error: error
                ? {
                    heliconeMessage: {
                        message: error === null || error === void 0 ? void 0 : error.message,
                        code: error === null || error === void 0 ? void 0 : error.code,
                    },
                }
                : undefined,
            model: modelVersion,
        },
    };
    return {
        schema,
        preview: {
            request: getRequestText(request),
            response: getResponseText(response, statusCode),
            concatenatedMessages: [
                ...requestMessages,
                ...(responseMessages ? [responseMessages] : []),
            ],
        },
    };
};
exports.mapGeminiPro = mapGeminiPro;
