"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenRouterUsageProcessor = void 0;
exports.getOpenRouterDeclaredCost = getOpenRouterDeclaredCost;
function getOpenRouterDeclaredCost(cost, cost_details) {
    // Priority 1: Direct cost field
    if (cost && cost > 0) {
        return cost;
    }
    // Priority 2: Upstream inference cost
    if ((cost_details === null || cost_details === void 0 ? void 0 : cost_details.upstream_inference_cost) && cost_details.upstream_inference_cost > 0) {
        return cost_details.upstream_inference_cost;
    }
    // Priority 3: Sum of prompt and completion costs
    if ((cost_details === null || cost_details === void 0 ? void 0 : cost_details.upstream_inference_prompt_cost) &&
        (cost_details === null || cost_details === void 0 ? void 0 : cost_details.upstream_inference_completions_cost) &&
        cost_details.upstream_inference_prompt_cost > 0 &&
        cost_details.upstream_inference_completions_cost > 0) {
        return cost_details.upstream_inference_prompt_cost + cost_details.upstream_inference_completions_cost;
    }
    return undefined;
}
class OpenRouterUsageProcessor {
    async parse(parseInput) {
        try {
            if (parseInput.isStream) {
                return this.parseStreamResponse(parseInput.responseBody);
            }
            else {
                return this.parseNonStreamResponse(parseInput.responseBody);
            }
        }
        catch (error) {
            return {
                data: null,
                error: `Failed to parse OpenRouter usage: ${error}`,
            };
        }
    }
    parseNonStreamResponse(responseBody) {
        try {
            const parsedResponse = JSON.parse(responseBody);
            const usage = this.extractUsageFromResponse(parsedResponse);
            return {
                data: usage,
                error: null,
            };
        }
        catch (error) {
            return {
                data: null,
                error: `Failed to parse non-stream response: ${error}`,
            };
        }
    }
    parseStreamResponse(responseBody) {
        try {
            const lines = responseBody
                .split("\n")
                .filter((line) => line.trim() !== "" && !line.includes("OPENROUTER PROCESSING"))
                .map((line) => {
                if (line === "data: [DONE]")
                    return null;
                try {
                    return JSON.parse(line.replace("data: ", ""));
                }
                catch (_a) {
                    return null;
                }
            })
                .filter((data) => data !== null);
            const consolidatedData = this.consolidateStreamData(lines);
            const usage = this.extractUsageFromResponse(consolidatedData);
            return {
                data: usage,
                error: null,
            };
        }
        catch (error) {
            return {
                data: null,
                error: `Failed to parse stream response: ${error}`,
            };
        }
    }
    consolidateStreamData(streamData) {
        // Look for the last chunk with usage data
        const lastChunkWithUsage = [...streamData].reverse().find(chunk => chunk === null || chunk === void 0 ? void 0 : chunk.usage);
        if (lastChunkWithUsage === null || lastChunkWithUsage === void 0 ? void 0 : lastChunkWithUsage.usage) {
            return lastChunkWithUsage;
        }
        // If no chunk has usage, consolidate from all chunks
        const consolidated = {
            choices: [],
            usage: null,
        };
        for (const chunk of streamData) {
            if (chunk === null || chunk === void 0 ? void 0 : chunk.usage) {
                consolidated.usage = chunk.usage;
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
    extractUsageFromResponse(parsedResponse) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!parsedResponse || typeof parsedResponse !== "object") {
            return {
                input: 0,
                output: 0,
            };
        }
        const usage = parsedResponse.usage || {};
        // OpenRouter provides direct cost in USD
        const cost = usage.cost;
        const cost_details = usage.cost_details;
        const provider = usage.provider;
        const is_byok = usage.is_byok;
        // OpenRouter still provides token counts for compatibility
        const promptTokens = (_b = (_a = usage.prompt_tokens) !== null && _a !== void 0 ? _a : usage.input_tokens) !== null && _b !== void 0 ? _b : 0;
        const completionTokens = (_d = (_c = usage.completion_tokens) !== null && _c !== void 0 ? _c : usage.output_tokens) !== null && _d !== void 0 ? _d : 0;
        const promptDetails = usage.prompt_tokens_details || {};
        const completionDetails = usage.completion_tokens_details || {};
        const cachedTokens = (_e = promptDetails.cached_tokens) !== null && _e !== void 0 ? _e : 0;
        const promptAudioTokens = (_f = promptDetails.audio_tokens) !== null && _f !== void 0 ? _f : 0;
        const completionAudioTokens = (_g = completionDetails.audio_tokens) !== null && _g !== void 0 ? _g : 0;
        const reasoningTokens = (_h = completionDetails.reasoning_tokens) !== null && _h !== void 0 ? _h : 0;
        // Calculate effective tokens (for logging/analytics, not for cost)
        const effectivePromptTokens = Math.max(0, promptTokens - cachedTokens - promptAudioTokens);
        const effectiveCompletionTokens = Math.max(0, completionTokens - completionAudioTokens - reasoningTokens);
        // Get declared cost and apply passthrough billing markup if needed
        let declaredCost = getOpenRouterDeclaredCost(cost, cost_details);
        const modelUsage = {
            input: effectivePromptTokens,
            output: effectiveCompletionTokens,
            cost: declaredCost,
            // OpenRouterUsage specific info
            cost_details: cost_details,
            provider: provider,
            is_byok: is_byok,
        };
        // Still track cache details for analytics
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
        return modelUsage;
    }
}
exports.OpenRouterUsageProcessor = OpenRouterUsageProcessor;
