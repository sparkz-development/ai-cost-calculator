import { Creator, CreatorModelMapping, Provider } from "./types";
/**
 * Model mapping for the three main creators: OpenAI, Anthropic, and Google
 * Each model has default values and multiple provider implementations
 */
export declare const modelMapping: CreatorModelMapping;
/**
 * Get all available models for a specific creator
 */
export declare function getModelsForCreator(creator: Creator): string[];
/**
 * Get all provider implementations for a specific model
 */
export declare function getProvidersForModel(creator: Creator, modelName: string): Provider[];
/**
 * Get the model string for a specific provider implementation
 */
export declare function getModelString(creator: Creator, modelName: string, provider: Provider): string | null;
/**
 * Build a complete configuration for a model on a specific provider
 */
export declare function getModelConfig(creator: Creator, modelName: string, provider: Provider): {
    provider: Provider;
    modelString: string;
    endpoint: string;
    mapper: import("../../llm-mapper/path-mapper").PathMapper<unknown, import("../..").LLMRequestBody>;
    baseUrl: string;
    authHeaderConfig: {
        headerName: string;
        valuePrefix?: string;
    };
    defaultHeaders: Record<string, string> | undefined;
} | null;
/**
 * Find the creator for a given provider and model string
 */
export declare function findCreatorForProviderAndModel(provider: Provider, modelString: string): Creator | null;
/**
 * Get all available models for a specific provider
 */
export declare function getModelsForProvider(provider: Provider): {
    creator: Creator;
    modelName: string;
    modelString: string;
}[];
/**
 * Get model information from a model string
 */
export declare function getModelInfoFromModelString(modelString: string): {
    creator: Creator;
    modelName: string;
    provider: Provider;
} | null;
