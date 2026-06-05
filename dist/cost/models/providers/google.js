"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleProvider = void 0;
const base_1 = require("./base");
const toGoogle_1 = require("@helicone-package/llm-mapper/transform/providers/openai/request/toGoogle");
class GoogleProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Google AI Studio";
        this.baseUrl = "https://generativelanguage.googleapis.com/v1beta";
        this.auth = "api-key";
        this.pricingPages = ["https://ai.google.dev/gemini-api/docs/pricing"];
        this.modelPages = ["https://ai.google.dev/gemini-api/docs/models"];
    }
    buildUrl(endpoint, requestParams) {
        const modelId = endpoint.providerModelId || "";
        const modelPath = modelId.startsWith("models/")
            ? modelId
            : `models/${modelId}`;
        if (requestParams.isStreaming) {
            return `${this.baseUrl}/${modelPath}:streamGenerateContent?alt=sse&key=${requestParams.apiKey}`;
        }
        else {
            return `${this.baseUrl}/${modelPath}:generateContent?key=${requestParams.apiKey}`;
        }
    }
    // Override authenticate to return empty headers since auth is in URL query param
    authenticate(authContext, endpoint, cacheProvider) {
        return {
            headers: {},
        };
    }
    // Transform OpenAI format to Google's native format
    buildRequestBody(endpoint, context) {
        const modelId = endpoint.providerModelId || "";
        if (context.bodyMapping === "NO_MAPPING") {
            return JSON.stringify({
                ...context.parsedBody,
                model: modelId,
            });
        }
        let updatedBody = context.parsedBody;
        // Convert to Chat Completions
        if (context.bodyMapping === "RESPONSES") {
            updatedBody = context.toChatCompletions(context.parsedBody);
        }
        const googleBody = (0, toGoogle_1.toGoogle)(updatedBody);
        return JSON.stringify(googleBody);
    }
}
exports.GoogleProvider = GoogleProvider;
