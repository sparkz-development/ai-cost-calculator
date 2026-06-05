"use strict";
/**
 * Alibaba model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.alibabaEndpointConfig = exports.alibabaModels = void 0;
// Import models
const models_1 = require("./qwen2.5/models");
const models_2 = require("./qwen3/models");
// Import endpoints
const endpoints_1 = require("./qwen2.5/endpoints");
const endpoints_2 = require("./qwen3/endpoints");
// Aggregate models
exports.alibabaModels = {
    ...models_1.models,
    ...models_2.models,
};
// Aggregate endpoints
exports.alibabaEndpointConfig = {
    ...endpoints_1.endpoints,
    ...endpoints_2.endpoints,
};
