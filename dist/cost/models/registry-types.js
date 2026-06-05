"use strict";
/**
 * Type definitions for the model registry
 * Separated to avoid circular dependencies
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Import configs to derive types
const anthropic_1 = require("./authors/anthropic");
const deepseek_1 = require("./authors/deepseek");
const google_1 = require("./authors/google");
const xai_1 = require("./authors/xai");
const openai_1 = require("./authors/openai");
const mistral_1 = require("./authors/mistral");
const alibaba_1 = require("./authors/alibaba");
const meta_1 = require("./authors/meta");
const zai_1 = require("./authors/zai");
const baidu_1 = require("./authors/baidu");
// Combine all models for type derivation
const allModels = {
    ...anthropic_1.anthropicModels,
    ...openai_1.openaiModels,
    ...google_1.googleModels,
    ...xai_1.grokModels,
    ...mistral_1.mistralModels,
    ...deepseek_1.deepseekModels,
    ...alibaba_1.alibabaModels,
    ...meta_1.metaModels,
    ...baidu_1.baiduModels,
    ...zai_1.zaiModels
};
// Combine configs for type derivation
const modelProviderConfigs = {
    ...anthropic_1.anthropicEndpointConfig,
    ...openai_1.openaiEndpointConfig,
    ...google_1.googleEndpointConfig,
    ...xai_1.grokEndpointConfig,
    ...mistral_1.mistralEndpointConfig,
    ...deepseek_1.deepseekEndpointConfig,
    ...alibaba_1.alibabaEndpointConfig,
    ...meta_1.metaEndpointConfig,
    ...baidu_1.baiduEndpointConfig,
    ...zai_1.zaiEndpointConfig
};
