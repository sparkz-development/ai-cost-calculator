"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapGoogleUsageToModelUsage = mapGoogleUsageToModelUsage;
function aggregateByModality(details) {
    var _a, _b;
    const map = new Map();
    for (const detail of details !== null && details !== void 0 ? details : []) {
        const current = (_a = map.get(detail.modality)) !== null && _a !== void 0 ? _a : 0;
        map.set(detail.modality, current + ((_b = detail.tokenCount) !== null && _b !== void 0 ? _b : 0));
    }
    return map;
}
function getTextTokens(map) {
    var _a, _b;
    return (((_a = map.get("TEXT")) !== null && _a !== void 0 ? _a : 0) +
        ((_b = map.get("MODALITY_UNSPECIFIED")) !== null && _b !== void 0 ? _b : 0));
}
function buildModalityUsage(promptByModality, cacheByModality, outputByModality, modality) {
    var _a, _b, _c;
    const prompt = (_a = promptByModality.get(modality)) !== null && _a !== void 0 ? _a : 0;
    const cached = (_b = cacheByModality.get(modality)) !== null && _b !== void 0 ? _b : 0;
    const output = (_c = outputByModality.get(modality)) !== null && _c !== void 0 ? _c : 0;
    if (prompt === 0 && cached === 0 && output === 0) {
        return undefined;
    }
    return {
        input: Math.max(0, prompt - cached),
        cachedInput: cached,
        output,
    };
}
/**
 * Converts GoogleUsageMetadata to normalized ModelUsage.
 *
 * The calculation is straightforward per modality:
 * - Input = promptTokensDetails[modality] - cacheTokensDetails[modality]
 * - Cached Input = cacheTokensDetails[modality]
 * - Output = candidatesTokensDetails[modality]
 * - Thinking = thoughtsTokenCount
 *
 * Falls back to top-level counts if no modality details are available.
 */
function mapGoogleUsageToModelUsage(usage) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    // Collect all token details, handling both singular and plural key variants
    const promptDetails = (_b = (_a = usage.promptTokenDetails) !== null && _a !== void 0 ? _a : usage.promptTokensDetails) !== null && _b !== void 0 ? _b : [];
    const toolUsePromptDetails = (_c = usage.toolUsePromptTokensDetails) !== null && _c !== void 0 ? _c : [];
    const cacheDetails = (_d = usage.cacheTokenDetails) !== null && _d !== void 0 ? _d : [];
    const outputDetails = (_e = usage.candidatesTokensDetails) !== null && _e !== void 0 ? _e : [];
    // Aggregate tokens by modality
    const promptByModality = aggregateByModality([
        ...promptDetails,
        ...toolUsePromptDetails,
    ]);
    const cacheByModality = aggregateByModality(cacheDetails);
    const outputByModality = aggregateByModality(outputDetails);
    // Check if we have modality details or should fall back to top-level counts
    const hasPromptDetails = promptDetails.length > 0 || toolUsePromptDetails.length > 0;
    const hasOutputDetails = outputDetails.length > 0;
    // Text tokens from modality breakdown
    const textPrompt = getTextTokens(promptByModality);
    const textCached = getTextTokens(cacheByModality);
    const textOutput = getTextTokens(outputByModality);
    // Fall back to top-level counts when no modality details exist
    const toolUsePromptTokens = (_f = usage.toolUsePromptTokenCount) !== null && _f !== void 0 ? _f : 0;
    const promptTokens = hasPromptDetails
        ? textPrompt
        : ((_g = usage.promptTokenCount) !== null && _g !== void 0 ? _g : 0) + toolUsePromptTokens;
    const outputTokens = hasOutputDetails ? textOutput : ((_h = usage.candidatesTokenCount) !== null && _h !== void 0 ? _h : 0);
    const cachedTokens = textCached > 0 ? textCached : ((_j = usage.cachedContentTokenCount) !== null && _j !== void 0 ? _j : 0);
    // Build ModelUsage with text as base input/output
    const modelUsage = {
        input: Math.max(0, promptTokens - cachedTokens),
        output: outputTokens,
    };
    // Cache details for text
    if (cachedTokens > 0) {
        modelUsage.cacheDetails = { cachedInput: cachedTokens };
    }
    // Thinking tokens
    if (usage.thoughtsTokenCount && usage.thoughtsTokenCount > 0) {
        modelUsage.thinking = usage.thoughtsTokenCount;
    }
    // Per-modality breakdown
    const audio = buildModalityUsage(promptByModality, cacheByModality, outputByModality, "AUDIO");
    const image = buildModalityUsage(promptByModality, cacheByModality, outputByModality, "IMAGE");
    const video = buildModalityUsage(promptByModality, cacheByModality, outputByModality, "VIDEO");
    // DOCUMENT in Google maps to "file" in our ModelUsage
    const file = buildModalityUsage(promptByModality, cacheByModality, outputByModality, "DOCUMENT");
    if (audio)
        modelUsage.audio = audio;
    if (image)
        modelUsage.image = image;
    if (video)
        modelUsage.video = video;
    if (file)
        modelUsage.file = file;
    return modelUsage;
}
