"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleToOpenAIStreamConverter = void 0;
const toOpenai_1 = require("../response/toOpenai");
class GoogleToOpenAIStreamConverter {
    constructor() {
        this.model = "google/gemini";
        this.sentInitial = false;
        this.toolCallIndex = 0;
        this.thinkingBlocks = [];
        // Google puts thoughtSignature on content parts, not thought parts
        // so we collect it separately when we see it
        this.collectedSignature = "";
        this.created = Math.floor(Date.now() / 1000);
        this.messageId = `chatcmpl-gemini-${this.created}`;
    }
    processLines(raw, onChunk) {
        const lines = raw.split("\n");
        for (const line of lines) {
            if (!line.startsWith("data: ")) {
                continue;
            }
            const jsonStr = line.slice(6).trim();
            if (!jsonStr || jsonStr === "[DONE]") {
                continue;
            }
            try {
                const event = JSON.parse(jsonStr);
                const chunks = this.convert(event);
                for (const chunk of chunks) {
                    onChunk(chunk);
                }
            }
            catch (error) {
                console.error("Failed to parse Gemini SSE data:", error);
            }
        }
    }
    convert(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const chunks = [];
        const candidate = (_a = event.candidates) === null || _a === void 0 ? void 0 : _a[0];
        if (!candidate) {
            return chunks;
        }
        if (event.modelVersion) {
            this.model = event.modelVersion;
        }
        if (!this.sentInitial) {
            this.sentInitial = true;
            chunks.push(this.createChunk({
                choices: [
                    {
                        index: (_b = candidate.index) !== null && _b !== void 0 ? _b : 0,
                        delta: { role: "assistant" },
                        logprobs: null,
                        finish_reason: null,
                    },
                ],
            }));
        }
        const parts = Array.isArray(candidate.content)
            ? candidate.content
            : candidate.content
                ? [candidate.content]
                : [];
        for (const block of parts) {
            const blockParts = Array.isArray(block === null || block === void 0 ? void 0 : block.parts)
                ? block === null || block === void 0 ? void 0 : block.parts
                : (block === null || block === void 0 ? void 0 : block.parts)
                    ? [block.parts]
                    : [];
            for (const part of blockParts) {
                if (!part) {
                    continue;
                }
                // IMPORTANT: Collect thoughtSignature from ANY part FIRST, before other checks
                // Google puts thoughtSignature on the final chunk, often with empty text ("")
                if (part.thoughtSignature) {
                    this.collectedSignature = part.thoughtSignature;
                }
                if (part.functionCall) {
                    // Handle function calls (checked first since they may also have text)
                    chunks.push(this.createChunk({
                        choices: [
                            {
                                index: (_c = candidate.index) !== null && _c !== void 0 ? _c : 0,
                                delta: {
                                    tool_calls: [
                                        {
                                            index: this.toolCallIndex,
                                            id: `call_${this.toolCallIndex}`,
                                            type: "function",
                                            function: {
                                                name: part.functionCall.name,
                                                arguments: JSON.stringify((_d = part.functionCall.args) !== null && _d !== void 0 ? _d : {}),
                                            },
                                        },
                                    ],
                                },
                                logprobs: null,
                                finish_reason: null,
                            },
                        ],
                    }));
                    this.toolCallIndex += 1;
                }
                else if (part.inlineData) {
                    // Handle image output from Google's image generation models
                    const mimeType = part.inlineData.mimeType || "image/png";
                    const dataUri = `data:${mimeType};base64,${part.inlineData.data}`;
                    chunks.push(this.createChunk({
                        choices: [
                            {
                                index: (_e = candidate.index) !== null && _e !== void 0 ? _e : 0,
                                delta: {
                                    images: [
                                        {
                                            type: "image_url",
                                            image_url: {
                                                url: dataUri,
                                            },
                                        },
                                    ],
                                },
                                logprobs: null,
                                finish_reason: null,
                            },
                        ],
                    }));
                }
                else if (part.text) {
                    // Check if this is a thinking part (Google uses thought: true)
                    if (part.thought === true) {
                        // Track this thinking block for later emission with signature
                        this.thinkingBlocks.push({ text: part.text });
                        // Emit thinking content as reasoning in the delta
                        chunks.push(this.createChunk({
                            choices: [
                                {
                                    index: (_f = candidate.index) !== null && _f !== void 0 ? _f : 0,
                                    delta: { reasoning: part.text },
                                    logprobs: null,
                                    finish_reason: null,
                                },
                            ],
                        }));
                    }
                    else {
                        // Regular content
                        chunks.push(this.createChunk({
                            choices: [
                                {
                                    index: (_g = candidate.index) !== null && _g !== void 0 ? _g : 0,
                                    delta: { content: part.text },
                                    logprobs: null,
                                    finish_reason: null,
                                },
                            ],
                        }));
                    }
                }
            }
        }
        if (candidate.finishReason) {
            // Collect all thinking blocks for reasoning_details
            // Google provides a single signature for all thinking content combined
            // Apply the same signature to ALL reasoning_details entries
            const reasoning_details = this.thinkingBlocks
                .filter((state) => state.text)
                .map((state) => ({
                thinking: state.text,
                signature: this.collectedSignature,
            }));
            chunks.push(this.createChunk({
                choices: [
                    {
                        index: (_h = candidate.index) !== null && _h !== void 0 ? _h : 0,
                        delta: {
                            ...(reasoning_details.length > 0 && { reasoning_details }),
                        },
                        logprobs: null,
                        finish_reason: (0, toOpenai_1.mapGoogleFinishReason)(candidate.finishReason),
                    },
                ],
                ...(event.usageMetadata
                    ? { usage: (0, toOpenai_1.mapGoogleUsage)(event.usageMetadata) }
                    : {}),
            }));
        }
        return chunks;
    }
    createChunk(overrides) {
        return {
            id: this.messageId,
            object: "chat.completion.chunk",
            created: this.created,
            model: this.model,
            system_fingerprint: this.model,
            choices: [],
            ...overrides,
        };
    }
}
exports.GoogleToOpenAIStreamConverter = GoogleToOpenAIStreamConverter;
