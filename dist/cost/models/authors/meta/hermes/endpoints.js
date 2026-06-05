"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
exports.endpoints = {
    "hermes-2-pro-llama-3-8b:novita": {
        providerModelId: "nousresearch/hermes-2-pro-llama-3-8b",
        provider: "novita",
        author: "meta-llama",
        pricing: [
            {
                threshold: 0,
                input: 0.00000014,
                output: 0.00000014
            },
        ],
        quantization: "fp16",
        contextLength: 8192,
        maxCompletionTokens: 8192,
        supportedParameters: [
            "max_tokens",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "functions",
            "tools",
            "top_k",
            "top_p",
        ],
        ptbEnabled: true,
        endpointConfigs: {
            "*": {},
        },
    },
};
