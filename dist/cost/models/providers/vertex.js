"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VertexProvider = void 0;
const base_1 = require("./base");
const gcpServiceAccountAuth_1 = require("../../auth/gcpServiceAccountAuth");
const toGoogle_1 = require("@helicone-package/llm-mapper/transform/providers/openai/request/toGoogle");
class VertexProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Vertex AI";
        this.baseUrl = "https://{region}-aiplatform.googleapis.com";
        this.auth = "service_account";
        this.requiredConfig = ["projectId", "region"];
        this.pricingPages = [
            "https://cloud.google.com/vertex-ai/generative-ai/pricing",
            "https://ai.google.dev/pricing",
        ];
        this.modelPages = [
            "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models",
        ];
        this.uiConfig = {
            logoUrl: "/assets/home/providers/gemini.webp",
            description: "Configure your Google Cloud service account for Vertex AI models",
            docsUrl: "https://docs.helicone.ai/integrations/gemini/vertex/curl",
            relevanceScore: 85,
        };
    }
    buildUrl(endpoint, requestParams) {
        const modelId = endpoint.providerModelId || "";
        const modelSupportsCrossRegion = endpoint.modelConfig.crossRegion;
        const userCrossRegionEnabled = endpoint.userConfig.crossRegion;
        const projectId = endpoint.userConfig.projectId;
        let region;
        if (userCrossRegionEnabled && modelSupportsCrossRegion) {
            region = "global";
        }
        else if (userCrossRegionEnabled && !modelSupportsCrossRegion) {
            region = endpoint.userConfig.region || "us-east5";
        }
        else {
            region = endpoint.userConfig.region || "us-central1";
        }
        if (modelId.toLowerCase().includes("gemini")) {
            if (!projectId) {
                throw new Error("Vertex AI requires projectId in config for Gemini models");
            }
            const baseUrlWithRegion = region === "global"
                ? "https://aiplatform.googleapis.com"
                : this.baseUrl.replace("{region}", region);
            const baseEndpointUrl = `${baseUrlWithRegion}/v1beta1/projects/${projectId}/locations/${region}/publishers/google/models/${modelId}`;
            const suffix = requestParams.isStreaming
                ? ":streamGenerateContent?alt=sse"
                : ":generateContent";
            return `${baseEndpointUrl}${suffix}`;
        }
        if (!projectId || !region) {
            throw new Error("Vertex AI requires projectId and region in config for non-Gemini models");
        }
        const publisher = endpoint.author || "anthropic";
        const baseUrlWithRegion = region === "global"
            ? "https://aiplatform.googleapis.com"
            : this.baseUrl.replace("{region}", region);
        const baseEndpointUrl = `${baseUrlWithRegion}/v1/projects/${projectId}/locations/${region}/publishers/${publisher}/models/${modelId}`;
        // Gemini models use Google's predict format; all others use rawPredict for native format
        const isStreaming = requestParams.isStreaming === true;
        const endpointMethod = isStreaming
            ? "streamRawPredict"
            : "rawPredict";
        return `${baseEndpointUrl}:${endpointMethod}`;
    }
    buildRequestBody(endpoint, context) {
        const modelId = endpoint.providerModelId || "";
        if (context.bodyMapping === "NO_MAPPING") {
            // For Claude models on Vertex, still need to add anthropic_version
            // even when the body is already in Anthropic format (NO_MAPPING)
            if (modelId.includes("claude-")) {
                return JSON.stringify({
                    ...context.parsedBody,
                    anthropic_version: "vertex-2023-10-16",
                    model: undefined,
                });
            }
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
        if (modelId.toLowerCase().includes("gemini")) {
            const geminiBody = (0, toGoogle_1.toGoogle)(updatedBody);
            return JSON.stringify(geminiBody);
        }
        if (endpoint.providerModelId.includes("claude-")) {
            const anthropicBody = context.toAnthropic(updatedBody, endpoint.providerModelId, { includeCacheBreakpoints: true });
            updatedBody = {
                ...anthropicBody,
                anthropic_version: "vertex-2023-10-16",
                model: undefined, // model is not needed in Vertex inputs (as its defined via URL)
            };
            return JSON.stringify(updatedBody);
        }
        // Pass through
        return JSON.stringify({
            ...context.parsedBody,
            model: endpoint.providerModelId,
        });
    }
    async authenticate(authContext, endpoint, cacheProvider) {
        if (!authContext.apiKey) {
            throw new Error("Service account JSON is required for Vertex AI authentication");
        }
        const accessToken = await (0, gcpServiceAccountAuth_1.getGoogleAccessToken)(authContext.apiKey, authContext.orgId, ["https://www.googleapis.com/auth/cloud-platform"], cacheProvider);
        return {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                ...(endpoint.providerModelId.includes("sonnet-4") ? {
                    "anthropic-beta": "context-1m-2025-08-07"
                } : {})
            },
        };
    }
    async buildErrorMessage(response) {
        var _a, _b, _c;
        try {
            const respJson = (await response.json());
            if ((_a = respJson.error) === null || _a === void 0 ? void 0 : _a.message) {
                // Anthropic error format
                return { message: respJson.error.message, details: respJson.error };
            }
            else if ((_c = (_b = respJson[0]) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.message) {
                // Gemini error format
                return { message: respJson[0].error.message, details: respJson[0].error };
            }
            return { message: `Request failed with status ${response.status}`, details: undefined };
        }
        catch (error) {
            return { message: `Request failed with status ${response.status}`, details: undefined };
        }
    }
}
exports.VertexProvider = VertexProvider;
