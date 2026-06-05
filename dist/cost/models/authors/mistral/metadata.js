"use strict";
/**
 * Mistral metadata
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mistralMetadata = void 0;
const index_1 = require("./index");
exports.mistralMetadata = {
    modelCount: Object.keys(index_1.mistralModels).length,
    supported: true,
};
