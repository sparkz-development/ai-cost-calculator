"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOpenAIInstructRequest = void 0;
const messageUtils_1 = require("../../utils/messageUtils");
const getRequestText = (requestBody) => {
    try {
        const heliconeMessage = requestBody === null || requestBody === void 0 ? void 0 : requestBody.heliconeMessage;
        if (heliconeMessage) {
            return heliconeMessage;
        }
        return typeof (requestBody === null || requestBody === void 0 ? void 0 : requestBody.prompt) === "string"
            ? requestBody.prompt
            : JSON.stringify((requestBody === null || requestBody === void 0 ? void 0 : requestBody.prompt) || "");
    }
    catch (error) {
        console.error("Error parsing request text:", error);
        return "error_parsing_request";
    }
};
const getResponseText = (responseBody, statusCode = 200, model) => {
    var _a, _b, _c;
    if (statusCode === 0 || statusCode === null) {
        return "";
    }
    if ("error" in responseBody) {
        return responseBody.error.heliconeMessage;
    }
    try {
        // Handle pending response or network error scenarios upfront
        if (statusCode === 0 || statusCode === null)
            return ""; // Pending response
        if (![200, 201, -3].includes(statusCode)) {
            // Network error or other non-success statuses
            return ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) || (responseBody === null || responseBody === void 0 ? void 0 : responseBody.helicone_error) || "";
        }
        // For successful responses
        if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) {
            // Check for an error from OpenAI
            return responseBody.error.message || "";
        }
        // Handle streaming response chunks
        if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.object) === "text_completion") {
            const choice = (_b = responseBody.choices) === null || _b === void 0 ? void 0 : _b[0];
            if (choice === null || choice === void 0 ? void 0 : choice.text) {
                return choice.text;
            }
            return ""; // Empty string for other cases in streaming
        }
        // Handle choices
        const firstChoice = (_c = responseBody === null || responseBody === void 0 ? void 0 : responseBody.choices) === null || _c === void 0 ? void 0 : _c[0];
        if (firstChoice) {
            return firstChoice.text || "";
        }
        // Fallback for missing choices
        return "";
    }
    catch (error) {
        console.error("Error parsing response text:", error);
        return "error_parsing_response";
    }
};
const getLLMSchemaResponse = (response) => {
    var _a;
    if ("error" in response) {
        if ("heliconeMessage" in response.error) {
            return {
                error: {
                    heliconeMessage: response.error.heliconeMessage,
                },
            };
        }
        else {
            return {
                error: {
                    heliconeMessage: JSON.stringify(response.error),
                },
            };
        }
    }
    else {
        return {
            messages: (_a = response === null || response === void 0 ? void 0 : response.choices) === null || _a === void 0 ? void 0 : _a.map((choice) => {
                var _a;
                return ({
                    content: (0, messageUtils_1.getFormattedMessageContent)((_a = choice === null || choice === void 0 ? void 0 : choice.text) !== null && _a !== void 0 ? _a : ""),
                    role: "assistant",
                    _type: "message",
                });
            }),
            model: response === null || response === void 0 ? void 0 : response.model,
        };
    }
};
const mapOpenAIInstructRequest = ({ request, response, statusCode = 200, model, }) => {
    var _a, _b, _c, _d;
    const requestToReturn = {
        frequency_penalty: request.frequency_penalty,
        max_tokens: request.max_tokens,
        model: request.model,
        presence_penalty: request.presence_penalty,
        temperature: request.temperature,
        top_p: request.top_p,
        messages: [
            {
                content: request.prompt,
                role: "user",
                _type: "message",
            },
        ],
    };
    const llmSchema = {
        request: requestToReturn,
        response: getLLMSchemaResponse(response),
    };
    return {
        schema: llmSchema,
        preview: {
            request: getRequestText(request),
            response: getResponseText(response, statusCode, model),
            concatenatedMessages: (_d = (_a = llmSchema.request.messages) === null || _a === void 0 ? void 0 : _a.concat((_c = (_b = llmSchema.response) === null || _b === void 0 ? void 0 : _b.messages) !== null && _c !== void 0 ? _c : [])) !== null && _d !== void 0 ? _d : [],
        },
    };
};
exports.mapOpenAIInstructRequest = mapOpenAIInstructRequest;
