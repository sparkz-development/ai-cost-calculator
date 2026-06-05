"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIUsageProcessor = void 0;
class OpenAIUsageProcessor {
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
                error: `Failed to parse OpenAI usage: ${error}`,
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
                .filter((line) => !line.startsWith("event:")) // Filter out SSE event lines (Responses API)
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
        var _a, _b, _c, _d;
        // Check for Responses API format (chunk.response.usage)
        const responsesAPIChunk = [...streamData]
            .reverse()
            .find((chunk) => { var _a; return (_a = chunk === null || chunk === void 0 ? void 0 : chunk.response) === null || _a === void 0 ? void 0 : _a.usage; });
        if ((_a = responsesAPIChunk === null || responsesAPIChunk === void 0 ? void 0 : responsesAPIChunk.response) === null || _a === void 0 ? void 0 : _a.usage) {
            return {
                usage: responsesAPIChunk.response.usage,
                model: responsesAPIChunk.response.model,
                id: responsesAPIChunk.response.id,
            };
        }
        // Check for Chat Completions format (chunk.usage)
        const chatCompletionsChunk = [...streamData]
            .reverse()
            .find((chunk) => chunk === null || chunk === void 0 ? void 0 : chunk.usage);
        if (chatCompletionsChunk === null || chatCompletionsChunk === void 0 ? void 0 : chatCompletionsChunk.usage) {
            return chatCompletionsChunk;
        }
        const consolidated = {
            choices: [],
            usage: null,
        };
        for (const chunk of streamData) {
            // Check both formats
            if (chunk === null || chunk === void 0 ? void 0 : chunk.usage) {
                consolidated.usage = chunk.usage;
            }
            else if ((_b = chunk === null || chunk === void 0 ? void 0 : chunk.response) === null || _b === void 0 ? void 0 : _b.usage) {
                consolidated.usage = chunk.response.usage;
            }
            if (chunk === null || chunk === void 0 ? void 0 : chunk.id) {
                consolidated.id = chunk.id;
            }
            else if ((_c = chunk === null || chunk === void 0 ? void 0 : chunk.response) === null || _c === void 0 ? void 0 : _c.id) {
                consolidated.id = chunk.response.id;
            }
            if (chunk === null || chunk === void 0 ? void 0 : chunk.model) {
                consolidated.model = chunk.model;
            }
            else if ((_d = chunk === null || chunk === void 0 ? void 0 : chunk.response) === null || _d === void 0 ? void 0 : _d.model) {
                consolidated.model = chunk.response.model;
            }
        }
        return consolidated;
    }
    extractUsageFromResponse(parsedResponse) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        if (!parsedResponse || typeof parsedResponse !== "object") {
            return {
                input: 0,
                output: 0,
            };
        }
        const usage = parsedResponse.usage || {};
        // This usage processor is applied to all AI Gateway requests when logging tokens from Jawn
        // this means the processor must properly handle additional AI Gateway only info
        // OpenAIUsage from "../../llm-mapper/transform/types/common";
        // ResponsesUsage from "../../llm-mapper/transform/types/responses";
        const promptTokens = (_b = (_a = usage.prompt_tokens) !== null && _a !== void 0 ? _a : usage.input_tokens) !== null && _b !== void 0 ? _b : 0;
        const completionTokens = (_d = (_c = usage.completion_tokens) !== null && _c !== void 0 ? _c : usage.output_tokens) !== null && _d !== void 0 ? _d : 0;
        const promptDetails = usage.prompt_tokens_details || usage.input_tokens_details || {};
        const completionDetails = usage.completion_tokens_details || usage.output_tokens_details || {};
        const cachedTokens = (_e = promptDetails.cached_tokens) !== null && _e !== void 0 ? _e : 0;
        const promptAudioTokens = (_f = promptDetails.audio_tokens) !== null && _f !== void 0 ? _f : 0;
        const completionAudioTokens = (_g = completionDetails.audio_tokens) !== null && _g !== void 0 ? _g : 0;
        const reasoningTokens = (_h = completionDetails.reasoning_tokens) !== null && _h !== void 0 ? _h : 0;
        // AI Gateway fields - cache write tokens
        // First try to get the detailed breakdown (5m vs 1h), then fall back to total cache_write_tokens
        const cacheWriteDetails = promptDetails.cache_write_details;
        const cacheWriteTokensTotal = (_j = promptDetails.cache_write_tokens) !== null && _j !== void 0 ? _j : 0;
        // If we have detailed breakdown, use it; otherwise treat all cache writes as 5m (the common case)
        const cacheWrite5mTokens = (_k = cacheWriteDetails === null || cacheWriteDetails === void 0 ? void 0 : cacheWriteDetails.write_5m_tokens) !== null && _k !== void 0 ? _k : cacheWriteTokensTotal;
        const cacheWrite1hTokens = (_l = cacheWriteDetails === null || cacheWriteDetails === void 0 ? void 0 : cacheWriteDetails.write_1h_tokens) !== null && _l !== void 0 ? _l : 0;
        // Guard: if cached > prompt_tokens, data is already non-cached (Anthropic convention)
        const effectivePromptTokens = cachedTokens > promptTokens
            ? Math.max(0, promptTokens - promptAudioTokens)
            : Math.max(0, promptTokens - cachedTokens - promptAudioTokens);
        const effectiveCompletionTokens = Math.max(0, completionTokens - completionAudioTokens - reasoningTokens);
        const modelUsage = {
            input: effectivePromptTokens,
            output: effectiveCompletionTokens,
        };
        if (cachedTokens > 0 || cacheWrite5mTokens > 0 || cacheWrite1hTokens > 0) {
            modelUsage.cacheDetails = {
                cachedInput: cachedTokens,
                write5m: cacheWrite5mTokens !== null && cacheWrite5mTokens !== void 0 ? cacheWrite5mTokens : 0,
                write1h: cacheWrite1hTokens !== null && cacheWrite1hTokens !== void 0 ? cacheWrite1hTokens : 0,
            };
        }
        if (reasoningTokens > 0) {
            modelUsage.thinking = reasoningTokens;
        }
        // Handle audio tokens - use modality_tokens if available, otherwise fall back to legacy fields
        const modalityTokens = usage.modality_tokens;
        if (modalityTokens === null || modalityTokens === void 0 ? void 0 : modalityTokens.audio) {
            // New structure with detailed breakdown
            modelUsage.audio = {
                input: (_m = modalityTokens.audio.input_tokens) !== null && _m !== void 0 ? _m : 0,
                cachedInput: (_o = modalityTokens.audio.cached_tokens) !== null && _o !== void 0 ? _o : 0,
                output: (_p = modalityTokens.audio.output_tokens) !== null && _p !== void 0 ? _p : 0,
            };
        }
        else if (promptAudioTokens > 0 || completionAudioTokens > 0) {
            // Backwards compatibility for old fields that only define audio input/output in prompt/completion details.
            modelUsage.audio = {
                input: promptAudioTokens,
                output: completionAudioTokens,
            };
        }
        // Handle image tokens from modality_tokens
        if (modalityTokens === null || modalityTokens === void 0 ? void 0 : modalityTokens.image) {
            modelUsage.image = {
                input: (_q = modalityTokens.image.input_tokens) !== null && _q !== void 0 ? _q : 0,
                cachedInput: (_r = modalityTokens.image.cached_tokens) !== null && _r !== void 0 ? _r : 0,
                output: (_s = modalityTokens.image.output_tokens) !== null && _s !== void 0 ? _s : 0,
            };
        }
        // Handle video tokens from modality_tokens
        if (modalityTokens === null || modalityTokens === void 0 ? void 0 : modalityTokens.video) {
            modelUsage.video = {
                input: (_t = modalityTokens.video.input_tokens) !== null && _t !== void 0 ? _t : 0,
                cachedInput: (_u = modalityTokens.video.cached_tokens) !== null && _u !== void 0 ? _u : 0,
                output: (_v = modalityTokens.video.output_tokens) !== null && _v !== void 0 ? _v : 0,
            };
        }
        // Handle file tokens from modality_tokens
        if (modalityTokens === null || modalityTokens === void 0 ? void 0 : modalityTokens.file) {
            modelUsage.file = {
                input: (_w = modalityTokens.file.input_tokens) !== null && _w !== void 0 ? _w : 0,
                cachedInput: (_x = modalityTokens.file.cached_tokens) !== null && _x !== void 0 ? _x : 0,
                output: (_y = modalityTokens.file.output_tokens) !== null && _y !== void 0 ? _y : 0,
            };
        }
        const rejectedTokens = (_z = completionDetails.rejected_prediction_tokens) !== null && _z !== void 0 ? _z : 0;
        const acceptedTokens = (_0 = completionDetails.accepted_prediction_tokens) !== null && _0 !== void 0 ? _0 : 0;
        if (rejectedTokens > 0 || acceptedTokens > 0) {
            modelUsage.output = effectiveCompletionTokens + acceptedTokens;
        }
        // Add web search usage if present
        for (const output_item of parsedResponse.output || []) {
            if (output_item.type === "web_search_call") {
                modelUsage.web_search = (modelUsage.web_search || 0) + 1;
            }
        }
        if (usage.cost) {
            modelUsage.cost = usage.cost;
        }
        return modelUsage;
    }
}
exports.OpenAIUsageProcessor = OpenAIUsageProcessor;
