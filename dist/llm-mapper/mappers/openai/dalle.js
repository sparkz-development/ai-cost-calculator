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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
        },
        response: {
            messages: [
                {
                    content: ((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.revised_prompt) || "",
                    _type: "image",
                    image_url: ((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.b64_json) || ((_f = (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.url) || "",
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
                    image_url: ((_k = (_j = response === null || response === void 0 ? void 0 : response.data) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.b64_json) || ((_m = (_l = response === null || response === void 0 ? void 0 : response.data) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.url) || "",
                },
            ],
        },
    };
};
exports.mapDalleRequest = mapDalleRequest;
