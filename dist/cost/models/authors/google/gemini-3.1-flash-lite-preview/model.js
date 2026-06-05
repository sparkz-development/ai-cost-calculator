"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
exports.model = {
    "gemini-3.1-flash-lite-preview": {
        name: "Google Gemini 3.1 Flash-Lite Preview",
        author: "google",
        description: "Gemini 3.1 Flash-Lite Preview is Google's most cost-efficient model, optimized for high-volume agentic tasks, translation, and simple data processing. Supports thinking/chain-of-thought reasoning, caching, function calling, structured outputs, search grounding, and code execution. Preview model with more restrictive rate limits.",
        contextLength: 1048576,
        maxOutputTokens: 65536,
        created: "2026-03-01T00:00:00",
        modality: { inputs: ["text", "image", "audio", "video"], outputs: ["text"] },
        tokenizer: "Gemini",
    },
};
