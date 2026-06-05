"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODEL_NAME_MAPPINGS = exports.dbProviderToProvider = void 0;
exports.heliconeProviderToModelProviderName = heliconeProviderToModelProviderName;
exports.getProvider = getProvider;
exports.getProviderDisplayName = getProviderDisplayName;
exports.buildEndpointUrl = buildEndpointUrl;
exports.buildModelId = buildModelId;
exports.authenticateRequest = authenticateRequest;
exports.filterUnsupportedParameters = filterUnsupportedParameters;
exports.buildRequestBody = buildRequestBody;
exports.buildErrorMessage = buildErrorMessage;
exports.validateProvider = validateProvider;
exports.parseModelString = parseModelString;
const result_1 = require("../../common/result");
const providers_1 = require("./providers");
const registry_1 = require("./registry");
function heliconeProviderToModelProviderName(provider) {
    if (provider === "CUSTOM") {
        return null;
    }
    switch (provider) {
        case "OPENAI":
            return "openai";
        case "ANTHROPIC":
            return "anthropic";
        case "GOOGLE":
            return "google-ai-studio";
        case "GROQ":
            return "groq";
        case "X":
            return "xai";
        case "AZURE":
            return "azure";
        case "AWS":
        case "BEDROCK":
            return "bedrock";
        case "PERPLEXITY":
            return "perplexity";
        case "DEEPSEEK":
            return "deepseek";
        case "OPENROUTER":
            return "openrouter";
        case "DEEPINFRA":
            return "deepinfra";
        case "MISTRAL":
            return "mistral";
        case "NOVITA":
            return "novita";
        case "NEBIUS":
            return "nebius";
        case "CHUTES":
            return "chutes";
        case "CEREBRAS":
            return "cerebras";
        case "BASETEN":
            return "baseten";
        case "FIREWORKS":
            return "fireworks";
        case "CANOPYWAVE":
            return "canopywave";
        // new registry does not have
        case "LOCAL":
        case "HELICONE":
        case "AMDBARTEK":
        case "ANYSCALE":
        case "CLOUDFLARE":
        case "2YFV":
        case "TOGETHER":
        case "LEMONFOX":
        case "WISDOMINANUTSHELL":
        case "QSTASH":
        case "FIRECRAWL":
        case "AVIAN":
        case "OPENPIPE":
        case "LLAMA":
        case "NVIDIA":
        case "VERCEL":
            return null;
        default:
            return null;
    }
}
// Helper function to get provider instance
function getProvider(providerName) {
    const provider = providerName in providers_1.providers
        ? providers_1.providers[providerName]
        : undefined;
    return provider ? (0, result_1.ok)(provider) : (0, result_1.err)(`Unknown provider: ${providerName}`);
}
function getProviderDisplayName(providerName) {
    const provider = providers_1.providers[providerName];
    return (provider === null || provider === void 0 ? void 0 : provider.displayName) || providerName;
}
// TODO: Remove once we normalize provider names in provider_keys table.
const dbProviderToProvider = (provider) => {
    if (provider === "openai" || provider === "OpenAI") {
        return "openai";
    }
    if (provider === "anthropic" || provider === "Anthropic") {
        return "anthropic";
    }
    if (provider === "bedrock" ||
        provider === "AWS Bedrock" ||
        provider === "aws") {
        return "bedrock";
    }
    if (provider === "vertex" || provider === "Vertex AI") {
        return "vertex";
    }
    if (provider === "groq" || provider === "Groq") {
        return "groq";
    }
    if (provider === "google" || provider === "Google AI (Gemini)") {
        return "google-ai-studio";
    }
    if (provider === "Azure OpenAI") {
        return "azure";
    }
    if (provider === "deepseek" || provider === "DeepSeek") {
        return "deepseek";
    }
    if (provider === "openrouter" || provider === "OpenRouter") {
        return "openrouter";
    }
    if (provider === "canopywave" || provider === "Canopy Wave") {
        return "canopywave";
    }
    if (provider === "novita" || provider === "Novita") {
        return "novita";
    }
    if (provider === "deepinfra" || provider === "DeepInfra") {
        return "deepinfra";
    }
    if (provider === "fireworks" || provider === "Fireworks") {
        return "fireworks";
    }
    if (provider === "baseten" || provider === "Baseten") {
        return "baseten";
    }
    if (provider === "cerebras" || provider === "Cerebras") {
        return "cerebras";
    }
    if (provider === "chutes" || provider === "Chutes") {
        return "chutes";
    }
    if (provider === "nebius" || provider === "Nebius") {
        return "nebius";
    }
    return null;
};
exports.dbProviderToProvider = dbProviderToProvider;
function buildEndpointUrl(endpoint, requestParams) {
    const providerResult = getProvider(endpoint.provider);
    if (providerResult.error) {
        return (0, result_1.err)(providerResult.error);
    }
    const provider = providerResult.data;
    if (!provider) {
        return (0, result_1.err)(`Provider data is null for: ${endpoint.provider}`);
    }
    try {
        const url = provider.buildUrl(endpoint, requestParams);
        return (0, result_1.ok)(url);
    }
    catch (error) {
        return (0, result_1.err)(error instanceof Error ? error.message : "Failed to build URL");
    }
}
// Helper function to build model ID for an endpoint
function buildModelId(modelProviderConfig, userConfig = {}) {
    const providerResult = getProvider(modelProviderConfig.provider);
    if (providerResult.error) {
        return (0, result_1.err)(providerResult.error);
    }
    const provider = providerResult.data;
    if (!provider) {
        return (0, result_1.err)(`Provider data is null for: ${modelProviderConfig.provider}`);
    }
    if (!provider.buildModelId) {
        return (0, result_1.ok)(modelProviderConfig.providerModelId);
    }
    try {
        const modelId = provider.buildModelId(modelProviderConfig, userConfig);
        return (0, result_1.ok)(modelId);
    }
    catch (error) {
        return (0, result_1.err)(error instanceof Error ? error.message : "Failed to build model ID");
    }
}
// Helper function to authenticate requests for an endpoint
async function authenticateRequest(endpoint, authContext, cacheProvider) {
    const providerResult = getProvider(endpoint.provider);
    if (providerResult.error) {
        return (0, result_1.err)(providerResult.error);
    }
    const provider = providerResult.data;
    if (!provider) {
        return (0, result_1.err)(`Provider data is null for: ${endpoint.provider}`);
    }
    if (!provider.authenticate) {
        // Default authentication for providers without custom auth
        return (0, result_1.ok)({
            headers: {
                Authorization: `Bearer ${authContext.apiKey || ""}`,
            },
        });
    }
    try {
        const result = await provider.authenticate(authContext, endpoint, cacheProvider);
        return (0, result_1.ok)(result);
    }
    catch (error) {
        return (0, result_1.err)(error instanceof Error ? error.message : "Failed to authenticate request");
    }
}
function filterUnsupportedParameters(parsedBody, endpoint) {
    var _a;
    // If no unsupported parameters defined, return original
    if (!((_a = endpoint.modelConfig.unsupportedParameters) === null || _a === void 0 ? void 0 : _a.length)) {
        return parsedBody;
    }
    // Create a shallow copy to avoid mutating the original
    const filtered = { ...parsedBody };
    // Remove each unsupported parameter
    for (const param of endpoint.modelConfig.unsupportedParameters) {
        delete filtered[param];
    }
    return filtered;
}
async function buildRequestBody(endpoint, context) {
    const providerResult = getProvider(endpoint.provider);
    if (providerResult.error) {
        return (0, result_1.err)(providerResult.error);
    }
    const provider = providerResult.data;
    if (!provider) {
        return (0, result_1.err)(`Provider data is null for: ${endpoint.provider}`);
    }
    // Filter out unsupported parameters before provider builds the body
    const filteredBody = filterUnsupportedParameters(context.parsedBody, endpoint);
    const filteredContext = { ...context, parsedBody: filteredBody };
    if (!provider.buildRequestBody) {
        return (0, result_1.ok)(JSON.stringify({
            ...filteredContext.parsedBody,
            model: endpoint.providerModelId,
        }));
    }
    try {
        const result = await provider.buildRequestBody(endpoint, filteredContext);
        return (0, result_1.ok)(result);
    }
    catch (error) {
        return (0, result_1.err)(error instanceof Error ? error.message : "Failed to build request body");
    }
}
async function buildErrorMessage(endpoint, response) {
    const providerResult = getProvider(endpoint.provider);
    if (providerResult.error) {
        return (0, result_1.err)(providerResult.error);
    }
    const provider = providerResult.data;
    if (!provider) {
        return (0, result_1.err)(`Provider data is null for: ${endpoint.provider}`);
    }
    return (0, result_1.ok)(await provider.buildErrorMessage(response));
}
function validateProvider(provider) {
    return provider in providers_1.providers;
}
/**
 * Model name mapping for backward compatibility
 * Maps deprecated/incorrect model names to their correct counterparts
 */
exports.MODEL_NAME_MAPPINGS = {
    "gemini-1.5-flash": "gemini-2.5-flash-lite",
    "claude-3.5-sonnet": "claude-3.5-sonnet-v2",
    "claude-3.5-sonnet-20240620": "claude-3.5-sonnet-v2",
    "deepseek-r1": "deepseek-reasoner",
    "kimi-k2": "kimi-k2-0905",
    "kimi-k2-instruct": "kimi-k2-0905",
    // Grok 4.1 backwards compatibility (period to dash)
    "grok-4.1-fast-non-reasoning": "grok-4-1-fast-non-reasoning",
    "grok-4.1-fast-reasoning": "grok-4-1-fast-reasoning",
};
function parseModelString(modelString) {
    const parts = modelString.split("/");
    let modelName = parts[0];
    let isOnline = false;
    // Check if model name has :online suffix
    if (modelName.endsWith(":online")) {
        isOnline = true;
        modelName = modelName.slice(0, -7);
    }
    // Apply model name mapping for backward compatibility
    modelName = exports.MODEL_NAME_MAPPINGS[modelName] || modelName;
    // Just model name: "gpt-4"
    if (parts.length === 1) {
        // Check if model is known
        const validModels = registry_1.registry.getAllModelIds();
        const isKnownModel = validModels.data && validModels.data.includes(modelName);
        // Fail fast: unknown model with no provider
        if (!isKnownModel) {
            return (0, result_1.err)(`Unknown model: ${modelName}. Please specify a provider (e.g., ${modelName}/openai) or use a supported model. See https://helicone.ai/models`);
        }
        return (0, result_1.ok)({
            modelName,
            isOnline,
        });
    }
    // Has provider - validate it once
    const provider = parts[1];
    if (!validateProvider(provider)) {
        const validProviders = Object.keys(providers_1.providers);
        return (0, result_1.err)(`Invalid provider: ${provider}. Valid providers: ${validProviders.join(", ")}`);
    }
    return (0, result_1.ok)({
        modelName,
        provider,
        customUid: parts.length === 3 ? parts[2] : undefined,
        isOnline,
    });
}
