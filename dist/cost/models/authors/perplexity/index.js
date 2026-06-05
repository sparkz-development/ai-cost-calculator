"use strict";
/**
 * Perplexity model registry aggregation
 * Combines all models and endpoints from Perplexity
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.perplexityEndpointConfig = exports.perplexityModels = void 0;
// Import models and endpoints from sonar
const sonar_1 = require("./sonar");
Object.defineProperty(exports, "perplexityModels", { enumerable: true, get: function () { return sonar_1.perplexityModels; } });
Object.defineProperty(exports, "perplexityEndpointConfig", { enumerable: true, get: function () { return sonar_1.perplexityEndpointConfig; } });
