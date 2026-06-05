"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
exports.models = {
    "claude-4.6-sonnet": {
        name: "Anthropic: Claude Sonnet 4.6",
        author: "anthropic",
        description: "Claude Sonnet 4.6 is Anthropic's most capable Sonnet model, released February 2026. Features near-Opus-level intelligence at Sonnet pricing, with a 1M context window, improved coding, computer use, and agentic capabilities. API model name: claude-sonnet-4-6",
        contextLength: 1000000,
        maxOutputTokens: 64000,
        created: "2026-02-17T00:00:00.000Z",
        modality: { inputs: ["text", "image"], outputs: ["text"] },
        tokenizer: "Claude",
    },
};
