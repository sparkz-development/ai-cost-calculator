"use strict";
/**
 * Main registry with O(1) endpoint access
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.registry = exports.getPtbEndpoints = void 0;
const build_indexes_1 = require("./build-indexes");
const provider_helpers_1 = require("./provider-helpers");
const providers_1 = require("./providers");
const result_1 = require("../../common/result");
// Import all models and endpoints from authors
const anthropic_1 = require("./authors/anthropic");
const openai_1 = require("./authors/openai");
const google_1 = require("./authors/google");
const xai_1 = require("./authors/xai");
const meta_1 = require("./authors/meta");
const moonshotai_1 = require("./authors/moonshotai");
const alibaba_1 = require("./authors/alibaba");
const deepseek_1 = require("./authors/deepseek");
const mistral_1 = require("./authors/mistral");
const zai_1 = require("./authors/zai");
const baidu_1 = require("./authors/baidu");
const sonar_1 = require("./authors/perplexity/sonar");
// Combine all models
const allModels = {
    ...anthropic_1.anthropicModels,
    ...openai_1.openaiModels,
    ...google_1.googleModels,
    ...xai_1.grokModels,
    ...meta_1.metaModels,
    ...moonshotai_1.moonshotaiModels,
    ...alibaba_1.alibabaModels,
    ...deepseek_1.deepseekModels,
    ...mistral_1.mistralModels,
    ...zai_1.zaiModels,
    ...baidu_1.baiduModels,
    ...sonar_1.perplexityModels,
};
// Combine all endpoint configs
const modelProviderConfigs = {
    ...anthropic_1.anthropicEndpointConfig,
    ...openai_1.openaiEndpointConfig,
    ...google_1.googleEndpointConfig,
    ...xai_1.grokEndpointConfig,
    ...meta_1.metaEndpointConfig,
    ...moonshotai_1.moonshotaiEndpointConfig,
    ...alibaba_1.alibabaEndpointConfig,
    ...deepseek_1.deepseekEndpointConfig,
    ...mistral_1.mistralEndpointConfig,
    ...zai_1.zaiEndpointConfig,
    ...baidu_1.baiduEndpointConfig,
    ...sonar_1.perplexityEndpointConfig,
};
// Combine all archived endpoints
const archivedModelProviderConfigs = {
// TODO: if any archived endpoints are added, make sure they are included here
};
const indexes = (0, build_indexes_1.buildIndexes)(modelProviderConfigs, archivedModelProviderConfigs);
function getAllModelIds() {
    return (0, result_1.ok)(Object.keys(allModels));
}
function getAllModelsWithIds() {
    return (0, result_1.ok)(allModels);
}
const modelToAuthorMap = new Map();
for (const [modelName, config] of Object.entries(allModels)) {
    modelToAuthorMap.set(modelName.toLowerCase(), config.author);
}
function getAuthorByModel(model) {
    var _a;
    const normalizedModel = model.toLowerCase();
    return (_a = modelToAuthorMap.get(normalizedModel)) !== null && _a !== void 0 ? _a : null;
}
function getEndpointsByModel(model) {
    const endpoints = indexes.modelToEndpoints.get(model) || [];
    return (0, result_1.ok)(endpoints);
}
function createPassthroughEndpoint(modelName, provider, userEndpointConfig) {
    // Get the provider's supported plugins
    const providerInstance = providers_1.providers[provider];
    const supportedPlugins = providerInstance === null || providerInstance === void 0 ? void 0 : providerInstance.supportedPlugins;
    const endpointConfig = {
        providerModelId: modelName,
        ptbEnabled: false,
        provider,
        author: "passthrough",
        pricing: [
            {
                threshold: 0,
                input: 0,
                output: 0,
            },
        ],
        contextLength: 0,
        maxCompletionTokens: 0,
        supportedParameters: [],
        // Use the provider's supportedPlugins if available
        supportedPlugins: supportedPlugins && supportedPlugins.length > 0
            ? supportedPlugins
            : undefined,
        endpointConfigs: {},
    };
    return buildEndpoint(endpointConfig, userEndpointConfig);
}
function getPtbEndpointsByProvider(model, provider) {
    const configId = `${model}:${provider}`;
    const endpoints = indexes.modelProviderIdToPtbEndpoints.get(configId) || [];
    return (0, result_1.ok)(endpoints);
}
function getProviderModels(provider) {
    const models = indexes.providerToModels.get(provider) || new Set();
    return (0, result_1.ok)(models);
}
function buildEndpoint(endpointConfig, userEndpointConfig) {
    var _a;
    const modelIdResult = (0, provider_helpers_1.buildModelId)(endpointConfig, userEndpointConfig);
    if (modelIdResult.error) {
        return (0, result_1.err)(modelIdResult.error);
    }
    return (0, result_1.ok)({
        modelConfig: endpointConfig,
        userConfig: userEndpointConfig,
        provider: endpointConfig.provider,
        author: endpointConfig.author,
        providerModelId: (_a = modelIdResult.data) !== null && _a !== void 0 ? _a : "",
        supportedParameters: endpointConfig.supportedParameters,
        pricing: endpointConfig.pricing,
        contextLength: endpointConfig.contextLength,
        maxCompletionTokens: endpointConfig.maxCompletionTokens,
        ptbEnabled: false,
        version: endpointConfig.version,
        priority: endpointConfig.priority,
    });
}
function getModelProviderConfig(model, provider) {
    const configId = `${model}:${provider}`;
    const config = indexes.endpointConfigIdToEndpointConfig.get(configId);
    return config ? (0, result_1.ok)(config) : (0, result_1.err)(`Config not found: ${configId}`);
}
function getModelProviderConfigByProviderModelId(providerModelId, provider) {
    const providerModelIdKey = `${providerModelId}:${provider}`;
    let result = indexes.providerModelIdToConfig.get(providerModelIdKey);
    if (result) {
        return (0, result_1.ok)(result);
    }
    result = indexes.providerModelIdAliasToConfig.get(providerModelIdKey);
    if (result) {
        return (0, result_1.ok)(result);
    }
    return (0, result_1.err)(`Config not found for providerModelId: ${providerModelId}`);
}
function getModelProviderConfigs(model) {
    const configs = indexes.modelToEndpointConfigs.get(model) || [];
    return (0, result_1.ok)(configs);
}
function getModelProviders(model) {
    const providers = indexes.modelToProviders.get(model) || new Set();
    return (0, result_1.ok)(providers);
}
function getModelProviderEntriesByModel(model) {
    const providerData = indexes.modelToProviderData.get(model) || [];
    return (0, result_1.ok)(providerData);
}
function getModelProviderEntry(model, provider) {
    const configId = `${model}:${provider}`;
    const providerData = indexes.modelProviderToData.get(configId) || null;
    return (0, result_1.ok)(providerData);
}
const getPtbEndpoints = (model) => {
    const endpoints = indexes.modelToPtbEndpoints.get(model) || [];
    return (0, result_1.ok)(endpoints);
};
exports.getPtbEndpoints = getPtbEndpoints;
function getPtbEndpointsForProvider(provider) {
    const topLevelEndpoints = [];
    indexes.modelToPtbEndpoints.forEach((endpoints, model) => {
        for (const endpoint of endpoints) {
            if (endpoint.provider === provider) {
                topLevelEndpoints.push({
                    endpoint: endpoint,
                    model: model,
                });
            }
        }
    });
    return (0, result_1.ok)(topLevelEndpoints);
}
function getModelProviderConfigByVersion(model, provider, version) {
    var _a, _b, _c, _d;
    const currentEntry = getModelProviderEntry(model, provider);
    // if the given version matches the active config version (or both are undefined/empty)
    if ((!((_a = currentEntry.data) === null || _a === void 0 ? void 0 : _a.config.version) && !version) ||
        ((_b = currentEntry.data) === null || _b === void 0 ? void 0 : _b.config.version) === version) {
        return (0, result_1.ok)((_d = (_c = currentEntry.data) === null || _c === void 0 ? void 0 : _c.config) !== null && _d !== void 0 ? _d : null);
    }
    const versionKey = `${model}:${provider}:${version}`;
    const archivedConfig = indexes.modelToArchivedEndpointConfigs.get(versionKey);
    return (0, result_1.ok)(archivedConfig || null);
}
exports.registry = {
    getAllModelIds,
    getAllModelsWithIds,
    createPassthroughEndpoint,
    getPtbEndpointsByProvider,
    getPtbEndpoints: exports.getPtbEndpoints,
    getProviderModels,
    buildEndpoint,
    getModelProviderConfig,
    getModelProviderConfigByProviderModelId,
    getPtbEndpointsForProvider,
    getModelProviderConfigs,
    getModelProviders,
    getEndpointsByModel,
    getModelProviderEntriesByModel,
    getModelProviderEntry,
    getModelProviderConfigByVersion,
    getAuthorByModel,
};
