"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
exports.endpoints = {
    "qwen2.5-coder-7b-fast:nebius": {
        providerModelId: "Qwen/Qwen2.5-Coder-7B-fast",
        provider: "nebius",
        author: "alibaba",
        pricing: [
            {
                threshold: 0,
                input: 0.00000003,
                output: 0.00000009
            },
        ],
        contextLength: 32000,
        maxCompletionTokens: 8192,
        supportedParameters: [
            "structured_outputs",
            "response_format",
            "max_tokens",
            "temperature",
            "top_p",
            "stop",
            "frequency_penalty",
            "presence_penalty",
            "seed",
            "top_k",
            "logit_bias",
            "logprobs",
            "top_logprobs"
        ],
        ptbEnabled: true,
        endpointConfigs: {
            "*": {},
        },
    },
};
