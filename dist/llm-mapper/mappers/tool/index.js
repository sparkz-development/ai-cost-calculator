"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapTool = void 0;
const getRequestText = (requestBody) => {
    if (requestBody._type !== "tool")
        return "";
    const parts = [
        `Tool: ${requestBody.toolName}`,
        `Input: ${JSON.stringify(requestBody.input, null, 2)}`,
    ].filter(Boolean);
    return parts.join("\n");
};
const extractToolDetails = (responseBody, requestBody) => {
    const details = {
        name: (requestBody === null || requestBody === void 0 ? void 0 : requestBody.toolName) || (responseBody === null || responseBody === void 0 ? void 0 : responseBody.toolName),
        input: requestBody === null || requestBody === void 0 ? void 0 : requestBody.input,
        status: responseBody === null || responseBody === void 0 ? void 0 : responseBody.status,
        result: (responseBody === null || responseBody === void 0 ? void 0 : responseBody.hotels) ||
            (responseBody === null || responseBody === void 0 ? void 0 : responseBody.result) ||
            (responseBody === null || responseBody === void 0 ? void 0 : responseBody.data) ||
            (responseBody === null || responseBody === void 0 ? void 0 : responseBody.results),
        filters: responseBody === null || responseBody === void 0 ? void 0 : responseBody.filters,
        error: responseBody === null || responseBody === void 0 ? void 0 : responseBody.error,
        metadata: (responseBody === null || responseBody === void 0 ? void 0 : responseBody.metadata) || {},
        failed: responseBody === null || responseBody === void 0 ? void 0 : responseBody.failed,
        similarity: responseBody === null || responseBody === void 0 ? void 0 : responseBody.similarity,
        actualSimilarity: responseBody === null || responseBody === void 0 ? void 0 : responseBody.actualSimilarity,
        similarityThreshold: responseBody === null || responseBody === void 0 ? void 0 : responseBody.similarityThreshold,
    };
    // Handle vector DB specific format
    if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.Operation) === "search") {
        details.operation = responseBody.Operation;
        details.text = responseBody.Text;
        details.database = responseBody.Database;
        details.filter = responseBody.Filter;
        details.query = responseBody.Query;
        details.vector = responseBody.Vector;
        details.top = responseBody.Top;
    }
    return details;
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a, _b;
    if (statusCode !== 200 || (responseBody === null || responseBody === void 0 ? void 0 : responseBody.status) === "error") {
        return (((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) ||
            (responseBody === null || responseBody === void 0 ? void 0 : responseBody.message) ||
            "Tool operation failed");
    }
    if (responseBody._type !== "tool") {
        return JSON.stringify(responseBody);
    }
    // For successful responses, create a summary
    const summary = [];
    if (responseBody.status) {
        summary.push(`Status: ${responseBody.status}`);
    }
    // Add specific summaries based on tool response structure
    if (responseBody.hotels) {
        summary.push(`Found ${responseBody.hotels.length} hotels`);
        if ((_b = responseBody.filters) === null || _b === void 0 ? void 0 : _b.priceRange) {
            summary.push(`Price range: $${responseBody.filters.priceRange.min} - $${responseBody.filters.priceRange.max}`);
        }
    }
    // Handle vector search results
    if (responseBody.results && Array.isArray(responseBody.results)) {
        summary.push(`Found ${responseBody.results.length} results`);
        if (responseBody.similarity !== undefined) {
            summary.push(`Similarity Threshold: ${responseBody.similarity}`);
        }
    }
    // Handle failed vector searches
    if (responseBody.failed === true || responseBody.status === "failed") {
        const reason = responseBody.reason ||
            responseBody.message ||
            "No results found with sufficient similarity";
        summary.push(`Failed: ${reason}`);
    }
    // Handle vector DB specific format
    if (responseBody.Operation === "search" && responseBody.Text) {
        summary.push(`Operation: ${responseBody.Operation}`);
        summary.push(`Text: ${responseBody.Text}`);
        if (responseBody.Database) {
            summary.push(`Database: ${responseBody.Database}`);
        }
        if (responseBody.Filter) {
            const filter = typeof responseBody.Filter === "string"
                ? responseBody.Filter
                : JSON.stringify(responseBody.Filter);
            summary.push(`Filter: ${filter}`);
        }
        if (responseBody.Query) {
            const query = typeof responseBody.Query === "string"
                ? responseBody.Query
                : JSON.stringify(responseBody.Query);
            summary.push(`Query: ${query}`);
        }
    }
    return (summary.join("\n") || responseBody.message || JSON.stringify(responseBody));
};
const mapTool = ({ request, response, statusCode = 200, }) => {
    const toolDetails = extractToolDetails(response, request);
    const requestToReturn = {
        model: `tool:${request.toolName}`,
        toolDetails: {
            _type: "tool",
            toolName: request.toolName,
            input: request.input,
        },
        messages: [],
    };
    const llmSchema = {
        request: requestToReturn,
        response: {
            model: `tool:${request.toolName}`,
            toolDetailsResponse: {
                status: toolDetails.status || "unknown",
                message: (response === null || response === void 0 ? void 0 : response.message) || "",
                tips: (response === null || response === void 0 ? void 0 : response.tips) || [],
                metadata: {
                    timestamp: new Date().toISOString(),
                    ...toolDetails.metadata,
                },
                _type: "tool",
                toolName: request.toolName,
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
exports.mapTool = mapTool;
