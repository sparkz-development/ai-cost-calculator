"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapBlackForestLabsImage = void 0;
const getRequestText = (requestBody) => {
    if (requestBody.prompt) {
        return requestBody.prompt;
    }
    return "";
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a, _b;
    if ([200, 201, -3].includes(statusCode)) {
        if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) {
            return ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) || "";
        }
        // Since Flux doesn't have revised prompts, return a success message
        return "Image generated successfully";
    }
    else if (statusCode === 0 || statusCode === null) {
        return "";
    }
    else {
        return ((_b = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _b === void 0 ? void 0 : _b.message) || "";
    }
};
const mapBlackForestLabsImage = ({ request, response, statusCode = 200, model }) => {
    var _a, _b, _c, _d;
    const requestToReturn = {
        model: request.model,
        prompt: request.prompt,
        messages: [
            {
                role: "user",
                content: request.prompt || "",
                _type: "message",
            },
        ],
    };
    const llmSchema = {
        request: requestToReturn,
        response: {
            model: model,
            messages: [
                {
                    role: "assistant",
                    content: "Image generated",
                    _type: "image",
                    image_url: ((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.b64_json) || "",
                },
            ],
        },
    };
    return {
        schema: llmSchema,
        preview: {
            request: getRequestText(request),
            response: getResponseText(response, statusCode),
            concatenatedMessages: [
                {
                    role: "user",
                    content: request.prompt || "",
                    _type: "message",
                },
                {
                    role: "assistant",
                    content: "Image generated",
                    _type: "image",
                    image_url: ((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.b64_json) || "",
                },
            ],
        },
    };
};
exports.mapBlackForestLabsImage = mapBlackForestLabsImage;
