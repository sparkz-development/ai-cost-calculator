"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOpenAIEmbedding = void 0;
const getRequestText = (requestBody) => {
    if (requestBody.prompt) {
        return requestBody.prompt;
    }
    if (typeof requestBody.input === "string") {
        return requestBody.input;
    }
    if (Array.isArray(requestBody.input)) {
        return requestBody.input.join("\n");
    }
    return JSON.stringify(requestBody.input || "");
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if ([200, 201, -3].includes(statusCode)) {
        if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) {
            return ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) || "";
        }
        // Handle Black Forest Labs image response
        if (((_c = (_b = responseBody === null || responseBody === void 0 ? void 0 : responseBody.data) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.b64_json) &&
            !Array.isArray((_e = (_d = responseBody === null || responseBody === void 0 ? void 0 : responseBody.data) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.embedding)) {
            return "Image generated successfully";
        }
        // Return first embedding vector truncated for preview
        const embedding = (_g = (_f = responseBody === null || responseBody === void 0 ? void 0 : responseBody.data) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.embedding;
        if (Array.isArray(embedding)) {
            return `[${embedding
                .slice(0, 5)
                .map((n) => n.toFixed(6))
                .join(", ")}...]`;
        }
        else if (typeof embedding === "string") {
            // Handle base64 encoded embeddings
            return `[base64 encoded embedding]`;
        }
        return "";
    }
    else if (statusCode === 0 || statusCode === null) {
        return "";
    }
    else {
        return ((_h = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _h === void 0 ? void 0 : _h.message) || "";
    }
};
const mapOpenAIEmbedding = ({ request, response, statusCode = 200, model, }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const requestToReturn = {
        model: request.model,
        input: request.input,
        prompt: request.prompt,
        messages: [
            {
                role: "user",
                content: getRequestText(request),
                _type: "message",
            },
        ],
    };
    // Handle Black Forest Labs image response
    if (((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.b64_json) &&
        !Array.isArray((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.embedding)) {
        const llmSchema = {
            request: requestToReturn,
            response: {
                model: (response === null || response === void 0 ? void 0 : response.model) || model,
                messages: [
                    {
                        role: "assistant",
                        content: "Image generated",
                        _type: "image",
                        image_url: response.data[0].b64_json,
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
                    ...(llmSchema.request.messages || []),
                    ...(((_e = llmSchema.response) === null || _e === void 0 ? void 0 : _e.messages) || []),
                ],
            },
        };
    }
    // Handle regular embedding response
    const responseMessages = ((_f = response === null || response === void 0 ? void 0 : response.data) === null || _f === void 0 ? void 0 : _f.map((item, index) => {
        // Check if embedding is an array or a string (base64)
        let contentText = "";
        if (Array.isArray(item.embedding)) {
            try {
                contentText = `Embedding ${index}: [${item.embedding
                    .slice(0, 5)
                    .map((n) => n.toFixed(6))
                    .join(", ")}...]`;
            }
            catch (error) {
                console.error("Error formatting embedding", error);
                contentText = `Embedding ${index}: [format unknown]`;
            }
        }
        else if (typeof item.embedding === "string") {
            // Handle base64 encoded embeddings
            contentText = `Embedding ${index}: [base64 encoded]`;
        }
        else {
            contentText = `Embedding ${index}: [format unknown]`;
        }
        return {
            role: "assistant",
            content: contentText,
            _type: "message",
        };
    })) || [];
    const llmSchema = {
        request: requestToReturn,
        response: {
            model: (response === null || response === void 0 ? void 0 : response.model) || model,
            messages: responseMessages,
        },
    };
    const concatenatedMessages = [
        ...(llmSchema.request.messages || []),
        ...(((_g = llmSchema.response) === null || _g === void 0 ? void 0 : _g.messages) || []),
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
exports.mapOpenAIEmbedding = mapOpenAIEmbedding;
