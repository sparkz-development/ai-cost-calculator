"use strict";
/**
 * DeepSeek model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepseekEndpointConfig = exports.deepseekModels = void 0;
// Import models
const models_1 = require("./r1-distill/models");
const model_1 = require("./deepseek-v3/model");
const model_2 = require("./deepseek-reasoner/model");
// Import endpoints
const endpoints_1 = require("./r1-distill/endpoints");
const endpoints_2 = require("./deepseek-v3/endpoints");
const endpoints_3 = require("./deepseek-reasoner/endpoints");
// Aggregate models
exports.deepseekModels = {
    ...models_1.models,
    ...model_1.models,
    ...model_2.models,
};
// Aggregate endpoints
exports.deepseekEndpointConfig = {
    ...endpoints_1.endpoints,
    ...endpoints_2.endpoints,
    ...endpoints_3.endpoints,
};
