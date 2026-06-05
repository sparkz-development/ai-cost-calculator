"use strict";
/**
 * Anthropic model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.anthropicEndpointConfig = exports.anthropicModels = void 0;
// Import models
const model_1 = require("./claude-opus-4-1/model");
const model_2 = require("./claude-opus-4/model");
const model_3 = require("./claude-sonnet-4/model");
const model_4 = require("./claude-3.7-sonnet/model");
const model_5 = require("./claude-3.5-sonnet-v2/model");
const model_6 = require("./claude-3.5-haiku/model");
const model_7 = require("./claude-3-haiku-20240307/model");
const model_8 = require("./claude-4.5-sonnet/model");
const model_9 = require("./claude-4.5-haiku/model");
const model_10 = require("./claude-sonnet-4-5-20250929/model");
const model_11 = require("./claude-haiku-4-5-20251001/model");
const model_12 = require("./claude-opus-4-1-20250805/model");
const model_13 = require("./claude-4.5-opus/model");
const model_14 = require("./claude-4.6-opus/model");
const model_15 = require("./claude-4.6-sonnet/model");
// Import endpoints
const endpoints_1 = require("./claude-opus-4-1/endpoints");
const endpoints_2 = require("./claude-opus-4/endpoints");
const endpoints_3 = require("./claude-sonnet-4/endpoints");
const endpoints_4 = require("./claude-3.7-sonnet/endpoints");
const endpoints_5 = require("./claude-3.5-sonnet-v2/endpoints");
const endpoints_6 = require("./claude-3.5-haiku/endpoints");
const endpoints_7 = require("./claude-3-haiku-20240307/endpoints");
const endpoints_8 = require("./claude-4.5-sonnet/endpoints");
const endpoints_9 = require("./claude-4.5-haiku/endpoints");
const endpoints_10 = require("./claude-sonnet-4-5-20250929/endpoints");
const endpoints_11 = require("./claude-haiku-4-5-20251001/endpoints");
const endpoints_12 = require("./claude-opus-4-1-20250805/endpoints");
const endpoints_13 = require("./claude-4.5-opus/endpoints");
const endpoints_14 = require("./claude-4.6-opus/endpoints");
const endpoints_15 = require("./claude-4.6-sonnet/endpoints");
// Aggregate models
exports.anthropicModels = {
    ...model_1.models,
    ...model_2.models,
    ...model_3.models,
    ...model_4.models,
    ...model_5.models,
    ...model_6.models,
    ...model_7.models,
    ...model_8.models,
    ...model_9.models,
    ...model_10.models,
    ...model_11.models,
    ...model_12.models,
    ...model_13.models,
    ...model_14.models,
    ...model_15.models,
};
// Aggregate endpoints
exports.anthropicEndpointConfig = {
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
    ...endpoints_12.endpoints,
    ...endpoints_13.endpoints,
    ...endpoints_14.endpoints,
    ...endpoints_15.endpoints,
};
