"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
exports.endpoints = {
    "mistral-nemo:deepinfra": {
        providerModelId: "mistralai/Mistral-Nemo-Instruct-2407",
        provider: "deepinfra",
        author: "mistral",
        pricing: [
            {
                threshold: 0,
                input: 0.00002,
                output: 0.00004,
            },
        ],
        rateLimits: {
            rpm: 12000,
            tpm: 60000000,
            tpd: 6000000000,
        },
        quantization: "fp8",
        contextLength: 128000,
        maxCompletionTokens: 16384,
        supportedParameters: [
            "max_tokens",
            "temperature",
            "top_p",
            "stop",
            "frequency_penalty",
            "presence_penalty",
            "repetition_penalty",
            "top_k",
            "seed",
            "min_p",
            "response_format",
        ],
        ptbEnabled: true,
        endpointConfigs: {
            "*": {},
        },
    },
};
