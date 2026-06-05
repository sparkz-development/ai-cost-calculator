/**
 * Pricing tier definitions for Helicone's usage-based billing
 * Used by: web/, bifrost/, and billing calculations
 */
export interface GBPricingTier {
    maxGB: number;
    ratePerGB: number;
    label: string;
}
export interface RequestPricingTier {
    maxLogs: number;
    ratePerLog: number;
    label: string;
}
export declare const GB_PRICING_TIERS: GBPricingTier[];
export declare const REQUEST_PRICING_TIERS: RequestPricingTier[];
export declare const BYTE_PRICING: {
    ratePerGB: number;
    freeGB: number;
};
