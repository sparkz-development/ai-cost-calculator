"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
exports.endpoints = {
    "mistral-large-2411:mistral": {
        providerModelId: "mistral-large-2411",
        provider: "mistral",
        author: "mistral",
        pricing: [
            {
                threshold: 0,
                input: 0.000002,
                output: 0.000006,
            },
        ],
        contextLength: 128000,
        maxCompletionTokens: 4096,
        supportedParameters: [
            "max_tokens",
            "temperature",
            "top_p",
            "stop",
            "frequency_penalty",
            "presence_penalty",
            "seed",
            "response_format",
            "structured_outputs",
            "tools",
            "tool_choice",
        ],
        ptbEnabled: true,
        endpointConfigs: {
            "*": {},
        },
    },
};
