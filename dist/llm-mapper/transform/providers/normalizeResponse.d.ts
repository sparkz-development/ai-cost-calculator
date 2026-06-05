import { ModelProviderName } from "../../../cost/models/providers";
import { ResponseFormat, BodyMappingType } from "../../../cost/models/types";
import { ChatCompletionChunk } from "../types/openai";
export declare function toOpenAIResponse(response: Response, provider: ModelProviderName, providerModelId: string, isStream?: boolean): Promise<Response>;
export declare function toOpenAIStreamResponse(response: Response, provider: ModelProviderName, providerModelId: string): Response;
/**
 * Normalizes usage in OpenAI-formatted streaming responses.
 *
 * Processes OpenAI SSE streams and normalizes usage fields in chunks
 * that contain usage data using provider-specific usage processors.
 */
export declare class OpenAIStreamUsageNormalizer {
    private provider;
    private providerModelId;
    private accumulatedChunks;
    constructor(provider: ModelProviderName, providerModelId: string);
    processLines(raw: string, onChunk: (chunk: ChatCompletionChunk) => void): Promise<void>;
}
/**
 * Normalizes usage in OpenAI-formatted SSE text.
 *
 * Takes raw SSE text, normalizes usage fields in chunks, and returns
 * reconstructed SSE text with normalized usage.
 */
export declare function normalizeOpenAIStreamText(sseText: string, provider: ModelProviderName, providerModelId: string): Promise<string>;
/**
 * Normalizes AI Gateway responses to OpenAI format with correct usage.
 *
 * Handles both streaming and non-streaming responses, converting from
 * provider-native format to OpenAI format when needed, and normalizing
 * usage fields for all providers.
 *
 * If bodyMapping is "RESPONSES", converts the response to Responses API format.
 */
export declare function normalizeAIGatewayResponse(params: {
    responseText: string;
    isStream: boolean;
    provider: ModelProviderName;
    providerModelId: string;
    responseFormat: ResponseFormat;
    bodyMapping?: BodyMappingType;
}): Promise<string>;
