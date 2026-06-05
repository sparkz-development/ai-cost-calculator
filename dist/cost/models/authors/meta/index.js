"use strict";
/**
 * Meta model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaEndpointConfig = exports.metaModels = void 0;
// Import models
const models_1 = require("./llama/models");
const models_2 = require("./hermes/models");
// Import endpoints
const endpoints_1 = require("./llama/endpoints");
const endpoints_2 = require("./hermes/endpoints");
// Aggregate models
exports.metaModels = {
    ...models_1.models,
    ...models_2.models,
};
// Aggregate endpoints
exports.metaEndpointConfig = {
    ...endpoints_1.endpoints,
    ...endpoints_2.endpoints,
};
