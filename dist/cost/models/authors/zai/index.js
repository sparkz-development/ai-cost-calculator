"use strict";
/**
 * Zai model registry aggregation
 * Combines all models and endpoints from Zai
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.zaiEndpointConfig = exports.zaiModels = void 0;
// Import models and endpoints
const models_1 = require("./glm-4/models");
const endpoints_1 = require("./glm-4/endpoints");
// Aggregate models
exports.zaiModels = {
    ...models_1.models
};
// Aggregate endpoints
exports.zaiEndpointConfig = {
    ...endpoints_1.endpoints
};
