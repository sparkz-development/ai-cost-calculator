"use strict";
/**
 * OpenAI model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.openaiEndpointConfig = exports.openaiModels = void 0;
// Import models
const models_1 = require("./gpt-4o/models");
const models_2 = require("./o1/models");
const models_3 = require("./o3/models");
const models_4 = require("./o4/models");
const models_5 = require("./gpt-4.1/models");
const models_6 = require("./gpt-5/models");
const models_7 = require("./gpt-5.1/models");
const models_8 = require("./gpt-5.2/models");
const models_9 = require("./gpt-5.4/models");
const models_10 = require("./oss/models");
const models_11 = require("./gpt-image-1/models");
// Import endpoints
const endpoints_1 = require("./gpt-4o/endpoints");
const endpoints_2 = require("./o1/endpoints");
const endpoints_3 = require("./o3/endpoints");
const endpoints_4 = require("./o4/endpoints");
const endpoints_5 = require("./gpt-4.1/endpoints");
const endpoints_6 = require("./gpt-5/endpoints");
const endpoints_7 = require("./gpt-5.1/endpoints");
const endpoints_8 = require("./gpt-5.2/endpoints");
const endpoints_9 = require("./gpt-5.4/endpoints");
const endpoints_10 = require("./oss/endpoints");
const endpoints_11 = require("./gpt-image-1/endpoints");
// Aggregate models
exports.openaiModels = {
    ...models_1.models,
    ...models_2.models,
    ...models_3.models,
    ...models_4.models,
    ...models_5.models,
    ...models_6.models,
    ...models_7.models,
    ...models_8.models,
    ...models_9.models,
    ...models_10.models,
    ...models_11.models,
};
// Aggregate endpoints
exports.openaiEndpointConfig = {
    ...endpoints_1.endpoints,
    ...endpoints_2.endpoints,
    ...endpoints_3.endpoints,
    ...endpoints_4.endpoints,
    ...endpoints_5.endpoints,
    ...endpoints_6.endpoints,
    ...endpoints_7.endpoints,
    ...endpoints_8.endpoints,
    ...endpoints_9.endpoints,
    ...endpoints_10.endpoints,
    ...endpoints_11.endpoints,
};
