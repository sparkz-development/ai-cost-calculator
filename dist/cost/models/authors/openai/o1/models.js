"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
exports.models = {
    o1: {
        name: "OpenAI: o1",
        author: "openai",
        description: "Reasoning model with extended thinking capabilities",
        contextLength: 200000,
        maxOutputTokens: 100000,
        created: "2025-01-01T00:00:00.000Z",
        modality: { inputs: ["text"], outputs: ["text"] },
        tokenizer: "GPT",
    },
    "o1-mini": {
        name: "OpenAI: o1-mini",
        author: "openai",
        description: "Efficient reasoning model",
        contextLength: 128000,
        maxOutputTokens: 65536,
        created: "2025-01-01T00:00:00.000Z",
        modality: { inputs: ["text"], outputs: ["text"] },
        tokenizer: "GPT",
    },
};
