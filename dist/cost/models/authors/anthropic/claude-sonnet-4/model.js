"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
exports.models = {
    "claude-sonnet-4": {
        name: "Anthropic: Claude Sonnet 4",
        author: "anthropic",
        description: "High-performance model with high intelligence and balanced performance. Supports extended thinking, multilingual capabilities, and vision processing. Fast latency with 64,000 max output tokens. API model name: claude-sonnet-4-20250514",
        contextLength: 200000,
        maxOutputTokens: 64000,
        created: "2025-05-14T00:00:00.000Z",
        modality: { inputs: ["text", "image"], outputs: ["text"] },
        tokenizer: "Claude",
    },
};
