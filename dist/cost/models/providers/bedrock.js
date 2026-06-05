"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedrockProvider = void 0;
const signature_v4_1 = require("@smithy/signature-v4");
const sha256_js_1 = require("@aws-crypto/sha256-js");
const protocol_http_1 = require("@smithy/protocol-http");
const base_1 = require("./base");
class BedrockProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "AWS Bedrock";
        this.baseUrl = "https://bedrock-runtime.{region}.amazonaws.com";
        this.auth = "aws-signature";
        this.requiredConfig = ["region"];
        this.pricingPages = ["https://aws.amazon.com/bedrock/pricing/"];
        this.modelPages = [
            "https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html",
        ];
    }
    getModelId(modelProviderConfig, userEndpointConfig) {
        if (userEndpointConfig.crossRegion && userEndpointConfig.region) {
            const regionPrefix = userEndpointConfig.region.split("-")[0];
            return `${regionPrefix}.${modelProviderConfig.providerModelId}`;
        }
        return modelProviderConfig.providerModelId;
    }
    buildUrl(endpoint, requestParams) {
        const region = endpoint.userConfig.region || "us-east-1";
        const modelId = this.getModelId(endpoint.modelConfig, endpoint.userConfig);
        const isStreaming = requestParams.isStreaming === true;
        const endpointMethod = isStreaming
            ? "invoke-with-response-stream"
            : "invoke";
        return `https://bedrock-runtime.${region}.amazonaws.com/model/${modelId}/${endpointMethod}`;
    }
    buildModelId(modelProviderConfig, userEndpointConfig) {
        if (modelProviderConfig.author === "passthrough") {
            return modelProviderConfig.providerModelId;
        }
        return this.getModelId(modelProviderConfig, userEndpointConfig);
    }
    async authenticate(authContext, endpoint) {
        if (!authContext.apiKey || !authContext.secretKey) {
            throw new Error("Bedrock requires both apiKey and secretKey");
        }
        if (!authContext.requestMethod ||
            !authContext.requestUrl ||
            !authContext.requestBody) {
            throw new Error("Bedrock authentication requires requestMethod, requestUrl, and requestBody");
        }
        const awsRegion = endpoint.userConfig.region || "us-west-1";
        const sigv4 = new signature_v4_1.SignatureV4({
            service: "bedrock",
            region: awsRegion,
            credentials: {
                accessKeyId: authContext.apiKey,
                secretAccessKey: authContext.secretKey,
            },
            sha256: sha256_js_1.Sha256,
        });
        const headers = new Headers();
        const forwardToHost = `bedrock-runtime.${awsRegion}.amazonaws.com`;
        headers.set("host", forwardToHost);
        headers.set("content-type", "application/json");
        if (endpoint.providerModelId.includes("sonnet-4")) {
            headers.set("anthropic-beta", "context-1m-2025-08-07");
        }
        const url = new URL(authContext.requestUrl);
        const request = new protocol_http_1.HttpRequest({
            method: authContext.requestMethod,
            protocol: url.protocol,
            hostname: forwardToHost,
            path: url.pathname + url.search,
            headers: Object.fromEntries(headers.entries()),
            body: authContext.requestBody,
        });
        const signedRequest = await sigv4.sign(request);
        const signedHeaders = {};
        for (const [key, value] of Object.entries(signedRequest.headers)) {
            if (value) {
                signedHeaders[key] = value.toString();
            }
        }
        return { headers: signedHeaders };
    }
    buildRequestBody(endpoint, context) {
        if (context.bodyMapping === "NO_MAPPING") {
            // For Claude models, add anthropic_version and remove model/stream
            if (endpoint.providerModelId.includes("claude-")) {
                return JSON.stringify({
                    ...context.parsedBody,
                    anthropic_version: "bedrock-2023-05-31",
                    model: undefined,
                    stream: undefined,
                });
            }
            return JSON.stringify({
                ...context.parsedBody,
                model: endpoint.providerModelId,
            });
        }
        let updatedBody = context.parsedBody;
        if (context.bodyMapping === "RESPONSES") {
            updatedBody = context.toChatCompletions(updatedBody);
        }
        if (endpoint.providerModelId.includes("claude-")) {
            const anthropicBody = context.toAnthropic(updatedBody, endpoint.providerModelId, { includeCacheBreakpoints: false });
            updatedBody = {
                ...anthropicBody,
                anthropic_version: "bedrock-2023-05-31",
                model: undefined, // model is not needed in Bedrock inputs (as its defined via URL)
                stream: undefined,
            };
            return JSON.stringify(updatedBody);
        }
        // Pass through
        return JSON.stringify({
            ...context.parsedBody,
            model: endpoint.providerModelId,
        });
    }
    async buildErrorMessage(response) {
        try {
            const respJson = (await response.json());
            if (respJson.message) {
                return { message: respJson.message, details: respJson };
            }
            return { message: `Failed request with status ${response.status}` };
        }
        catch (error) {
            return { message: `Request failed with status ${response.status}` };
        }
    }
}
exports.BedrockProvider = BedrockProvider;
