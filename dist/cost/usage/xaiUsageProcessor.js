"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XAIUsageProcessor = void 0;
const openAIUsageProcessor_1 = require("./openAIUsageProcessor");
class XAIUsageProcessor extends openAIUsageProcessor_1.OpenAIUsageProcessor {
    // XAI reports completion_tokens and prompt_tokens without including reasoning or audio
    // so they are already "effective" tokens - we don't subtract reasoning/audio from them
    extractUsageFromResponse(parsedResponse) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (!parsedResponse || typeof parsedResponse !== "object") {
            return {
                input: 0,
                output: 0,
            };
        }
        const usage = parsedResponse.usage || {};
        const completionTokens = (_b = (_a = usage.completion_tokens) !== null && _a !== void 0 ? _a : usage.output_tokens) !== null && _b !== void 0 ? _b : 0;
        const promptDetails = usage.prompt_tokens_details || usage.input_tokens_details || {};
        const completionDetails = usage.completion_tokens_details || usage.output_tokens_details || {};
        // For XAI, use text_tokens from details (excludes cached tokens)
        const textTokens = (_c = promptDetails.text_tokens) !== null && _c !== void 0 ? _c : 0;
        const cachedTokens = (_d = promptDetails.cached_tokens) !== null && _d !== void 0 ? _d : 0;
        const promptAudioTokens = (_e = promptDetails.audio_tokens) !== null && _e !== void 0 ? _e : 0;
        const completionAudioTokens = (_f = completionDetails.audio_tokens) !== null && _f !== void 0 ? _f : 0;
        const reasoningTokens = (_g = completionDetails.reasoning_tokens) !== null && _g !== void 0 ? _g : 0;
        const effectivePromptTokens = textTokens;
        const effectiveCompletionTokens = completionTokens;
        const modelUsage = {
            input: effectivePromptTokens,
            output: effectiveCompletionTokens,
        };
        if (cachedTokens > 0) {
            modelUsage.cacheDetails = {
                cachedInput: cachedTokens,
            };
        }
        if (reasoningTokens > 0) {
            modelUsage.thinking = reasoningTokens;
        }
        if (promptAudioTokens > 0 || completionAudioTokens > 0) {
            modelUsage.audio = {
                input: promptAudioTokens,
                output: completionAudioTokens,
            };
        }
        const rejectedTokens = (_h = completionDetails.rejected_prediction_tokens) !== null && _h !== void 0 ? _h : 0;
        const acceptedTokens = (_j = completionDetails.accepted_prediction_tokens) !== null && _j !== void 0 ? _j : 0;
        if (rejectedTokens > 0 || acceptedTokens > 0) {
            modelUsage.output = effectiveCompletionTokens + acceptedTokens;
        }
        // XAI adds num_sources_used for web search
        const numSourcesUsed = (_k = usage.num_sources_used) !== null && _k !== void 0 ? _k : 0;
        if (numSourcesUsed > 0) {
            modelUsage.web_search = numSourcesUsed;
        }
        return modelUsage;
    }
}
exports.XAIUsageProcessor = XAIUsageProcessor;
