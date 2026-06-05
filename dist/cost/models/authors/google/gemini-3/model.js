"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
exports.model = {
    "gemini-3-pro-preview": {
        name: "Google Gemini 3 Pro Preview",
        author: "google",
        description: "Gemini 3 Pro Preview is Google's latest experimental AI model with advanced reasoning, coding, and multimodal capabilities. This preview version offers cutting-edge performance across various tasks including complex problem-solving, code generation, and scientific reasoning. It features enhanced accuracy and improved context understanding compared to previous generations.",
        contextLength: 1048576,
        maxOutputTokens: 65536,
        created: "2025-11-18T00:00:00",
        modality: { inputs: ["text", "image", "audio", "video"], outputs: ["text"] },
        tokenizer: "Gemini",
    },
};
