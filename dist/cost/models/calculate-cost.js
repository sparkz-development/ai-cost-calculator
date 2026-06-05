"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateModelCostBreakdown = calculateModelCostBreakdown;
const registry_1 = require("./registry");
function getValueAtPath(obj, path) {
    let curr = obj;
    for (const key of path) {
        if (curr == null)
            return undefined;
        curr = curr[key];
    }
    return curr;
}
function fillFromPrevious(allObjects, index) {
    const result = structuredClone(allObjects[index]); // deep copy
    function fillRecursive(target, i, path) {
        // Collect all keys that exist in any previous tier at this path
        const allKeysSet = new Set(Object.keys(target));
        for (let j = i - 1; j >= 0; j--) {
            const prevValue = getValueAtPath(allObjects[j], path);
            if (prevValue && typeof prevValue === "object" && !Array.isArray(prevValue)) {
                Object.keys(prevValue).forEach(k => allKeysSet.add(k));
            }
        }
        const allKeys = Array.from(allKeysSet);
        for (const key of allKeys) {
            const value = target[key];
            // If the field is an object, recurse
            if (value && typeof value === "object" && !Array.isArray(value)) {
                fillRecursive(value, i, path.concat(key));
                continue;
            }
            // Skip already defined values
            if (value !== undefined)
                continue;
            // Field is undefined → search backwards
            for (let j = i - 1; j >= 0; j--) {
                // Walk to the same path to get candidate value
                const candidate = getValueAtPath(allObjects[j], path.concat(key));
                if (candidate !== undefined) {
                    target[key] = candidate;
                    break;
                }
            }
        }
    }
    fillRecursive(result, index, []);
    return result;
}
/**
 * Preprocesses pricing tiers by filling missing fields from previous tiers.
 * This should be called once upfront to avoid repeated filling on every lookup.
 */
function preprocessPricingTiers(sortedPricing) {
    return sortedPricing.map((_, index) => fillFromPrevious(sortedPricing, index));
}
// given a preprocessed array of pricing tiers (thresholds ascending) and a value
// return the pricing tier that matches the highest threshold the value meets
function getPricingTier(preprocessedPricing, value) {
    let matchedTierIndex = 0;
    // Find the highest threshold that the value meets
    for (let i = 0; i < preprocessedPricing.length; i++) {
        if (value >= preprocessedPricing[i].threshold) {
            matchedTierIndex = i;
            // Don't break - continue to find the highest matching threshold
        }
    }
    return preprocessedPricing[matchedTierIndex];
}
function getThresholdValueFunction(provider) {
    switch (provider) {
        case "vertex":
            return (usage, field) => {
                var _a, _b;
                switch (field) {
                    case "inputCost":
                    case "outputCost":
                        return usage.input;
                    case "cachedInputCost":
                        return (_b = (_a = usage.cacheDetails) === null || _a === void 0 ? void 0 : _a.cachedInput) !== null && _b !== void 0 ? _b : 0;
                    default:
                        return 0;
                }
            };
        case "google-ai-studio":
            return (usage, field) => {
                var _a, _b;
                switch (field) {
                    case "inputCost":
                    case "outputCost":
                    case "cachedInputCost":
                        // total prompt length
                        return usage.input + ((_b = (_a = usage.cacheDetails) === null || _a === void 0 ? void 0 : _a.cachedInput) !== null && _b !== void 0 ? _b : 0);
                    default:
                        return 0;
                }
            };
        case "anthropic":
            return (usage, field) => {
                var _a, _b, _c, _d, _e, _f;
                switch (field) {
                    case "inputCost":
                    case "outputCost":
                        return usage.input +
                            ((_b = (_a = usage.cacheDetails) === null || _a === void 0 ? void 0 : _a.cachedInput) !== null && _b !== void 0 ? _b : 0) +
                            ((_d = (_c = usage.cacheDetails) === null || _c === void 0 ? void 0 : _c.write5m) !== null && _d !== void 0 ? _d : 0) +
                            ((_f = (_e = usage.cacheDetails) === null || _e === void 0 ? void 0 : _e.write1h) !== null && _f !== void 0 ? _f : 0);
                    default:
                        return 0;
                }
            };
        case "xai":
            return (usage, field) => {
                var _a, _b;
                switch (field) {
                    case "inputCost":
                    case "outputCost":
                    case "cachedInputCost":
                        return usage.input + ((_b = (_a = usage.cacheDetails) === null || _a === void 0 ? void 0 : _a.cachedInput) !== null && _b !== void 0 ? _b : 0);
                    default:
                        return 0;
                }
            };
        default:
            return () => 0;
    }
}
function calculateModelCostBreakdown(params) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { modelUsage, providerModelId, provider, requestCount = 1 } = params;
    const configResult = registry_1.registry.getModelProviderConfigByProviderModelId(providerModelId, provider);
    if (configResult.error || !configResult.data)
        return null;
    const config = configResult.data;
    // Get a function that, given usage and the cost type we are calculating, return the value we compare against threshold.
    // e.g Anthropic's inputCost and output cost is higher if PROMPT >= X tokens
    // e.g Vertex's inputCost is higher if INPUT >= X tokens, but cachedInputCost is higher if CACHED_INPUT >= X tokens
    // getThresholdValue is a function that will return the value to compare to X
    const getThresholdValue = getThresholdValueFunction(provider);
    const sortedPricing = [...config.pricing].sort((a, b) => a.threshold - b.threshold);
    // Preprocess pricing tiers once upfront to fill missing fields from previous tiers
    const preprocessedPricing = preprocessPricingTiers(sortedPricing);
    const basePricing = preprocessedPricing[0];
    const breakdown = {
        inputCost: 0,
        outputCost: 0,
        cachedInputCost: 0,
        cacheWrite5mCost: 0,
        cacheWrite1hCost: 0,
        thinkingCost: 0,
        webSearchCost: 0,
        requestCost: 0,
        totalCost: 0,
    };
    const inputPricing = getPricingTier(preprocessedPricing, getThresholdValue(modelUsage, "inputCost"));
    breakdown.inputCost = modelUsage.input * inputPricing.input;
    if (modelUsage.cacheDetails) {
        if (modelUsage.cacheDetails.cachedInput > 0) {
            const cachedInputPricing = getPricingTier(preprocessedPricing, getThresholdValue(modelUsage, "cachedInputCost"));
            const cachedMultiplier = (_b = (_a = cachedInputPricing.cacheMultipliers) === null || _a === void 0 ? void 0 : _a.cachedInput) !== null && _b !== void 0 ? _b : 1.0;
            breakdown.cachedInputCost =
                modelUsage.cacheDetails.cachedInput * cachedInputPricing.input * cachedMultiplier;
        }
        if (modelUsage.cacheDetails.write5m) {
            const write5mMultiplier = (_d = (_c = basePricing.cacheMultipliers) === null || _c === void 0 ? void 0 : _c.write5m) !== null && _d !== void 0 ? _d : 1.0;
            breakdown.cacheWrite5mCost =
                modelUsage.cacheDetails.write5m * basePricing.input * write5mMultiplier;
        }
        if (modelUsage.cacheDetails.write1h) {
            const write1hMultiplier = (_f = (_e = basePricing.cacheMultipliers) === null || _e === void 0 ? void 0 : _e.write1h) !== null && _f !== void 0 ? _f : 1.0;
            breakdown.cacheWrite1hCost =
                modelUsage.cacheDetails.write1h * basePricing.input * write1hMultiplier;
        }
    }
    const outputPricing = getPricingTier(preprocessedPricing, getThresholdValue(modelUsage, "outputCost"));
    breakdown.outputCost = modelUsage.output * outputPricing.output;
    if (modelUsage.thinking) {
        const thinkingRate = (_g = basePricing.thinking) !== null && _g !== void 0 ? _g : basePricing.output;
        breakdown.thinkingCost = modelUsage.thinking * thinkingRate;
    }
    // Calculate per-modality costs
    const modalities = ['image', 'audio', 'video', 'file'];
    for (const modality of modalities) {
        const modalityUsage = modelUsage[modality];
        const modalityPricing = basePricing[modality];
        if (modalityUsage && hasModalityTokens(modalityUsage)) {
            breakdown[modality] = calculateModalityCost(modalityUsage, modalityPricing, basePricing);
        }
    }
    if (modelUsage.web_search && basePricing.web_search) {
        breakdown.webSearchCost = modelUsage.web_search * basePricing.web_search;
    }
    if (requestCount > 0 && basePricing.request) {
        breakdown.requestCost = requestCount * basePricing.request;
    }
    if (modelUsage.cost) {
        breakdown.totalCost = modelUsage.cost;
    }
    else {
        // Sum up all costs including modality costs
        const modalityTotalCost = modalities.reduce((sum, modality) => {
            const modalityCosts = breakdown[modality];
            if (modalityCosts) {
                return sum + modalityCosts.inputCost + modalityCosts.cachedInputCost + modalityCosts.outputCost;
            }
            return sum;
        }, 0);
        breakdown.totalCost =
            breakdown.inputCost +
                breakdown.outputCost +
                breakdown.cachedInputCost +
                breakdown.cacheWrite5mCost +
                breakdown.cacheWrite1hCost +
                breakdown.thinkingCost +
                modalityTotalCost +
                breakdown.webSearchCost +
                breakdown.requestCost;
    }
    return breakdown;
}
function hasModalityTokens(usage) {
    var _a, _b, _c;
    return ((_a = usage.input) !== null && _a !== void 0 ? _a : 0) > 0 || ((_b = usage.cachedInput) !== null && _b !== void 0 ? _b : 0) > 0 || ((_c = usage.output) !== null && _c !== void 0 ? _c : 0) > 0;
}
/**
 * Calculate costs for a single modality (image, audio, video, file).
 * Uses fallback logic when specific modality pricing is not defined.
 */
function calculateModalityCost(modalityUsage, modalityPricing, basePricing) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    // Input rate fallback: modality.input -> text input
    const inputRate = (_a = modalityPricing === null || modalityPricing === void 0 ? void 0 : modalityPricing.input) !== null && _a !== void 0 ? _a : basePricing.input;
    // Cached multiplier fallback: modality.cachedInputMultiplier -> text cacheMultipliers.cachedInput -> 1.0
    const cachedMultiplier = (_d = (_b = modalityPricing === null || modalityPricing === void 0 ? void 0 : modalityPricing.cachedInputMultiplier) !== null && _b !== void 0 ? _b : (_c = basePricing.cacheMultipliers) === null || _c === void 0 ? void 0 : _c.cachedInput) !== null && _d !== void 0 ? _d : 1.0;
    // Output rate fallback: modality.output -> text output
    const outputRate = (_e = modalityPricing === null || modalityPricing === void 0 ? void 0 : modalityPricing.output) !== null && _e !== void 0 ? _e : basePricing.output;
    return {
        inputCost: ((_f = modalityUsage.input) !== null && _f !== void 0 ? _f : 0) * inputRate,
        cachedInputCost: ((_g = modalityUsage.cachedInput) !== null && _g !== void 0 ? _g : 0) * inputRate * cachedMultiplier,
        outputCost: ((_h = modalityUsage.output) !== null && _h !== void 0 ? _h : 0) * outputRate,
    };
}
