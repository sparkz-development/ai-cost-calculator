"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOpenAIAssistant = void 0;
const getRequestText = (requestBody) => {
    // For assistant requests, we might not have a request body
    // since the thread might have been created earlier
    if (!requestBody)
        return "Assistant thread interaction";
    const parts = [];
    if (requestBody.assistant_id) {
        parts.push(`Assistant ID: ${requestBody.assistant_id}`);
    }
    if (requestBody.thread_id) {
        parts.push(`Thread ID: ${requestBody.thread_id}`);
    }
    if (requestBody.instructions) {
        parts.push(`Instructions: ${requestBody.instructions}`);
    }
    if (requestBody.tools) {
        parts.push(`Available Tools: ${requestBody.tools.map((t) => t.type).join(", ")}`);
    }
    return parts.join("\n") || "Assistant thread interaction";
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a, _b;
    if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) {
        return responseBody.error.message;
    }
    if (statusCode !== 200 || (responseBody === null || responseBody === void 0 ? void 0 : responseBody.status) === "failed") {
        return typeof (responseBody === null || responseBody === void 0 ? void 0 : responseBody.last_error) === "string"
            ? responseBody.last_error
            : ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.last_error) === null || _a === void 0 ? void 0 : _a.message) || "Assistant encountered an error";
    }
    const parts = [];
    if (responseBody.id) {
        parts.push(`Run ID: ${responseBody.id}`);
    }
    if (responseBody.status) {
        parts.push(`Status: ${responseBody.status}`);
    }
    if (responseBody.model) {
        parts.push(`Model: ${responseBody.model}`);
    }
    if ((_b = responseBody.tools) === null || _b === void 0 ? void 0 : _b.length) {
        parts.push(`Tools Available: ${responseBody.tools.length}`);
    }
    return parts.join("\n") || JSON.stringify(responseBody);
};
const mapOpenAIAssistant = ({ request, response, statusCode = 200, model, }) => {
    var _a;
    const requestToReturn = {
        model: model || (response === null || response === void 0 ? void 0 : response.model),
        messages: [
            {
                role: "system",
                content: `Run ID: ${(response === null || response === void 0 ? void 0 : response.id) || "unknown"}`,
                _type: "message",
            },
            {
                role: "user",
                content: getRequestText(request),
                _type: "message",
            },
        ],
    };
    const responseText = getResponseText(response, statusCode);
    const llmSchema = {
        request: requestToReturn,
        response: {
            model: (response === null || response === void 0 ? void 0 : response.model) || model,
            messages: [
                {
                    role: "assistant",
                    content: responseText,
                    _type: "message",
                },
            ],
        },
    };
    return {
        schema: llmSchema,
        preview: {
            request: getRequestText(request),
            response: responseText,
            concatenatedMessages: [
                ...(llmSchema.request.messages || []),
                ...(((_a = llmSchema.response) === null || _a === void 0 ? void 0 : _a.messages) || []),
            ],
        },
    };
};
exports.mapOpenAIAssistant = mapOpenAIAssistant;
