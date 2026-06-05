import { CacheControl } from "../../../prompts/types";
export type Role = "system" | "user" | "assistant" | "function" | "tool";
export type AnthropicStopReason = "end_turn" | "max_tokens" | "stop_sequence" | "tool_use" | "pause_turn" | "refusal" | null;
export type OpenAIFinishReason = "stop" | "length" | "function_call" | "content_filter" | "tool_calls" | null;
export interface AnthropicUsage {
    input_tokens: number;
    output_tokens: number;
    cache_creation_input_tokens?: number;
    cache_read_input_tokens?: number;
    cache_creation?: {
        ephemeral_5m_input_tokens?: number;
        ephemeral_1h_input_tokens?: number;
    };
    server_tool_use?: {
        web_search_requests?: number;
    };
    service_tier?: string;
}
/**
 * Per-modality token breakdown for input, cached, and output tokens.
 * Used in AI Gateway extended modality details.
 */
export interface ModalityTokenDetails {
    input_tokens?: number;
    cached_tokens?: number;
    output_tokens?: number;
}
export interface OpenAIUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    prompt_tokens_details?: {
        cached_tokens?: number;
        audio_tokens?: number;
        cache_write_tokens?: number;
        cache_write_details?: {
            write_5m_tokens?: number;
            write_1h_tokens?: number;
        };
    };
    completion_tokens_details?: {
        reasoning_tokens?: number;
        audio_tokens?: number;
        accepted_prediction_tokens?: number;
        rejected_prediction_tokens?: number;
    };
    modality_tokens?: {
        image?: ModalityTokenDetails;
        audio?: ModalityTokenDetails;
        video?: ModalityTokenDetails;
        file?: ModalityTokenDetails;
    };
    cost?: number;
}
export interface AnthropicContentBlock {
    type: "text" | "image" | "document" | "tool_use" | "tool_result" | "thinking" | "server_tool_use" | "web_search_tool_result";
    text?: string;
    source?: {
        type: "base64";
        media_type: string;
        data: string;
    } | {
        type: "url";
        url: string;
    } | {
        type: "text";
        media_type: string;
        data: string;
    };
    title?: string;
    id?: string;
    name?: string;
    input?: Record<string, any>;
    tool_use_id?: string;
    content?: string | WebSearchResult[] | WebSearchError;
    thinking?: string;
    signature?: string;
    citations?: WebSearchCitation[] | {
        enabled: boolean;
    };
    cache_control?: CacheControl;
}
export interface AnthropicTool {
    name: string;
    description: string;
    input_schema: {
        type: "object";
        properties: Record<string, any>;
        required?: string[];
    };
}
export interface AnthropicWebSearchTool {
    type: "web_search_20250305";
    name: "web_search";
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
export interface WebSearchResult {
    type: "web_search_result";
    url: string;
    title: string;
    encrypted_content: string;
    page_age?: string;
}
export interface WebSearchError {
    type: "web_search_tool_result_error";
    error_code: string;
}
export interface WebSearchCitation {
    type: "web_search_result_location";
    url: string;
    title: string;
    encrypted_index: string;
    cited_text: string;
}
export type AnthropicToolChoice = {
    type: "auto";
} | {
    type: "any";
} | {
    type: "tool";
    name: string;
};
export type OpenAIToolChoice = "auto" | "none" | {
    type: string;
    function: {
        name: string;
    };
};
export interface OpenAIToolCall {
    id: string;
    type: "function";
    function: {
        name: string;
        arguments: string;
    };
}
export interface OpenAIFunctionCall {
    name: string;
    arguments: string;
}
export interface OpenAIStreamingToolCall {
    index: number;
    id: string;
    type: "function";
    function: {
        name?: string;
        arguments?: string;
    };
}
export interface BaseStreamEvent {
    type: string;
}
export interface BaseOpenAIEvent {
    object: "chat.completion.chunk";
}
