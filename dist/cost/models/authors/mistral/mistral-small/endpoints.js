"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
exports.endpoints = {
    "mistral-small:deepinfra": {
        providerModelId: "mistralai/Mistral-Small-3.2-24B-Instruct-2506",
        provider: "deepinfra",
        author: "mistral",
        pricing: [
            {
                threshold: 0,
                input: 0.000075,
                output: 0.0002,
            },
        ],
        rateLimits: {
            rpm: 12000,
            tpm: 60000000,
            tpd: 6000000000,
        },
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
        quantization: "fp8",
        endpointConfigs: {
            "*": {},
        },
    },
};
