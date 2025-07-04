"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelMapping = void 0;
exports.getModelsForCreator = getModelsForCreator;
exports.getProvidersForModel = getProvidersForModel;
exports.getModelString = getModelString;
exports.getModelConfig = getModelConfig;
exports.findCreatorForProviderAndModel = findCreatorForProviderAndModel;
exports.getModelsForProvider = getModelsForProvider;
exports.getModelInfoFromModelString = getModelInfoFromModelString;
const path_mapper_1 = require("../../llm-mapper/path-mapper");
const providers_1 = require("./providers");
/**
 * Model mapping for the three main creators: OpenAI, Anthropic, and Google
 * Each model has default values and multiple provider implementations
 */
exports.modelMapping = {
    OpenAI: {
        "GPT-4o mini": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                stop: [],
                response_format: true,
            },
            providers: [
                {
                    provider: "OPENAI",
                    modelString: "gpt-4o-mini",
                },
                {
                    provider: "AZURE",
                    modelString: "gpt-4o-mini",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "openai/gpt-4o-mini",
                },
            ],
        },
        "GPT-4o": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                stop: [],
                response_format: true,
            },
            providers: [
                {
                    provider: "OPENAI",
                    modelString: "gpt-4o",
                },
                {
                    provider: "AZURE",
                    modelString: "gpt-4o",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "openai/gpt-4o-2024-11-20",
                },
            ],
        },
        "ChatGPT-4o": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                stop: [],
                response_format: true,
            },
            providers: [
                {
                    provider: "OPENROUTER",
                    modelString: "openai/chatgpt-4o-latest",
                },
            ],
        },
        "GPT-4.1": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                stop: [],
                response_format: true,
            },
            providers: [
                {
                    provider: "OPENAI",
                    modelString: "gpt-4.1",
                },
                {
                    provider: "AZURE",
                    modelString: "gpt-4.1",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "openai/gpt-4.1",
                },
            ],
        },
        "GPT-4.1 mini": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                stop: [],
                response_format: true,
            },
            providers: [
                {
                    provider: "OPENAI",
                    modelString: "gpt-4.1-mini",
                },
                {
                    provider: "AZURE",
                    modelString: "gpt-4.1-mini",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "openai/gpt-4.1-mini",
                },
            ],
        },
        "GPT-4.1 nano": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                stop: [],
                response_format: true,
            },
            providers: [
                {
                    provider: "OPENAI",
                    modelString: "gpt-4.1-nano",
                },
                {
                    provider: "AZURE",
                    modelString: "gpt-4.1-nano",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "openai/gpt-4.1-nano",
                },
            ],
        },
        "o3 mini": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                reasoning_effort: "medium",
                stop: [],
                response_format: true,
            },
            providers: [
                {
                    provider: "OPENAI",
                    modelString: "o3-mini",
                },
                {
                    provider: "AZURE",
                    modelString: "o3-mini",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "openai/o3-mini",
                },
            ],
        },
        o1: {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                reasoning_effort: "medium",
                stop: [],
                response_format: true,
            },
            providers: [
                {
                    provider: "OPENAI",
                    modelString: "o1",
                },
                {
                    provider: "AZURE",
                    modelString: "o1",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "openai/o1",
                },
            ],
        },
    },
    Anthropic: {
        "Claude 3.7 Sonnet": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                max_tokens: 8192,
                stop: [],
                response_format: false,
            },
            providers: [
                {
                    provider: "ANTHROPIC",
                    modelString: "claude-3-7-sonnet-latest",
                },
                {
                    provider: "BEDROCK",
                    modelString: "anthropic.claude-3-7-sonnet-20250219-v1:0",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "anthropic/claude-3.7-sonnet",
                },
            ],
        },
        "Claude 3.5 Haiku": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                max_tokens: 8192,
                stop: [],
                response_format: false,
            },
            providers: [
                {
                    provider: "ANTHROPIC",
                    modelString: "claude-3-5-haiku-latest",
                },
                {
                    provider: "BEDROCK",
                    modelString: "anthropic.claude-3-5-haiku-20241022-v1:0",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "anthropic/claude-3.5-haiku",
                },
            ],
        },
        "Claude 3.5 Sonnet": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                max_tokens: 8192,
                stop: [],
                response_format: false,
            },
            providers: [
                {
                    provider: "ANTHROPIC",
                    modelString: "claude-3-5-sonnet-latest",
                },
                {
                    provider: "BEDROCK",
                    modelString: "anthropic.claude-3-5-sonnet-20241022-v2:0",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "anthropic/claude-3.5-sonnet",
                },
            ],
        },
        "Claude 3 Opus": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                max_tokens: 4096,
                stop: [],
                response_format: false,
            },
            providers: [
                {
                    provider: "ANTHROPIC",
                    modelString: "claude-3-opus-latest",
                },
                {
                    provider: "BEDROCK",
                    modelString: "anthropic.claude-3-opus-20240229-v1:0",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "anthropic/claude-3-opus",
                },
            ],
        },
    },
    Google: {
        "Gemini 2.0 Flash": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: true,
            },
            providers: [
                {
                    provider: "GOOGLE_GEMINI",
                    modelString: "gemini-2.0-flash",
                },
                {
                    provider: "GOOGLE_VERTEXAI",
                    modelString: "gemini-2.0-flash",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "google/gemini-2.0-flash-001",
                },
            ],
        },
        "Gemini 2.0 Flash-Lite": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: true,
            },
            providers: [
                {
                    provider: "GOOGLE_GEMINI",
                    modelString: "gemini-2.0-flash-lite",
                },
                {
                    provider: "GOOGLE_VERTEXAI",
                    modelString: "gemini-2.0-flash-lite",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "google/gemini-2.0-flash-lite-001",
                },
            ],
        },
        "Gemini 2.0 Flash Thinking": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: true,
            },
            providers: [
                {
                    provider: "GOOGLE_GEMINI",
                    modelString: "gemini-2.0-flash-thinking-exp-01-21",
                },
                {
                    provider: "GOOGLE_VERTEXAI",
                    modelString: "gemini-2.0-flash-thinking-exp-01-21",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "google/gemini-2.0-flash-thinking-exp:free",
                },
            ],
        },
        "Gemini 2.0 Pro": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: true,
            },
            providers: [
                {
                    provider: "GOOGLE_GEMINI",
                    modelString: "gemini-2.0-pro-exp-02-05",
                },
                {
                    provider: "GOOGLE_VERTEXAI",
                    modelString: "gemini-2.0-pro-exp-02-05",
                },
            ],
        },
        "Gemini 1.5 Flash": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: true,
            },
            providers: [
                {
                    provider: "GOOGLE_GEMINI",
                    modelString: "gemini-1.5-flash",
                },
                {
                    provider: "GOOGLE_VERTEXAI",
                    modelString: "gemini-1.5-flash",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "google/gemini-flash-1.5",
                },
            ],
        },
        "Gemini 1.5 Pro": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: true,
            },
            providers: [
                {
                    provider: "GOOGLE_GEMINI",
                    modelString: "gemini-1.5-pro",
                },
                {
                    provider: "GOOGLE_VERTEXAI",
                    modelString: "gemini-1.5-pro",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "google/gemini-pro-1.5",
                },
            ],
        },
    },
    Meta: {
        "Llama 3.3 70B Instruct": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: false,
            },
            providers: [
                {
                    provider: "AZURE",
                    modelString: "Llama-3.3-70B-Instruct",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "meta-llama/llama-3.3-70b-instruct",
                },
            ],
        },
        "Llama 3.2 1B Instruct": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: false,
            },
            providers: [
                {
                    provider: "AZURE",
                    modelString: "Meta-Llama-3.2-1B-Instruct",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "meta-llama/llama-3.2-1b-instruct",
                },
            ],
        },
        "Llama 3.2 3B Instruct": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: false,
            },
            providers: [
                {
                    provider: "AZURE",
                    modelString: "Meta-Llama-3.2-3B-Instruct",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "meta-llama/llama-3.2-3b-instruct",
                },
            ],
        },
        "Llama 3.1 8B Instruct": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                response_format: false,
            },
            providers: [
                {
                    provider: "AZURE",
                    modelString: "Meta-Llama-3.1-8B-Instruct",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "meta-llama/llama-3.1-8b-instruct",
                },
            ],
        },
    },
    DeepSeek: {
        "DeepSeek V3": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                stop: [],
                response_format: false,
            },
            providers: [
                {
                    provider: "DEEPSEEK",
                    modelString: "deepseek-chat",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "deepseek/deepseek-chat-v3-0324",
                },
            ],
        },
        "DeepSeek R1": {
            defaultTokenCost: {
                input: 0,
                output: 0,
            },
            defaultParameters: {
                stop: [],
                response_format: false,
            },
            providers: [
                {
                    provider: "DEEPSEEK",
                    modelString: "deepseek-reasoner",
                },
                {
                    provider: "OPENROUTER",
                    modelString: "deepseek/deepseek-r1",
                },
            ],
        },
    },
};
/**
 * Get all available models for a specific creator
 */
function getModelsForCreator(creator) {
    const creatorModels = exports.modelMapping[creator];
    if (!creatorModels)
        return [];
    return Object.keys(creatorModels);
}
/**
 * Get all provider implementations for a specific model
 */
function getProvidersForModel(creator, modelName) {
    const creatorModels = exports.modelMapping[creator];
    if (!creatorModels)
        return [];
    const modelConfig = creatorModels[modelName];
    if (!modelConfig)
        return [];
    return modelConfig.providers.map((provider) => provider.provider);
}
/**
 * Get the model string for a specific provider implementation
 */
function getModelString(creator, modelName, provider) {
    const creatorModels = exports.modelMapping[creator];
    if (!creatorModels)
        return null;
    const modelConfig = creatorModels[modelName];
    if (!modelConfig)
        return null;
    const providerModel = modelConfig.providers.find((p) => p.provider === provider);
    return (providerModel === null || providerModel === void 0 ? void 0 : providerModel.modelString) || null;
}
/**
 * Build a complete configuration for a model on a specific provider
 */
function getModelConfig(creator, modelName, provider) {
    const creatorModels = exports.modelMapping[creator];
    if (!creatorModels)
        return null;
    const modelConfig = creatorModels[modelName];
    if (!modelConfig)
        return null;
    const providerModel = modelConfig.providers.find((p) => p.provider === provider);
    if (!providerModel)
        return null;
    const providerConfig = (0, providers_1.getProviderConfig)(provider);
    // Merge default parameters with provider-specific parameters
    const parameters = {
        ...(modelConfig.defaultParameters || {}),
        ...(providerModel.parameters || {}),
    };
    return {
        provider,
        modelString: providerModel.modelString,
        endpoint: parameters.endpoint || providerConfig.defaultEndpoint,
        mapper: parameters.mapper || (0, path_mapper_1.getMapper)(providerConfig.defaultMapper),
        baseUrl: providerConfig.baseUrl,
        authHeaderConfig: providerConfig.authHeaderConfig,
        defaultHeaders: providerConfig.defaultHeaders,
    };
}
/**
 * Find the creator for a given provider and model string
 */
function findCreatorForProviderAndModel(provider, modelString) {
    // Iterate through all creators
    for (const creator of Object.keys(exports.modelMapping)) {
        const creatorModels = exports.modelMapping[creator];
        // Iterate through all models for this creator
        for (const modelName of Object.keys(creatorModels)) {
            const modelConfig = creatorModels[modelName];
            // Check if any provider implementation matches
            const match = modelConfig.providers.find((p) => p.provider === provider && p.modelString === modelString);
            if (match) {
                return creator;
            }
        }
    }
    return null;
}
/**
 * Get all available models for a specific provider
 */
function getModelsForProvider(provider) {
    const result = [];
    // Iterate through all creators
    for (const creator of Object.keys(exports.modelMapping)) {
        const creatorModels = exports.modelMapping[creator];
        // Iterate through all models for this creator
        for (const modelName of Object.keys(creatorModels)) {
            const modelConfig = creatorModels[modelName];
            // Check if any provider implementation matches
            const match = modelConfig.providers.find((p) => p.provider === provider);
            if (match) {
                result.push({
                    creator,
                    modelName,
                    modelString: match.modelString,
                });
            }
        }
    }
    return result;
}
/**
 * Get model information from a model string
 */
function getModelInfoFromModelString(modelString) {
    // Iterate through all creators
    for (const creator of Object.keys(exports.modelMapping)) {
        const creatorModels = exports.modelMapping[creator];
        // Iterate through all models for this creator
        for (const modelName of Object.keys(creatorModels)) {
            const modelConfig = creatorModels[modelName];
            // Check if any provider implementation matches
            for (const providerModel of modelConfig.providers) {
                if (providerModel.modelString === modelString) {
                    return {
                        creator,
                        modelName,
                        provider: providerModel.provider,
                    };
                }
            }
        }
    }
    return null;
}
