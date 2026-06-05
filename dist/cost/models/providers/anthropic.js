"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicProvider = void 0;
const base_1 = require("./base");
class AnthropicProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Anthropic";
        this.baseUrl = "https://api.anthropic.com";
        this.auth = "api-key";
        this.supportedPlugins = ["web"];
        this.pricingPages = [
            "https://docs.anthropic.com/en/docs/build-with-claude/pricing",
        ];
        this.modelPages = [
            "https://docs.anthropic.com/en/docs/about-claude/models/all-models",
        ];
    }
    buildUrl(endpoint, requestParams) {
        return "https://api.anthropic.com/v1/messages";
    }
    authenticate(authContext, endpoint) {
        const headers = {};
        headers["x-api-key"] = authContext.apiKey || "";
        const enabledBetaHeaders = ["context-management-2025-06-27"];
        if (authContext.bodyMapping === "OPENAI" || !headers["anthropic-version"]) {
            headers["anthropic-version"] = "2023-06-01";
        }
        if (endpoint.providerModelId.includes("sonnet-4")) {
            enabledBetaHeaders.push("context-1m-2025-08-07");
        }
        headers["anthropic-beta"] = enabledBetaHeaders.join(",");
        return { headers };
    }
    buildRequestBody(endpoint, context) {
        if (context.bodyMapping === "NO_MAPPING") {
            return JSON.stringify({
                ...context.parsedBody,
                model: endpoint.providerModelId,
            });
        }
        let updatedBody = context.parsedBody;
        if (context.bodyMapping === "RESPONSES") {
            updatedBody = context.toChatCompletions(updatedBody);
        }
        const anthropicBody = context.toAnthropic(updatedBody, endpoint.providerModelId);
        return JSON.stringify(anthropicBody);
    }
}
exports.AnthropicProvider = AnthropicProvider;
