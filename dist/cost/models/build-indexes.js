"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildIndexes = buildIndexes;
function mergeConfigs(modelProviderConfig, endpointConfig, deploymentId) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const userConfig = {
        region: deploymentId,
        location: deploymentId,
        projectId: endpointConfig.projectId,
        deploymentName: endpointConfig.deploymentName,
        resourceName: endpointConfig.resourceName,
        crossRegion: (_a = endpointConfig.crossRegion) !== null && _a !== void 0 ? _a : modelProviderConfig.crossRegion,
    };
    return {
        author: modelProviderConfig.author,
        modelConfig: modelProviderConfig,
        userConfig: userConfig,
        provider: modelProviderConfig.provider,
        providerModelId: (_b = endpointConfig.providerModelId) !== null && _b !== void 0 ? _b : modelProviderConfig.providerModelId,
        pricing: (_c = endpointConfig.pricing) !== null && _c !== void 0 ? _c : modelProviderConfig.pricing,
        contextLength: (_d = endpointConfig.contextLength) !== null && _d !== void 0 ? _d : modelProviderConfig.contextLength,
        maxCompletionTokens: (_e = endpointConfig.maxCompletionTokens) !== null && _e !== void 0 ? _e : modelProviderConfig.maxCompletionTokens,
        ptbEnabled: (_f = endpointConfig.ptbEnabled) !== null && _f !== void 0 ? _f : modelProviderConfig.ptbEnabled,
        version: (_g = endpointConfig.version) !== null && _g !== void 0 ? _g : modelProviderConfig.version,
        supportedParameters: modelProviderConfig.supportedParameters,
        unsupportedParameters: modelProviderConfig.unsupportedParameters,
        priority: (_h = endpointConfig.priority) !== null && _h !== void 0 ? _h : modelProviderConfig.priority,
    };
}
function buildIndexes(modelProviderConfigs, archivedModelProviderConfigs = {}) {
    const endpointIdToEndpoint = new Map();
    const endpointConfigIdToEndpointConfig = new Map();
    const modelToPtbEndpoints = new Map();
    const endpointConfigIdToPtbEndpoints = new Map();
    const providerToModels = new Map();
    const modelToEndpointConfigs = new Map();
    const modelToProviders = new Map();
    const modelToEndpoints = new Map();
    const modelToProviderData = new Map();
    const modelProviderToData = new Map();
    const providerModelIdToConfig = new Map();
    const providerModelIdAliasToConfig = new Map();
    const modelToArchivedEndpointConfigs = new Map();
    for (const [configKey, config] of Object.entries(modelProviderConfigs)) {
        const typedConfigKey = configKey;
        const [modelName, provider] = configKey.split(":");
        // Store base config for BYOK
        endpointConfigIdToEndpointConfig.set(typedConfigKey, config);
        // Store providerModelId -> config mapping
        const providerModelIdKey = `${config.providerModelId}:${config.provider}`;
        providerModelIdToConfig.set(providerModelIdKey, config);
        // Store providerModelIdAliases -> config mapping
        if (config.providerModelIdAliases && config.providerModelIdAliases.length > 0) {
            for (const alias of config.providerModelIdAliases) {
                const aliasKey = `${alias}:${config.provider}`;
                providerModelIdAliasToConfig.set(aliasKey, config);
            }
        }
        // Track provider to models mapping
        if (!providerToModels.has(provider)) {
            providerToModels.set(provider, new Set());
        }
        providerToModels.get(provider).add(modelName);
        // Track model to endpoint configs mapping
        if (!modelToEndpointConfigs.has(modelName)) {
            modelToEndpointConfigs.set(modelName, []);
        }
        modelToEndpointConfigs.get(modelName).push(config);
        // Track model to providers mapping
        if (!modelToProviders.has(modelName)) {
            modelToProviders.set(modelName, new Set());
        }
        modelToProviders.get(modelName).add(provider);
        // Build provider data for this model/provider combination
        if (!modelToProviderData.has(modelName)) {
            modelToProviderData.set(modelName, []);
        }
        // Create provider data entry (we'll collect PTB endpoints as we build them below)
        const providerData = {
            provider,
            config,
            ptbEndpoints: [],
        };
        modelToProviderData.get(modelName).push(providerData);
        // Also add to direct lookup map
        modelProviderToData.set(typedConfigKey, providerData);
        // Create an endpoint for each deployment
        for (const [deploymentId, deploymentConfig] of Object.entries(config.endpointConfigs)) {
            const endpointKey = `${configKey}:${deploymentId}`;
            const endpoint = mergeConfigs(config, deploymentConfig, deploymentId);
            endpointIdToEndpoint.set(endpointKey, endpoint);
            // Add to ALL endpoints index (regardless of PTB status)
            if (!modelToEndpoints.has(modelName)) {
                modelToEndpoints.set(modelName, []);
            }
            modelToEndpoints.get(modelName).push(endpoint);
            // Add to PTB index if enabled
            if (endpoint.ptbEnabled) {
                if (!modelToPtbEndpoints.has(modelName)) {
                    modelToPtbEndpoints.set(modelName, []);
                }
                modelToPtbEndpoints.get(modelName).push(endpoint);
                // Also index by model:provider
                if (!endpointConfigIdToPtbEndpoints.has(typedConfigKey)) {
                    endpointConfigIdToPtbEndpoints.set(typedConfigKey, []);
                }
                endpointConfigIdToPtbEndpoints.get(typedConfigKey).push(endpoint);
                // Add to provider data PTB endpoints
                providerData.ptbEndpoints.push(endpoint);
            }
        }
    }
    for (const [versionKey, archivedConfig] of Object.entries(archivedModelProviderConfigs)) {
        modelToArchivedEndpointConfigs.set(versionKey, archivedConfig);
    }
    // Sort endpoints by cost (ascending)
    const sortByCost = (a, b) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const aCost = ((_b = (_a = a.pricing[0]) === null || _a === void 0 ? void 0 : _a.input) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = a.pricing[0]) === null || _c === void 0 ? void 0 : _c.output) !== null && _d !== void 0 ? _d : 0);
        const bCost = ((_f = (_e = b.pricing[0]) === null || _e === void 0 ? void 0 : _e.input) !== null && _f !== void 0 ? _f : 0) + ((_h = (_g = b.pricing[0]) === null || _g === void 0 ? void 0 : _g.output) !== null && _h !== void 0 ? _h : 0);
        return aCost - bCost;
    };
    modelToEndpoints.forEach((endpoints) => endpoints.sort(sortByCost));
    modelToPtbEndpoints.forEach((endpoints) => endpoints.sort(sortByCost));
    endpointConfigIdToPtbEndpoints.forEach((endpoints) => endpoints.sort(sortByCost));
    modelToProviderData.forEach((providerDataList) => providerDataList.forEach((pd) => pd.ptbEndpoints.sort(sortByCost)));
    return {
        endpointConfigIdToEndpointConfig,
        endpointIdToEndpoint,
        modelToPtbEndpoints,
        modelProviderIdToPtbEndpoints: endpointConfigIdToPtbEndpoints,
        providerToModels,
        modelToEndpointConfigs,
        modelToProviders,
        modelToEndpoints,
        modelToProviderData,
        modelProviderToData,
        providerModelIdToConfig,
        providerModelIdAliasToConfig,
        modelToArchivedEndpointConfigs,
    };
}
