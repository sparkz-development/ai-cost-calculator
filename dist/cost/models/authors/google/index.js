"use strict";
/**
 * Google model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleEndpointConfig = exports.googleModels = void 0;
const model_1 = require("./gemini-2.0-flash-exp/model");
const endpoints_1 = require("./gemini-2.0-flash-exp/endpoints");
const model_2 = require("./gemini-2.5-pro/model");
const endpoints_2 = require("./gemini-2.5-pro/endpoints");
const model_3 = require("./gemini-2.5-flash/model");
const endpoints_3 = require("./gemini-2.5-flash/endpoints");
const model_4 = require("./gemini-2.5-flash-lite/model");
const endpoints_4 = require("./gemini-2.5-flash-lite/endpoints");
const model_5 = require("./gemini-3/model");
const endpoints_5 = require("./gemini-3/endpoints");
const model_6 = require("./gemini-3.1-pro-preview/model");
const endpoints_6 = require("./gemini-3.1-pro-preview/endpoints");
const model_7 = require("./gemini-3-flash-preview/model");
const endpoints_7 = require("./gemini-3-flash-preview/endpoints");
const model_8 = require("./gemini-3-pro-image/model");
const endpoints_8 = require("./gemini-3-pro-image/endpoints");
const model_9 = require("./gemini-3.1-flash-lite-preview/model");
const endpoints_9 = require("./gemini-3.1-flash-lite-preview/endpoints");
const model_10 = require("./gemma/model");
const endpoints_10 = require("./gemma/endpoints");
const model_11 = require("./gemma-3/model");
const endpoints_11 = require("./gemma-3/endpoints");
exports.googleModels = {
    ...model_1.model,
    ...model_2.model,
    ...model_3.model,
    ...model_4.model,
    ...model_5.model,
    ...model_6.model,
    ...model_7.model,
    ...model_8.model,
    ...model_9.model,
    ...model_10.model,
    ...model_11.model,
};
exports.googleEndpointConfig = {
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
