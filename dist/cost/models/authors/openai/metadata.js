"use strict";
/**
 * OpenAI metadata
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.openaiMetadata = void 0;
const index_1 = require("./index");
exports.openaiMetadata = {
    modelCount: Object.keys(index_1.openaiModels).length,
    supported: true,
};
