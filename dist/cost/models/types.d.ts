import { ModelProviderName } from "./providers";
export interface AuthorMetadata {
    modelCount: number;
    supported: boolean;
    name?: string;
    slug?: string;
    description?: string;
    website?: string;
    apiUrl?: string;
}
export declare const AUTHORS: readonly ["anthropic", "openai", "google", "meta-llama", "mistral", "amazon", "microsoft", "nvidia", "deepseek", "qwen", "xai", "moonshotai", "perplexity", "alibaba", "zai", "baidu"];
export type AuthorName = (typeof AUTHORS)[number] | "passthrough";
export type InputModality = "text" | "image" | "audio" | "video";
export type OutputModality = "text" | "image" | "audio" | "video";
export interface Modality {
    inputs: InputModality[];
    outputs: OutputModality[];
}
export type ResponseFormat = "ANTHROPIC" | "OPENAI" | "GOOGLE";
export type Tokenizer = "Claude" | "GPT" | "Llama" | "Llama3" | "Llama4" | "Gemini" | "Mistral" | "MoonshotAI" | "Qwen" | "DeepSeek" | "Cohere" | "Grok" | "Tekken" | "Zai" | "Baidu";
export type StandardParameter = "max_tokens" | "max_completion_tokens" | "temperature" | "top_p" | "top_k" | "stop" | "stream" | "frequency_penalty" | "presence_penalty" | "repetition_penalty" | "seed" | "tools" | "tool_choice" | "functions" | "function_call" | "reasoning" | "include_reasoning" | "thinking" | "response_format" | "json_mode" | "truncate" | "min_p" | "logit_bias" | "logprobs" | "top_logprobs" | "structured_outputs" | "verbosity" | "n";
export declare const PARAMETER_LABELS: Record<StandardParameter, string>;
/**
 * Per-modality pricing configuration.
 * Supports input, cached input (as multiplier), and output rates.
 */
export interface ModalityPricing {
    input?: number;
    cachedInputMultiplier?: number;
    output?: number;
}
export interface ModelPricing {
    threshold: number;
    input: number;
    output: number;
    cacheMultipliers?: {
        cachedInput: number;
        write5m?: number;
        write1h?: number;
    };
    cacheStoragePerHour?: number;
    thinking?: number;
    request?: number;
    image?: ModalityPricing;
    audio?: ModalityPricing;
    video?: ModalityPricing;
    file?: ModalityPricing;
    web_search?: number;
}
export interface ModelConfig {
    name: string;
    author: AuthorName;
    description: string;
    contextLength: number;
    maxOutputTokens: number;
    created: string;
    modality: Modality;
    tokenizer: Tokenizer;
    pinnedVersionOfModel?: string;
}
interface BaseConfig {
    pricing: ModelPricing[];
    contextLength: number;
    maxCompletionTokens: number;
    ptbEnabled: boolean;
    version?: string;
    unsupportedParameters?: StandardParameter[];
}
export interface RateLimits {
    rpm?: number;
    tpm?: number;
    tpd?: number;
}
export type PluginId = "web";
interface BasePlugin<T extends PluginId = PluginId> {
    id: T;
}
export interface WebSearchPlugin extends BasePlugin<"web"> {
    max_uses?: number;
    allowed_domains?: string[];
    blocked_domains?: string[];
    user_location?: {
        type?: "approximate";
        city?: string;
        region?: string;
        country?: string;
        timezone?: string;
    };
}
export type Plugin = WebSearchPlugin;
export type BodyMappingType = "OPENAI" | "NO_MAPPING" | "RESPONSES";
export interface ModelProviderConfig extends BaseConfig {
    providerModelId: string;
    provider: ModelProviderName;
    author: AuthorName;
    supportedParameters: StandardParameter[];
    supportedPlugins?: PluginId[];
    rateLimits?: RateLimits;
    endpointConfigs: Record<string, EndpointConfig>;
    crossRegion?: boolean;
    priority?: number;
    quantization?: "fp4" | "fp8" | "fp16" | "bf16" | "int4";
    responseFormat?: ResponseFormat;
    requireExplicitRouting?: boolean;
    providerModelIdAliases?: string[];
}
export interface EndpointConfig extends UserEndpointConfig {
    providerModelId?: string;
    pricing?: ModelPricing[];
    contextLength?: number;
    maxCompletionTokens?: number;
    ptbEnabled?: boolean;
    version?: string;
    rateLimits?: RateLimits;
    priority?: number;
}
export interface RequestParams {
    isStreaming?: boolean;
    bodyMapping?: BodyMappingType;
    apiKey?: string;
}
export interface Endpoint extends BaseConfig {
    modelConfig: ModelProviderConfig;
    userConfig: UserEndpointConfig;
    provider: ModelProviderName;
    author: AuthorName;
    providerModelId: string;
    supportedParameters: StandardParameter[];
    priority?: number;
}
export interface UserEndpointConfig {
    region?: string;
    location?: string;
    projectId?: string;
    baseUri?: string;
    deploymentName?: string;
    resourceName?: string;
    apiVersion?: string;
    crossRegion?: boolean;
    gatewayMapping?: BodyMappingType;
    modelName?: string;
    heliconeModelId?: string;
}
export interface ModelSpec {
    modelName: string;
    provider?: ModelProviderName;
    customUid?: string;
    isOnline?: boolean;
}
export interface AuthContext {
    apiKey?: string;
    secretKey?: string;
    orgId?: string;
    bodyMapping?: BodyMappingType;
    requestMethod?: string;
    requestUrl?: string;
    requestBody?: string;
}
export interface AuthResult {
    headers: Record<string, string>;
}
export interface RequestBodyContext {
    parsedBody: any;
    bodyMapping: BodyMappingType;
    toAnthropic: (body: any, providerModelId?: string, options?: {
        includeCacheBreakpoints?: boolean;
    }) => any;
    toChatCompletions: (body: any) => any;
}
export {};
