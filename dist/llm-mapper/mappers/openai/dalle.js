"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDalleRequest = void 0;
const getRequestText = (requestBody) => {
    return (requestBody === null || requestBody === void 0 ? void 0 : requestBody.prompt) || "";
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a, _b, _c, _d;
    if ([200, 201, -3].includes(statusCode)) {
        if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) {
            return ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) || "";
        }
        return ((_c = (_b = responseBody === null || responseBody === void 0 ? void 0 : responseBody.data) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.revised_prompt) || "";
    }
    else if (statusCode === 0 || statusCode === null) {
        return "";
    }
    else {
        return ((_d = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _d === void 0 ? void 0 : _d.message) || "";
    }
};
const mapDalleRequest = ({ request, response, statusCode = 200, model, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    // Format the image URL properly - add data URL prefix for base64 images
    const rawImageData = ((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.b64_json) || ((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.url) || "";
    const imageUrl = rawImageData
        ? rawImageData.startsWith("http://") || rawImageData.startsWith("https://")
            ? rawImageData
            : `data:image/png;base64,${rawImageData}`
        : "";
    const llmSchema = {
        request: {
            model: request.model,
            prompt: request.prompt,
            size: request.size,
            quality: request.quality,
            response_format: request.response_format
                ? {
                    type: request.response_format,
                    json_schema: {},
                }
                : undefined,
            // Add messages array for proper UI rendering
            messages: request.prompt
                ? [
                    {
                        role: "user",
                        content: request.prompt,
                        _type: "message",
                    },
                ]
                : [],
        },
        response: {
            messages: [
                {
                    role: "assistant",
                    content: ((_f = (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.revised_prompt) || "",
                    _type: "image",
                    image_url: imageUrl,
                },
            ],
            model: model,
        },
    };
    return {
        schema: llmSchema,
        preview: {
            request: getRequestText(request),
            response: getResponseText(response, statusCode),
            concatenatedMessages: [
                {
                    content: request.prompt || "",
                    role: "user",
                    _type: "message",
                },
                {
                    content: ((_h = (_g = response === null || response === void 0 ? void 0 : response.data) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.revised_prompt) || "",
                    role: "assistant",
                    _type: "image",
                    image_url: imageUrl,
                },
            ],
        },
    };
};
exports.mapDalleRequest = mapDalleRequest;
