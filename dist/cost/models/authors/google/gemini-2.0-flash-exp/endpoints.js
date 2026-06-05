"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
exports.endpoints = {
    "gemini-2.0-flash-exp:google-ai-studio": {
        providerModelId: "gemini-2.0-flash-exp",
        provider: "google-ai-studio",
        author: "google",
        pricing: [
            {
                threshold: 0,
                input: 0.0, // Free tier
                output: 0.0, // Free tier
                image: {
                    input: 0.0, // Free tier
                    output: 0.00012, // $120/1M tokens for image output (same as gemini-3-pro-image)
                },
            },
        ],
        contextLength: 1000000,
        maxCompletionTokens: 8192,
        supportedParameters: [
            "max_tokens",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_p",
        ],
        rateLimits: {
            rpm: 10,
            tpm: 4000000,
        },
        ptbEnabled: false,
        responseFormat: "GOOGLE",
        endpointConfigs: {
            "*": {},
        },
    },
    "gemini-2.0-flash-exp:vertex": {
        providerModelId: "gemini-2.0-flash-exp",
        provider: "vertex",
        author: "google",
        crossRegion: true,
        pricing: [
            {
                threshold: 0,
                input: 0.0, // Free tier / experimental
                output: 0.0, // Free tier / experimental
                image: {
                    input: 0.0, // Free tier / experimental
                    output: 0.00012, // $120/1M tokens for image output (same as gemini-3-pro-image)
                },
            },
        ],
        contextLength: 1000000,
        maxCompletionTokens: 8192,
        supportedParameters: [
            "max_tokens",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_p",
        ],
        responseFormat: "GOOGLE",
        ptbEnabled: false,
        endpointConfigs: {
            global: {
                providerModelId: "gemini-2.0-flash-exp",
            },
        },
    },
    "gemini-2.0-flash-exp:openrouter": {
        provider: "openrouter",
        author: "google",
        providerModelId: "google/gemini-2.0-flash-exp:free",
        pricing: [
            {
                threshold: 0,
                input: 0.0, // Free tier
                output: 0.0, // Free tier
                image: {
                    input: 0.0, // Free tier
                    output: 0.0001266, // $126.60/1M - $120/1M * 1.055 for image output (with OpenRouter markup)
                },
            },
        ],
        contextLength: 1000000,
        maxCompletionTokens: 8192,
        supportedParameters: [
            "max_tokens",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_p",
        ],
        ptbEnabled: false,
        endpointConfigs: {
            "*": {},
        },
    },
};
