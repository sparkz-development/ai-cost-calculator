"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleUsageProcessor = void 0;
const vertexUsageProcessor_1 = require("./vertexUsageProcessor");
// Google AI Studio returns the same response shape as Vertex Gemini endpoints.
// Reuse the Vertex processor to avoid duplicate parsing logic.
class GoogleUsageProcessor extends vertexUsageProcessor_1.VertexOpenAIUsageProcessor {
}
exports.GoogleUsageProcessor = GoogleUsageProcessor;
