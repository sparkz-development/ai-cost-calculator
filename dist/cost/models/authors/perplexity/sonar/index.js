"use strict";
/**
 * Perplexity model registry aggregation
 * Combines all models and endpoints from Perplexity
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.perplexityEndpointConfig = exports.perplexityModels = void 0;
// Import models and endpoints
const models_1 = require("./models");
Object.defineProperty(exports, "perplexityModels", { enumerable: true, get: function () { return models_1.models; } });
const endpoints_1 = require("./endpoints");
// Export aggregated endpoints
exports.perplexityEndpointConfig = endpoints_1.endpoints;
