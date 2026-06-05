import type { ModelUsage } from "../usage/types";
import type { ModelProviderName } from "./providers";
export interface ModalityCostBreakdown {
    inputCost: number;
    cachedInputCost: number;
    outputCost: number;
}
export interface CostBreakdown {
    inputCost: number;
    outputCost: number;
    cachedInputCost: number;
    cacheWrite5mCost: number;
    cacheWrite1hCost: number;
    thinkingCost: number;
    image?: ModalityCostBreakdown;
    audio?: ModalityCostBreakdown;
    video?: ModalityCostBreakdown;
    file?: ModalityCostBreakdown;
    webSearchCost: number;
    requestCost: number;
    totalCost: number;
}
export type CostBreakdownField = keyof CostBreakdown;
export declare function calculateModelCostBreakdown(params: {
    modelUsage: ModelUsage;
    providerModelId: string;
    provider: ModelProviderName;
    requestCount?: number;
}): CostBreakdown | null;
