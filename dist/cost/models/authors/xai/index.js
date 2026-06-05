"use strict";
/**
 * Grok (xAI) model registry aggregation
 * Combines all models and endpoints from Grok
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.grokEndpointConfig = exports.grokModels = void 0;
// Import models and endpoints
const models_1 = require("./models");
Object.defineProperty(exports, "grokModels", { enumerable: true, get: function () { return models_1.models; } });
const endpoints_1 = require("./endpoints");
// Export aggregated endpoints
exports.grokEndpointConfig = endpoints_1.endpoints;
