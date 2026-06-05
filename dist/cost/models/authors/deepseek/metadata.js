"use strict";
/**
 * DeepSeek metadata
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepseekMetadata = void 0;
const index_1 = require("./index");
exports.deepseekMetadata = {
    modelCount: Object.keys(index_1.deepseekModels).length,
    supported: true,
};
