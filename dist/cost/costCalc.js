"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COST_PRECISION_MULTIPLIER = void 0;
exports.modelCost = modelCost;
exports.modelCostBreakdownFromRegistry = modelCostBreakdownFromRegistry;
const index_1 = require("./index");
const calculate_cost_1 = require("./models/calculate-cost");
// since costs in clickhouse are multiplied by the multiplier
// divide to get real cost in USD in dollars
exports.COST_PRECISION_MULTIPLIER = 1000000000;
/**
 * LEGACY: Calculate model cost using the old cost registry format
 * This function uses the legacy cost registry in /providers/mappings
 * @deprecated Use modelCostFromRegistry for new implementations
 */
function modelCost(params) {
    var _a;
    return ((_a = (0, index_1.costOfPrompt)({
        provider: params.provider,
        model: params.model,
        promptTokens: params.sum_prompt_tokens,
        promptCacheWriteTokens: params.prompt_cache_write_tokens,
        promptCacheReadTokens: params.prompt_cache_read_tokens,
        promptAudioTokens: params.prompt_audio_tokens,
        completionTokens: params.sum_completion_tokens,
        completionAudioTokens: params.completion_audio_tokens,
        promptCacheWrite5m: params.prompt_cache_write_5m,
        promptCacheWrite1h: params.prompt_cache_write_1h,
        perCall: params.per_call,
        images: params.per_image,
        multiple: params.multiple,
    })) !== null && _a !== void 0 ? _a : 0);
}
function modelCostBreakdownFromRegistry(params) {
    const breakdown = (0, calculate_cost_1.calculateModelCostBreakdown)({
        modelUsage: params.modelUsage,
        providerModelId: params.providerModelId,
        provider: params.provider,
        requestCount: params.requestCount,
    });
    return breakdown;
}
