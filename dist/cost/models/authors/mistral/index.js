"use strict";
/**
 * Mistral model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mistralEndpointConfig = exports.mistralModels = void 0;
// Import models
const models_1 = require("./mistral-nemo/models");
const models_2 = require("./mistral-small/models");
const models_3 = require("./mistral-large/models");
// Import endpoints
const endpoints_1 = require("./mistral-nemo/endpoints");
const endpoints_2 = require("./mistral-small/endpoints");
const endpoints_3 = require("./mistral-large/endpoints");
// Aggregate models
exports.mistralModels = {
    ...models_1.models,
    ...models_2.models,
    ...models_3.models,
};
// Aggregate endpoints
exports.mistralEndpointConfig = {
    ...endpoints_1.endpoints,
    ...endpoints_2.endpoints,
    ...endpoints_3.endpoints,
};
