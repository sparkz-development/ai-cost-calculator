"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
exports.models = {
    "glm-4.6": {
        name: "Zai GLM-4.6",
        author: "zai",
        description: "As the latest iteration in the GLM series, GLM-4.6 achieves comprehensive enhancements across multiple domains, including real-world coding, long-context processing, reasoning, searching, writing, and agentic applications.",
        contextLength: 204800,
        maxOutputTokens: 131072,
        created: "2024-07-18T00:00:00.000Z",
        modality: { inputs: ["text"], outputs: ["text"] },
        tokenizer: "Zai"
    },
    "glm-4.7": {
        name: "Zai GLM-4.7",
        author: "zai",
        description: "GLM-4.7 is Zhipu AI's flagship coding model with major upgrades in advanced coding capabilities, multi-step reasoning, and agentic orchestration. Features Interleaved, Preserved, and Turn-level thinking modes.",
        contextLength: 204800,
        maxOutputTokens: 131072,
        created: "2024-12-22T00:00:00.000Z",
        modality: { inputs: ["text"], outputs: ["text"] },
        tokenizer: "Zai"
    },
};
