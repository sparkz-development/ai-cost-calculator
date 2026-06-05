"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapModelUsageToOpenAI = mapModelUsageToOpenAI;
function mapModalityUsageToTokenDetails(usage) {
    var _a, _b, _c;
    return {
        input_tokens: (_a = usage.input) !== null && _a !== void 0 ? _a : 0,
        cached_tokens: (_b = usage.cachedInput) !== null && _b !== void 0 ? _b : 0,
        output_tokens: (_c = usage.output) !== null && _c !== void 0 ? _c : 0,
    };
}
function hasModalityTokens(usage) {
    var _a, _b, _c;
    if (!usage)
        return false;
    return ((_a = usage.input) !== null && _a !== void 0 ? _a : 0) > 0 || ((_b = usage.cachedInput) !== null && _b !== void 0 ? _b : 0) > 0 || ((_c = usage.output) !== null && _c !== void 0 ? _c : 0) > 0;
}
function sumModalityTokens(usage) {
    var _a, _b, _c;
    if (!usage)
        return 0;
    return ((_a = usage.input) !== null && _a !== void 0 ? _a : 0) + ((_b = usage.cachedInput) !== null && _b !== void 0 ? _b : 0) + ((_c = usage.output) !== null && _c !== void 0 ? _c : 0);
}
/**
 * Converts normalized ModelUsage to OpenAI usage format
 * Used by AI Gateway to normalize usage from all providers to OpenAI format
 */
function mapModelUsageToOpenAI(modelUsage) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const promptTokens = modelUsage.input + ((_b = (_a = modelUsage.cacheDetails) === null || _a === void 0 ? void 0 : _a.cachedInput) !== null && _b !== void 0 ? _b : 0);
    const completionTokens = modelUsage.output + ((_c = modelUsage.thinking) !== null && _c !== void 0 ? _c : 0);
    const usage = {
        prompt_tokens: promptTokens,
        completion_tokens: completionTokens,
        total_tokens: promptTokens + completionTokens,
    };
    const audioInputTokens = (_e = (_d = modelUsage.audio) === null || _d === void 0 ? void 0 : _d.input) !== null && _e !== void 0 ? _e : 0;
    const audioOutputTokens = (_g = (_f = modelUsage.audio) === null || _f === void 0 ? void 0 : _f.output) !== null && _g !== void 0 ? _g : 0;
    // Map cache details if present
    if (modelUsage.cacheDetails) {
        const { cachedInput, write5m, write1h } = modelUsage.cacheDetails;
        usage.total_tokens += cachedInput;
        usage.prompt_tokens_details = {
            cached_tokens: cachedInput !== null && cachedInput !== void 0 ? cachedInput : 0,
            audio_tokens: audioInputTokens,
        };
        // Add cache write details if present
        if (write5m || write1h) {
            usage.prompt_tokens_details.cache_write_tokens =
                (write5m !== null && write5m !== void 0 ? write5m : 0) + (write1h !== null && write1h !== void 0 ? write1h : 0);
            usage.prompt_tokens_details.cache_write_details = {
                write_5m_tokens: write5m !== null && write5m !== void 0 ? write5m : 0,
                write_1h_tokens: write1h !== null && write1h !== void 0 ? write1h : 0,
            };
            usage.total_tokens += (write5m !== null && write5m !== void 0 ? write5m : 0) + (write1h !== null && write1h !== void 0 ? write1h : 0);
        }
    }
    else if (audioInputTokens > 0) {
        // Modality tokens without cache details
        usage.prompt_tokens_details = {
            cached_tokens: 0,
            audio_tokens: audioInputTokens,
        };
    }
    // Map completion token details
    const hasCompletionDetails = modelUsage.thinking || audioOutputTokens > 0;
    if (hasCompletionDetails) {
        usage.completion_tokens_details = {
            reasoning_tokens: (_h = modelUsage.thinking) !== null && _h !== void 0 ? _h : 0,
            audio_tokens: audioOutputTokens,
            accepted_prediction_tokens: 0,
            rejected_prediction_tokens: 0,
        };
    }
    usage.modality_tokens = {};
    if (hasModalityTokens(modelUsage.image)) {
        usage.modality_tokens.image = mapModalityUsageToTokenDetails(modelUsage.image);
    }
    if (hasModalityTokens(modelUsage.audio)) {
        usage.modality_tokens.audio = mapModalityUsageToTokenDetails(modelUsage.audio);
    }
    if (hasModalityTokens(modelUsage.video)) {
        usage.modality_tokens.video = mapModalityUsageToTokenDetails(modelUsage.video);
    }
    if (hasModalityTokens(modelUsage.file)) {
        usage.modality_tokens.file = mapModalityUsageToTokenDetails(modelUsage.file);
    }
    usage.total_tokens +=
        sumModalityTokens(modelUsage.image) +
            sumModalityTokens(modelUsage.audio) +
            sumModalityTokens(modelUsage.video) +
            sumModalityTokens(modelUsage.file);
    // Map web search to server_tool_use (Anthropic-style extension to OpenAI format)
    if (modelUsage.web_search && modelUsage.web_search > 0) {
        // Add as an extension to OpenAI format - this allows downstream processors to extract it
        usage.server_tool_use = {
            web_search_requests: modelUsage.web_search,
        };
    }
    // Add cost if present
    if (modelUsage.cost) {
        usage.cost = modelUsage.cost;
    }
    return usage;
}
