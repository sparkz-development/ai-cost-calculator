"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedrockUsageProcessor = void 0;
const anthropicUsageProcessor_1 = require("./anthropicUsageProcessor");
class BedrockUsageProcessor extends anthropicUsageProcessor_1.AnthropicUsageProcessor {
    extractUsageFromResponse(parsedResponse) {
        var _a, _b, _c, _d;
        if (!parsedResponse || typeof parsedResponse !== "object") {
            return {
                input: 0,
                output: 0,
            };
        }
        const usage = parsedResponse.usage || {};
        const inputTokens = (_a = usage.input_tokens) !== null && _a !== void 0 ? _a : 0;
        const outputTokens = (_b = usage.output_tokens) !== null && _b !== void 0 ? _b : 0;
        const cacheReadInputTokens = (_c = usage.cache_read_input_tokens) !== null && _c !== void 0 ? _c : 0;
        // Bedrock does not support complex cache writes like Anthropic
        // and cache creation details are not available.
        const cacheWriteInputTokens = (_d = usage.cache_creation_input_tokens) !== null && _d !== void 0 ? _d : 0;
        const modelUsage = {
            input: inputTokens,
            output: outputTokens,
        };
        if (cacheReadInputTokens > 0 || cacheWriteInputTokens > 0) {
            modelUsage.cacheDetails = {
                cachedInput: cacheReadInputTokens,
                write5m: cacheWriteInputTokens,
            };
        }
        return modelUsage;
    }
}
exports.BedrockUsageProcessor = BedrockUsageProcessor;
