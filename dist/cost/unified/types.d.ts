import { MapperName, PathMapper } from "../../llm-mapper/path-mapper";
import { LLMRequestBody } from "../../llm-mapper/types";
export type Creator = "OpenAI" | "Anthropic" | "Google" | "Meta" | "DeepSeek";
export type Provider = "OPENAI" | "AZURE" | "ANTHROPIC" | "BEDROCK" | "GOOGLE_GEMINI" | "GOOGLE_VERTEXAI" | "OPENROUTER" | "DEEPSEEK";
export interface ProviderConfig {
    baseUrl: string;
    authHeaderConfig: {
        headerName: string;
        valuePrefix?: string;
    };
    defaultEndpoint: string;
    defaultMapper: MapperName;
    envVars: string[];
    defaultHeaders?: Record<string, string>;
}
export interface TokenCost {
    input: number;
    output: number;
    input_audio?: number;
    output_audio?: number;
    input_cache_write?: number;
    input_cache_read?: number;
}
export interface Parameters {
    max_tokens?: number;
    reasoning_effort?: "low" | "medium" | "high";
    endpoint?: string;
    mapper?: PathMapper<unknown, LLMRequestBody>;
    [key: string]: any;
}
export interface ProviderModel {
    provider: Provider;
    modelString: string;
    tokenCost?: TokenCost;
    parameters?: Parameters;
}
export interface ModelConfig {
    defaultTokenCost?: TokenCost;
    defaultParameters?: Parameters;
    providers: ProviderModel[];
}
export interface ModelProviderMapping {
    [modelName: string]: ModelConfig;
}
export type CreatorModelMapping = Record<Creator, ModelProviderMapping>;
