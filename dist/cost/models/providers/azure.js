"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureOpenAIProvider = void 0;
const base_1 = require("./base");
class AzureOpenAIProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Azure OpenAI";
        this.baseUrl = "https://{resourceName}.openai.azure.com";
        this.auth = "api-key";
        this.requiredConfig = ["resourceName", "deploymentName"];
        this.pricingPages = [
            "https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/",
        ];
        this.modelPages = [
            "https://learn.microsoft.com/azure/ai-services/openai/concepts/models",
        ];
    }
    buildUrl(endpoint, requestParams) {
        var _a;
        // Determine base URI - use provided or Helicone gateway for PTB
        const baseUri = endpoint.userConfig.baseUri ||
            (endpoint.ptbEnabled
                ? "https://east1-gateway-resource.cognitiveservices.azure.com/"
                : null);
        if (!baseUri) {
            throw new Error("Azure OpenAI requires baseUri");
        }
        let deploymentName;
        if (endpoint.ptbEnabled) {
            deploymentName = endpoint.providerModelId;
        }
        else {
            const deployment = ((_a = endpoint.userConfig.deploymentName) === null || _a === void 0 ? void 0 : _a.trim())
                || endpoint.userConfig.modelName
                || endpoint.providerModelId;
            if (!deployment) {
                throw new Error("Azure OpenAI requires a deployment name, provider model ID, or model name");
            }
            deploymentName = deployment;
        }
        // Build URL with normalized base URI and API version
        const normalizedBaseUri = baseUri.endsWith("/") ? baseUri : `${baseUri}/`;
        const apiVersion = endpoint.userConfig.apiVersion || "2025-01-01-preview";
        // Note: Azure does support Responses API, but it doesn't work with this kind of URI, so 
        // we're using converted chat completions.
        return `${normalizedBaseUri}openai/deployments/${deploymentName}/chat/completions?api-version=${apiVersion}`;
    }
    authenticate(authContext) {
        return {
            headers: {
                "api-key": authContext.apiKey || "",
            },
        };
    }
}
exports.AzureOpenAIProvider = AzureOpenAIProvider;
