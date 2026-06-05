"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIProvider = void 0;
const base_1 = require("./base");
// Allowed OpenAI base URLs for security
const ALLOWED_OPENAI_BASE_URLS = [
    "https://api.openai.com",
    "https://us.api.openai.com", // US data residency
];
class OpenAIProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "OpenAI";
        this.baseUrl = "https://api.openai.com";
        this.auth = "api-key";
        this.pricingPages = ["https://openai.com/api/pricing"];
        this.modelPages = ["https://platform.openai.com/docs/models"];
    }
    validateBaseUrl(baseUrl) {
        // Normalize the URL by removing trailing slash
        const normalized = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
        // Check if the URL is in the allowed list
        if (!ALLOWED_OPENAI_BASE_URLS.includes(normalized)) {
            // Fall back to default if not allowed
            return "https://api.openai.com";
        }
        return normalized;
    }
    buildUrl(endpoint, requestParams) {
        // Use custom base URL if provided and valid, otherwise fall back to default
        const baseUrl = this.validateBaseUrl(endpoint.userConfig.baseUri || "https://api.openai.com");
        switch (requestParams.bodyMapping) {
            case "RESPONSES":
                return `${baseUrl}/v1/responses`;
            default:
                return `${baseUrl}/v1/chat/completions`;
        }
    }
    buildRequestBody(endpoint, context) {
        if (context.bodyMapping === "RESPONSES") {
            return JSON.stringify({
                ...context.parsedBody,
                model: endpoint.providerModelId,
            });
        }
        return super.buildRequestBody(endpoint, context);
    }
}
exports.OpenAIProvider = OpenAIProvider;
