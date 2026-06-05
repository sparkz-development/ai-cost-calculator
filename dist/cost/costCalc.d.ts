import type { ModelUsage } from "./usage/types";
import type { ModelProviderName } from "./models/providers";
import { CostBreakdown } from "./models/calculate-cost";
export declare const COST_PRECISION_MULTIPLIER = 1000000000;
/**
 * LEGACY: Calculate model cost using the old cost registry format
 * This function uses the legacy cost registry in /providers/mappings
 * @deprecated Use modelCostFromRegistry for new implementations
 */
export declare function modelCost(params: {
    provider: string;
    model: string;
    sum_prompt_tokens: number;
    prompt_cache_write_tokens: number;
    prompt_cache_read_tokens: number;
    prompt_audio_tokens: number;
    sum_completion_tokens: number;
    completion_audio_tokens: number;
    prompt_cache_write_5m: number;
    prompt_cache_write_1h: number;
    per_call?: number;
    per_image?: number;
    multiple?: number;
}): number;
export declare function modelCostBreakdownFromRegistry(params: {
    modelUsage: ModelUsage;
    provider: ModelProviderName;
    providerModelId: string;
    requestCount?: number;
}): CostBreakdown | null;
