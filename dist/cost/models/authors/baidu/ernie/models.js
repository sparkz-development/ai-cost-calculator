"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
exports.models = {
    "ernie-4.5-21b-a3b-thinking": {
        name: "Baidu Ernie 4.5 21B A3B Thinking",
        author: "baidu",
        description: "ERNIE-4.5-21B-A3B-Thinking is a text-based Mixture of Experts (MoE) post-training model featuring 21B total parameters with 3B active parameters per token. It delivers enhanced performance on reasoning tasks, including logical reasoning, mathematics, science, coding, text generation, and academic benchmarks that typically require human expertise. The model offers efficient tool utilization capabilities and supports up to 128K tokens for long-context understanding.",
        contextLength: 128000,
        maxOutputTokens: 8000,
        created: "2025-03-16T00:00:00.000Z",
        modality: { inputs: ["text"], outputs: ["text"] },
        tokenizer: "Baidu",
    }
};
