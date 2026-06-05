"use strict";
/**
 * Cost calculation utilities for tiered pricing
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateGBCost = calculateGBCost;
exports.calculateRequestCost = calculateRequestCost;
exports.calculateTotalCost = calculateTotalCost;
const tiers_1 = require("./tiers");
/**
 * Calculate cost for GB storage using tiered pricing
 * @param totalGB - Total gigabytes used
 * @returns Cost breakdown with savings compared to flat rate
 */
function calculateGBCost(totalGB) {
    if (totalGB <= 0) {
        return { cost: 0, savings: 0, breakdown: [] };
    }
    let remainingGB = totalGB;
    let totalCost = 0;
    let previousMax = 0;
    const breakdown = [];
    for (const tier of tiers_1.GB_PRICING_TIERS) {
        if (remainingGB <= 0)
            break;
        const tierCapacity = tier.maxGB === Infinity ? remainingGB : tier.maxGB - previousMax;
        const gbInTier = Math.min(remainingGB, tierCapacity);
        const tierCost = gbInTier * tier.ratePerGB;
        if (gbInTier > 0) {
            breakdown.push({
                tier: tier.label,
                units: gbInTier,
                rate: tier.ratePerGB,
                cost: tierCost,
            });
        }
        totalCost += tierCost;
        remainingGB -= gbInTier;
        previousMax = tier.maxGB;
    }
    // Calculate savings vs flat rate (first tier rate for all GB)
    const flatRateCost = totalGB * tiers_1.GB_PRICING_TIERS[0].ratePerGB;
    const savings = Math.max(0, flatRateCost - totalCost);
    return { cost: totalCost, savings, breakdown };
}
/**
 * Calculate cost for requests using tiered pricing
 * @param totalRequests - Total number of requests
 * @returns Cost breakdown with savings compared to flat rate
 */
function calculateRequestCost(totalRequests) {
    if (totalRequests <= 0) {
        return { cost: 0, savings: 0, breakdown: [] };
    }
    let remainingRequests = totalRequests;
    let totalCost = 0;
    let previousMax = 0;
    const breakdown = [];
    for (const tier of tiers_1.REQUEST_PRICING_TIERS) {
        if (remainingRequests <= 0)
            break;
        const tierCapacity = tier.maxLogs === Infinity ? remainingRequests : tier.maxLogs - previousMax;
        const requestsInTier = Math.min(remainingRequests, tierCapacity);
        const tierCost = requestsInTier * tier.ratePerLog;
        if (requestsInTier > 0) {
            breakdown.push({
                tier: tier.label,
                units: requestsInTier,
                rate: tier.ratePerLog,
                cost: tierCost,
            });
        }
        totalCost += tierCost;
        remainingRequests -= requestsInTier;
        previousMax = tier.maxLogs;
    }
    // Calculate savings: compare to paying the second tier rate for all non-free requests
    // (First 10K are free, so compare rest at first paid tier rate)
    const paidRequests = Math.max(0, totalRequests - 10000);
    const flatRateCost = paidRequests * tiers_1.REQUEST_PRICING_TIERS[1].ratePerLog;
    const savings = Math.max(0, flatRateCost - totalCost);
    return { cost: totalCost, savings, breakdown };
}
/**
 * Calculate total estimated cost for both requests and GB
 */
function calculateTotalCost(totalRequests, totalGB) {
    const requestsCost = calculateRequestCost(totalRequests);
    const gbCost = calculateGBCost(totalGB);
    return {
        requestsCost,
        gbCost,
        totalCost: requestsCost.cost + gbCost.cost,
        totalSavings: requestsCost.savings + gbCost.savings,
    };
}
