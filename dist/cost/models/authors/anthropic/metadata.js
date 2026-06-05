"use strict";
/**
 * Anthropic author metadata
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.anthropicMetadata = void 0;
const _1 = require(".");
exports.anthropicMetadata = {
    name: "Anthropic",
    slug: "anthropic",
    description: "Creator of the Claude family of models",
    website: "https://www.anthropic.com",
    apiUrl: "https://api.anthropic.com",
    supported: true,
    modelCount: Object.keys(_1.anthropicModels).length,
};
