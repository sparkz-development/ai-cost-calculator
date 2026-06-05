/**
 * Cost calculation utilities for tiered pricing
 */
export interface TierBreakdown {
    tier: string;
    units: number;
    rate: number;
    cost: number;
}
export interface CostResult {
    cost: number;
    savings: number;
    breakdown: TierBreakdown[];
}
/**
 * Calculate cost for GB storage using tiered pricing
 * @param totalGB - Total gigabytes used
 * @returns Cost breakdown with savings compared to flat rate
 */
export declare function calculateGBCost(totalGB: number): CostResult;
/**
 * Calculate cost for requests using tiered pricing
 * @param totalRequests - Total number of requests
 * @returns Cost breakdown with savings compared to flat rate
 */
export declare function calculateRequestCost(totalRequests: number): CostResult;
/**
 * Calculate total estimated cost for both requests and GB
 */
export declare function calculateTotalCost(totalRequests: number, totalGB: number): {
    requestsCost: CostResult;
    gbCost: CostResult;
    totalCost: number;
    totalSavings: number;
};
