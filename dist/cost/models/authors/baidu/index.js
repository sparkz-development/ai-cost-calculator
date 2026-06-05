"use strict";
/**
 * Baidu model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.baiduEndpointConfig = exports.baiduModels = void 0;
// Import models
const models_1 = require("./ernie/models");
// Import endpoints
const endpoints_1 = require("./ernie/endpoints");
// Aggregate models
exports.baiduModels = {
    ...models_1.models
};
// Aggregate endpoints
exports.baiduEndpointConfig = {
    ...endpoints_1.endpoints
};
