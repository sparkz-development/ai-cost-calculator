"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapGeminiRequestV2 = exports.googleChatMapper = void 0;
const builder_1 = require("../../path-mapper/builder");
/**
 * Extract text from the request
 */
const getRequestText = (requestBody) => {
    try {
        if (!requestBody || !requestBody.contents)
            return "";
        const contents = requestBody.contents;
        const messages = Array.isArray(contents)
            ? contents
            : [contents].filter(Boolean);
        if (messages.length === 0)
            return "";
        const lastMessage = messages[messages.length - 1];
        if (!lastMessage || !lastMessage.parts)
            return "";
        const parts = Array.isArray(lastMessage.parts)
            ? lastMessage.parts
            : [lastMessage.parts].filter(Boolean);
        if (parts.length === 0)
            return "";
        const textParts = parts.filter((part) => part && typeof part.text === "string");
        return textParts.map((part) => part.text).join(" ");
    }
    catch (error) {
        console.error("Error parsing request text:", error);
        return "error_parsing_request";
    }
};
/**
 * Extract text from the response
 */
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
/**
 * Convert request contents to internal Message format
 */
const convertRequestMessages = (contents) => {
    const contentsArray = Array.isArray(contents)
        ? contents
        : [contents].filter(Boolean);
    return contentsArray
        .map((content) => {
        var _a;
        if (!content)
            return [];
        const parts = Array.isArray(content.parts)
            ? content.parts
            : [content.parts].filter(Boolean);
        // Find text and image parts
        const textParts = parts.filter((part) => part && typeof part.text === "string");
        const imagePart = parts.find((part) => { var _a; return part && ((_a = part.inlineData) === null || _a === void 0 ? void 0 : _a.data); });
        return [
            {
                role: content.role || "user",
                content: textParts.map((part) => part.text).join(" "),
                _type: (imagePart ? "image" : "message"),
                image_url: (_a = imagePart === null || imagePart === void 0 ? void 0 : imagePart.inlineData) === null || _a === void 0 ? void 0 : _a.data,
            },
        ];
    })
        .flat();
};
/**
 * Convert response to internal Message format
 */
const convertResponseMessages = (responseBody) => {
    var _a;
    if (!responseBody)
        return [];
    responseBody = Array.isArray(responseBody)
        ? responseBody
        : [responseBody].filter(Boolean);
    const messages = [];
    for (const response of responseBody) {
        if (!response || !Array.isArray(response.candidates))
            continue;
        for (const candidate of response.candidates) {
            if (!candidate)
                continue;
            const contents = Array.isArray(candidate.content)
                ? candidate.content
                : [candidate.content].filter(Boolean);
            for (const content of contents) {
                if (!content)
                    continue;
                const parts = Array.isArray(content.parts)
                    ? content.parts
                    : [content.parts].filter(Boolean);
                // Extract text content
                const textParts = parts.filter((part) => part && typeof part.text === "string");
                const combinedContent = textParts
                    .map((part) => part.text)
                    .join("");
                // Check for function calls
                const functionCallPart = parts.find((part) => part && part.functionCall);
                const functionCall = functionCallPart === null || functionCallPart === void 0 ? void 0 : functionCallPart.functionCall;
                const toolCalls = functionCall
                    ? [
                        {
                            name: functionCall.name,
                            arguments: functionCall.args,
                        },
                    ]
                    : undefined;
                messages.push({
                    _type: functionCall ? "functionCall" : "message",
                    role: (_a = content.role) !== null && _a !== void 0 ? _a : "model",
                    content: combinedContent || undefined,
                    tool_calls: toolCalls,
                });
            }
        }
    }
    return messages;
};
/**
 * Convert internal messages back to Google message format
 */
const toExternalContents = (messages) => {
    if (!messages || !Array.isArray(messages))
        return [];
    return messages.map((message) => {
        const parts = [];
        // Add text part if content exists
        if (message.content) {
            parts.push({
                text: message.content,
            });
        }
        // Add image part if it exists
        if (message._type === "image" && message.image_url) {
            parts.push({
                inlineData: {
                    data: message.image_url,
                },
            });
        }
        // Add function call if it exists
        if (message._type === "functionCall" &&
            message.tool_calls &&
            message.tool_calls.length > 0) {
            const functionCall = message.tool_calls[0];
            parts.push({
                functionCall: {
                    name: functionCall.name,
                    args: functionCall.arguments,
                },
            });
        }
        // Convert system role to user role
        const role = message.role === "system" ? "user" : message.role || "user";
        return {
            role: role,
            parts,
        };
    });
};
/**
 * Build the Google Chat mapper with proper type safety
 */
exports.googleChatMapper = new builder_1.MapperBuilder("gemini-chat-v2")
    // Map basic request parameters
    .map("model", "model")
    // Map generation config parameters with transformations
    .mapWithTransform("generationConfig", "temperature", (config) => config === null || config === void 0 ? void 0 : config.temperature, (value) => ({ temperature: value }))
    .mapWithTransform("generationConfig", "top_p", (config) => config === null || config === void 0 ? void 0 : config.topP, (value) => ({ topP: value }))
    .mapWithTransform("generationConfig", "max_tokens", (config) => config === null || config === void 0 ? void 0 : config.maxOutputTokens, (value) => ({ maxOutputTokens: value }))
    .mapWithTransform("generationConfig", "n", (config) => config === null || config === void 0 ? void 0 : config.candidateCount, (value) => ({ candidateCount: value }))
    .mapWithTransform("generationConfig", "stop", (config) => config === null || config === void 0 ? void 0 : config.stopSequences, (value) => ({ stopSequences: value }))
    // Map messages with transformation
    .mapWithTransform("contents", "messages", convertRequestMessages, toExternalContents)
    .build();
// Create a separate mapper for preview data
const previewMapper = (requestBody) => {
    return getRequestText(requestBody);
};
/**
 * Maps a Google/Gemini request to our internal format
 */
const mapGeminiRequestV2 = ({ request, response, statusCode = 200, model, }) => {
    // Extract model from modelVersion if model is unknown
    const extractedModel = model === "unknown" && (response === null || response === void 0 ? void 0 : response.modelVersion)
        ? response.modelVersion
        : model || request.model;
    // Map the request using our path mapper
    const mappedRequest = exports.googleChatMapper.toInternal({
        ...request,
        model: extractedModel,
    });
    // Create the LlmSchema structure
    const schema = {
        request: mappedRequest,
        response: null,
    };
    // Add response data if available
    if (response) {
        // Handle error responses
        if (response.error) {
            schema.response = {
                error: {
                    heliconeMessage: {
                        message: response.error.message,
                        code: response.error.code,
                    },
                },
                model: extractedModel,
            };
        }
        else {
            const responseMessages = convertResponseMessages(response);
            schema.response = {
                messages: responseMessages,
                model: extractedModel,
            };
        }
    }
    return schema;
};
exports.mapGeminiRequestV2 = mapGeminiRequestV2;
