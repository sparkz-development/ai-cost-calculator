"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VertexUsageProcessor = exports.VertexOpenAIUsageProcessor = void 0;
const bedrockUsageProcessor_1 = require("./bedrockUsageProcessor");
const openAIUsageProcessor_1 = require("./openAIUsageProcessor");
const mapGoogleUsageToModelUsage_1 = require("../../llm-mapper/transform/providers/google/utils/mapGoogleUsageToModelUsage");
class VertexOpenAIUsageProcessor extends openAIUsageProcessor_1.OpenAIUsageProcessor {
    extractUsageFromResponse(response) {
        const usage = response.usageMetadata;
        if (!usage) {
            return { input: 0, output: 0 };
        }
        return (0, mapGoogleUsageToModelUsage_1.mapGoogleUsageToModelUsage)(usage);
    }
    consolidateStreamData(streamData) {
        // Handle native Google/Vertex stream format (usageMetadata on chunks)
        const googleUsageChunk = [...streamData]
            .reverse()
            .find((chunk) => chunk === null || chunk === void 0 ? void 0 : chunk.usageMetadata);
        if (googleUsageChunk) {
            return googleUsageChunk;
        }
        return super.consolidateStreamData(streamData);
    }
}
exports.VertexOpenAIUsageProcessor = VertexOpenAIUsageProcessor;
class VertexUsageProcessor {
    async parse(parseInput) {
        if (parseInput.model.includes("claude")) {
            // Both bedrock and vertex don't support 1h buckets like Anthropic does.
            // bedrock and vertex use the same usage format for claude models.
            return new bedrockUsageProcessor_1.BedrockUsageProcessor().parse(parseInput);
        }
        else {
            return new VertexOpenAIUsageProcessor().parse(parseInput);
        }
    }
}
exports.VertexUsageProcessor = VertexUsageProcessor;
