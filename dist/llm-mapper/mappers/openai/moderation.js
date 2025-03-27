"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOpenAIModeration = void 0;
const getRequestText = (requestBody) => {
    return requestBody.input || "";
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a;
    return statusCode === 0 || statusCode === null
        ? ""
        : statusCode === 200
            ? JSON.stringify(responseBody.results || "", null, 4)
            : ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) || "";
};
const mapOpenAIModeration = ({ request, response, statusCode = 200, model, }) => {
    const requestToReturn = {
        model: request.model,
    };
    const llmSchema = {
        request: requestToReturn,
        response: {
            model: "openai/moderation",
        },
    };
    return {
        schema: llmSchema,
        preview: {
            request: getRequestText(request),
            response: getResponseText(response, statusCode),
            concatenatedMessages: [],
        },
    };
};
exports.mapOpenAIModeration = mapOpenAIModeration;
