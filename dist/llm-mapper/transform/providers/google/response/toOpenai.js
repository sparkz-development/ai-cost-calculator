"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toOpenAI = toOpenAI;
exports.mapGoogleUsage = mapGoogleUsage;
exports.mapGoogleFinishReason = mapGoogleFinishReason;
const mapGoogleUsageToModelUsage_1 = require("../utils/mapGoogleUsageToModelUsage");
const mapModelUsageToOpenAI_1 = require("../../../../../cost/usage/mapModelUsageToOpenAI");
// Google Response Body -> OpenAI Response Body
function toOpenAI(response) {
    var _a, _b, _c, _d;
    const created = Math.floor(Date.now() / 1000);
    const model = (_a = response.modelVersion) !== null && _a !== void 0 ? _a : "google/gemini";
    const choices = mapCandidates((_b = response.candidates) !== null && _b !== void 0 ? _b : []);
    return {
        id: (_d = (_c = response.responseId) !== null && _c !== void 0 ? _c : response.name) !== null && _d !== void 0 ? _d : `chatcmpl-gemini-${created}`,
        object: "chat.completion",
        created,
        model,
        choices,
        usage: response.usageMetadata ? mapGoogleUsage(response.usageMetadata) : {},
        system_fingerprint: model,
    };
}
function mapCandidates(candidates) {
    if (candidates.length === 0) {
        return [
            {
                index: 0,
                message: {
                    role: "assistant",
                    content: null,
                },
                finish_reason: "stop",
                logprobs: null,
            },
        ];
    }
    return candidates.map((candidate, index) => {
        var _a;
        let content = [];
        let tool_calls = [];
        let reasoning;
        let reasoning_details;
        let images;
        if (candidate.content) {
            const extracted = extractContent(candidate.content);
            content = extracted.content;
            tool_calls = extracted.tool_calls;
            reasoning = extracted.reasoning;
            reasoning_details = extracted.reasoning_details;
            images = extracted.images;
        }
        return {
            index: (_a = candidate.index) !== null && _a !== void 0 ? _a : index,
            message: {
                role: "assistant",
                content: content.length > 0 ? content.join("") : null,
                ...(reasoning && { reasoning }),
                ...(reasoning_details && reasoning_details.length > 0 && { reasoning_details }),
                ...(tool_calls.length > 0 && { tool_calls }),
                ...(images && images.length > 0 && { images }),
            },
            finish_reason: mapGoogleFinishReason(candidate.finishReason),
            logprobs: null,
        };
    });
}
/**
 * Extracts content, tool calls, and thinking/reasoning from Google's response parts.
 *
 * Google's thinking model responses contain parts with a `thought` boolean flag:
 * - Parts with `thought: true` contain thinking/reasoning summaries
 * - Parts with `thought: false` or no `thought` field contain the final answer
 * - `thoughtSignature` may appear on ANY part (typically on content parts, not thought parts)
 *   and must be preserved for multi-turn conversations
 */
function extractContent(content) {
    const contents = Array.isArray(content) ? content : [content];
    const textParts = [];
    const thinkingTexts = [];
    const toolCalls = [];
    const imageParts = [];
    let collectedSignature;
    for (const block of contents) {
        const parts = Array.isArray(block === null || block === void 0 ? void 0 : block.parts)
            ? block === null || block === void 0 ? void 0 : block.parts
            : (block === null || block === void 0 ? void 0 : block.parts)
                ? [block.parts]
                : [];
        for (const part of parts) {
            if (!part) {
                continue;
            }
            // Collect thoughtSignature from ANY part (Google puts it on content parts, not thought parts)
            if (part.thoughtSignature) {
                collectedSignature = part.thoughtSignature;
            }
            if (part.functionCall) {
                toolCalls.push(mapToolCall(part.functionCall, toolCalls.length));
            }
            else if (part.inlineData) {
                const mimeType = part.inlineData.mimeType || "image/png";
                const dataUri = `data:${mimeType};base64,${part.inlineData.data}`;
                imageParts.push({
                    type: "image_url",
                    image_url: {
                        url: dataUri,
                    },
                });
            }
            else if (part.text) {
                // Check if this is a thinking part (Google uses thought: true)
                if (part.thought === true) {
                    thinkingTexts.push(part.text);
                }
                else {
                    textParts.push(part.text);
                }
            }
        }
    }
    const result = {
        content: textParts,
        tool_calls: toolCalls,
    };
    // Add reasoning if thinking parts were found
    if (thinkingTexts.length > 0) {
        result.reasoning = thinkingTexts.join("");
        // Preserve thoughtSignature in reasoning_details for multi-turn conversations
        // Google provides a single signature for all thinking content combined
        // Apply the same signature to ALL reasoning_details entries
        result.reasoning_details = thinkingTexts.map((thinking) => ({
            thinking,
            signature: collectedSignature || "",
        }));
    }
    // Add images if image parts were found
    if (imageParts.length > 0) {
        result.images = imageParts;
    }
    return result;
}
function mapToolCall(call, index) {
    var _a, _b;
    return {
        id: `call_${index}`,
        type: "function",
        function: {
            name: (_a = call === null || call === void 0 ? void 0 : call.name) !== null && _a !== void 0 ? _a : `function_${index}`,
            arguments: JSON.stringify((_b = call === null || call === void 0 ? void 0 : call.args) !== null && _b !== void 0 ? _b : {}),
        },
    };
}
function mapGoogleUsage(usage) {
    const modelUsage = (0, mapGoogleUsageToModelUsage_1.mapGoogleUsageToModelUsage)(usage);
    return (0, mapModelUsageToOpenAI_1.mapModelUsageToOpenAI)(modelUsage);
}
function mapGoogleFinishReason(reason) {
    switch (reason) {
        case "STOP":
            return "stop";
        case "MAX_TOKENS":
            return "length";
        case "SAFETY":
        case "RECITATION":
            return "content_filter";
        case "FUNCTION_CALL":
            return "tool_calls";
        default:
            return "stop";
    }
}
