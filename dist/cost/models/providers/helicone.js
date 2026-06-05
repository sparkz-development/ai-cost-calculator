"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeliconeProvider = void 0;
const base_1 = require("./base");
const utils_1 = require("./utils");
class HeliconeProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Helicone";
        this.baseUrl = "https://inference.helicone.ai";
        this.auth = "api-key";
        this.pricingPages = ["https://helicone.ai/pricing"];
        this.modelPages = ["https://helicone.ai/models"];
    }
    buildUrl(endpoint, requestParams) {
        // Check if this is an Anthropic model
        const isAnthropicModel = endpoint.author === "anthropic";
        if (isAnthropicModel) {
            return `${this.baseUrl}/anthropic/v1/messages`;
        }
        // Use responses endpoint for pro/codex models or when bodyMapping is RESPONSES
        const isResponsesEndpoint = requestParams.bodyMapping === "RESPONSES" ||
            endpoint.providerModelId.includes("gpt-5-pro") ||
            endpoint.providerModelId.includes("gpt-5-codex") ||
            endpoint.providerModelId.includes("gpt-5.2-pro");
        const path = isResponsesEndpoint ? "/responses" : "/chat/completions";
        return `${this.baseUrl}/openai/v1${path}`;
    }
    authenticate(authContext, endpoint) {
        const headers = {};
        // Default to Bearer token auth for OpenAI models
        headers["Authorization"] = `Bearer ${authContext.apiKey || ""}`;
        if (endpoint.providerModelId.includes("sonnet-4")) {
            headers["anthropic-beta"] = "context-1m-2025-08-07";
        }
        return { headers };
    }
    buildRequestBody(endpoint, context) {
        let updatedBody = context.parsedBody;
        const isAnthropicModel = endpoint.author === "anthropic";
        if (context.bodyMapping === "NO_MAPPING") {
            if (isAnthropicModel) {
                // Ensure system message is in object format if it's a string
                if (typeof updatedBody.system === "string") {
                    updatedBody.system = [{ type: "text", text: updatedBody.system }];
                }
                return JSON.stringify({
                    ...updatedBody,
                    model: endpoint.providerModelId,
                });
            }
            return JSON.stringify({
                ...updatedBody,
                model: endpoint.providerModelId,
            });
        }
        // Convert responses API format to chat completions format for models that don't natively support it
        if (context.bodyMapping === "RESPONSES" &&
            !(0, utils_1.nativelySupportsResponsesAPI)("helicone", endpoint.providerModelId)) {
            updatedBody = context.toChatCompletions(updatedBody);
        }
        if (isAnthropicModel) {
            const anthropicBody = context.toAnthropic(updatedBody, endpoint.providerModelId);
            if (typeof anthropicBody.system === "string") {
                anthropicBody.system = [{ type: "text", text: anthropicBody.system }];
            }
            return JSON.stringify(anthropicBody);
        }
        // Standard format - just pass through with correct model
        return JSON.stringify({
            ...updatedBody,
            model: endpoint.providerModelId,
        });
    }
}
exports.HeliconeProvider = HeliconeProvider;
