"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
exports.models = {
    "claude-sonnet-4-5-20250929": {
        name: "Anthropic: Claude Sonnet 4.5 (20250929)",
        author: "anthropic",
        description: "Best-in-class coding and agentic model with hours-long autonomous operation capabilities. Supports extended thinking, context awareness, parallel tool usage, and vision processing. Refined concise communication style with 64,000 max output tokens. API model name: claude-sonnet-4-5-20250929",
        contextLength: 200000,
        maxOutputTokens: 64000,
        created: "2025-09-29T00:00:00.000Z",
        modality: { inputs: ["text", "image"], outputs: ["text"] },
        tokenizer: "Claude",
    },
};
