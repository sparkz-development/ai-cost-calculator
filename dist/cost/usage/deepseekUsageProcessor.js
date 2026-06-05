"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepSeekUsageProcessor = void 0;
const openAIUsageProcessor_1 = require("./openAIUsageProcessor");
class DeepSeekUsageProcessor extends openAIUsageProcessor_1.OpenAIUsageProcessor {
    extractUsageFromResponse(parsedResponse) {
        var _a, _b, _c, _d, _e;
        if (!parsedResponse || typeof parsedResponse !== "object") {
            return {
                input: 0,
                output: 0,
            };
        }
        const usage = parsedResponse.usage || {};
        // DeepSeek uses different field names for cache tracking
        const promptCacheHitTokens = (_a = usage.prompt_cache_hit_tokens) !== null && _a !== void 0 ? _a : 0;
        const promptCacheMissTokens = (_b = usage.prompt_cache_miss_tokens) !== null && _b !== void 0 ? _b : 0;
        const completionTokens = (_d = (_c = usage.completion_tokens) !== null && _c !== void 0 ? _c : usage.output_tokens) !== null && _d !== void 0 ? _d : 0;
        // Extract reasoning tokens if present (for deepseek-reasoner)
        const completionDetails = usage.completion_tokens_details || {};
        const reasoningTokens = (_e = completionDetails.reasoning_tokens) !== null && _e !== void 0 ? _e : 0;
        // For DeepSeek:
        // - prompt_tokens = prompt_cache_hit_tokens + prompt_cache_miss_tokens
        // - The non-cached input is prompt_cache_miss_tokens
        // - The cached input is prompt_cache_hit_tokens
        // - completion_tokens includes reasoning_tokens, so we subtract them to get actual output
        const effectivePromptTokens = promptCacheMissTokens;
        const effectiveCompletionTokens = Math.max(0, completionTokens - reasoningTokens);
        const modelUsage = {
            input: effectivePromptTokens,
            output: effectiveCompletionTokens,
        };
        // Add cache details if there are cached tokens
        if (promptCacheHitTokens > 0) {
            modelUsage.cacheDetails = {
                cachedInput: promptCacheHitTokens,
            };
        }
        // Add reasoning/thinking tokens if present
        if (reasoningTokens > 0) {
            modelUsage.thinking = reasoningTokens;
        }
        return modelUsage;
    }
}
exports.DeepSeekUsageProcessor = DeepSeekUsageProcessor;
