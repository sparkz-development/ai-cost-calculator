"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
exports.models = {
    "mistral-nemo": {
        name: "Mistral Nemo",
        author: "mistral",
        description: "The Mistral-Nemo-Instruct-2407 Large Language Model (LLM) is an instruct fine-tuned version of the Mistral-Nemo-Base-2407. Trained jointly by Mistral AI and NVIDIA, it significantly outperforms existing models smaller or similar in size.",
        contextLength: 128000,
        maxOutputTokens: 16400,
        created: "2024-07-18T00:00:00.000Z",
        modality: { inputs: ["text", "image"], outputs: ["text"] },
        tokenizer: "Mistral",
    },
};
