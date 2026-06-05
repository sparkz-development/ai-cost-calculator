"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroqUsageProcessor = void 0;
const openAIUsageProcessor_1 = require("./openAIUsageProcessor");
class GroqUsageProcessor extends openAIUsageProcessor_1.OpenAIUsageProcessor {
    // Groq puts usage in x_groq.usage in streaming responses
    consolidateStreamData(streamData) {
        var _a, _b;
        // Look for usage in x_groq.usage first (Groq's location)
        const lastChunkWithUsage = [...streamData].reverse().find(chunk => { var _a; return (chunk === null || chunk === void 0 ? void 0 : chunk.usage) || ((_a = chunk === null || chunk === void 0 ? void 0 : chunk.x_groq) === null || _a === void 0 ? void 0 : _a.usage); });
        if (lastChunkWithUsage === null || lastChunkWithUsage === void 0 ? void 0 : lastChunkWithUsage.usage) {
            return lastChunkWithUsage;
        }
        // Handle Groq's x_groq.usage format
        if ((_a = lastChunkWithUsage === null || lastChunkWithUsage === void 0 ? void 0 : lastChunkWithUsage.x_groq) === null || _a === void 0 ? void 0 : _a.usage) {
            return {
                ...lastChunkWithUsage,
                usage: lastChunkWithUsage.x_groq.usage
            };
        }
        // Fallback to building consolidated data
        const consolidated = {
            choices: [],
            usage: null,
        };
        for (const chunk of streamData) {
            if (chunk === null || chunk === void 0 ? void 0 : chunk.usage) {
                consolidated.usage = chunk.usage;
            }
            else if ((_b = chunk === null || chunk === void 0 ? void 0 : chunk.x_groq) === null || _b === void 0 ? void 0 : _b.usage) {
                consolidated.usage = chunk.x_groq.usage;
            }
            if (chunk === null || chunk === void 0 ? void 0 : chunk.id) {
                consolidated.id = chunk.id;
            }
            if (chunk === null || chunk === void 0 ? void 0 : chunk.model) {
                consolidated.model = chunk.model;
            }
        }
        return consolidated;
    }
}
exports.GroqUsageProcessor = GroqUsageProcessor;
