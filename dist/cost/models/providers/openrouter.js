"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenRouterProvider = void 0;
const base_1 = require("./base");
class OpenRouterProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "OpenRouter";
        this.baseUrl = "https://openrouter.ai/api/v1";
        this.auth = "api-key";
        this.pricingPages = ["https://openrouter.ai/docs#pricing"];
        this.modelPages = ["https://openrouter.ai/models"];
    }
    buildUrl(endpoint, requestParams) {
        return "https://openrouter.ai/api/v1/chat/completions";
    }
    buildRequestBody(endpoint, context) {
        let updatedBody = context.parsedBody;
        if (context.bodyMapping === "RESPONSES") {
            updatedBody = context.toChatCompletions(updatedBody);
        }
        return JSON.stringify({
            ...updatedBody,
            model: endpoint.providerModelId,
            usage: { include: true }
        });
    }
}
exports.OpenRouterProvider = OpenRouterProvider;
