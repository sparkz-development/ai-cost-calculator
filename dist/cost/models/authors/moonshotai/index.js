"use strict";
/**
 * MoonshotAI model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.moonshotaiEndpointConfig = exports.moonshotaiModels = void 0;
// Import models
const models_1 = require("./kimi-k2/models");
const models_2 = require("./kimi-k2.5/models");
// Import endpoints
const endpoints_1 = require("./kimi-k2/endpoints");
const endpoints_2 = require("./kimi-k2.5/endpoints");
// Aggregate models
exports.moonshotaiModels = {
    ...models_1.models,
    ...models_2.models,
};
// Aggregate endpoints
exports.moonshotaiEndpointConfig = {
    ...endpoints_1.endpoints,
    ...endpoints_2.endpoints,
};
