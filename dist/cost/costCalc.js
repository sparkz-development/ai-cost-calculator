"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelCost = modelCost;
const index_1 = require("./index");
function modelCost(modelRow) {
    var _a;
    return ((_a = (0, index_1.costOfPrompt)({
        provider: modelRow.provider,
        model: modelRow.model,
        promptTokens: modelRow.sum_prompt_tokens,
        promptCacheWriteTokens: modelRow.prompt_cache_write_tokens,
        promptCacheReadTokens: modelRow.prompt_cache_read_tokens,
        promptAudioTokens: modelRow.prompt_audio_tokens,
        completionTokens: modelRow.sum_completion_tokens,
        completionAudioTokens: modelRow.completion_audio_tokens,
        perCall: modelRow.per_call,
        images: modelRow.per_image,
    })) !== null && _a !== void 0 ? _a : 0);
}
