"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapData = void 0;
const getRequestText = (requestBody) => {
    if (requestBody._type !== "data")
        return "";
    const parts = [
        `Data Operation: ${requestBody.name}`,
    ];
    if (requestBody.meta && Object.keys(requestBody.meta).length > 0) {
        parts.push(`Meta: ${JSON.stringify(requestBody.meta, null, 2)}`);
    }
    const customFields = Object.entries(requestBody)
        .filter(([key]) => !['_type', 'name', 'meta'].includes(key))
        .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
    if (Object.keys(customFields).length > 0) {
        parts.push(`Data: ${JSON.stringify(customFields, null, 2)}`);
    }
    return parts.join("\n");
};
const extractDataDetails = (responseBody, requestBody) => {
    const details = {
        name: requestBody === null || requestBody === void 0 ? void 0 : requestBody.name,
        status: (responseBody === null || responseBody === void 0 ? void 0 : responseBody.status) || "success",
        metadata: (responseBody === null || responseBody === void 0 ? void 0 : responseBody.metadata) || {},
    };
    Object.entries(responseBody || {}).forEach(([key, value]) => {
        if (!['_type'].includes(key)) {
            details[key] = value;
        }
    });
    return details;
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a;
    if (statusCode !== 200 || (responseBody === null || responseBody === void 0 ? void 0 : responseBody.status) === "error") {
        return (((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) ||
            (responseBody === null || responseBody === void 0 ? void 0 : responseBody.message) ||
            "Data operation failed");
    }
    const summary = [];
    if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.status) {
        summary.push(`Status: ${responseBody.status}`);
    }
    if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.message) {
        summary.push(`Message: ${responseBody.message}`);
    }
    if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.result) !== undefined) {
        if (typeof responseBody.result === 'object') {
            summary.push(`Result: ${JSON.stringify(responseBody.result)}`);
        }
        else {
            summary.push(`Result: ${responseBody.result}`);
        }
    }
    if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.data) !== undefined) {
        if (Array.isArray(responseBody.data)) {
            summary.push(`Data: ${responseBody.data.length} items`);
        }
        else if (typeof responseBody.data === 'object') {
            summary.push(`Data: ${JSON.stringify(responseBody.data)}`);
        }
        else {
            summary.push(`Data: ${responseBody.data}`);
        }
    }
    if (summary.length === 0) {
        return (responseBody === null || responseBody === void 0 ? void 0 : responseBody.message) || JSON.stringify(responseBody);
    }
    return summary.join("\n");
};
const mapData = ({ request, response, statusCode = 200, }) => {
    const dataDetails = extractDataDetails(response, request);
    const requestToReturn = {
        model: `data:${request.name}`,
        dataDetails: {
            _type: "data",
            name: request.name,
            meta: request.meta,
            ...Object.fromEntries(Object.entries(request).filter(([key]) => !['_type', 'name', 'meta'].includes(key))),
        },
        messages: [],
    };
    const llmSchema = {
        request: requestToReturn,
        response: {
            model: `data:${request.name}`,
            dataDetailsResponse: {
                status: dataDetails.status || "success",
                message: (response === null || response === void 0 ? void 0 : response.message) || "",
                metadata: {
                    timestamp: new Date().toISOString(),
                    ...dataDetails.metadata,
                },
                _type: "data",
                name: request.name,
                ...Object.fromEntries(Object.entries(dataDetails).filter(([key]) => !['status', 'metadata', 'name'].includes(key))),
            },
            messages: [],
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
exports.mapData = mapData;
