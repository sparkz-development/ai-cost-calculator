import { LlmSchema, LLMPreview } from "../../types";
interface OpenAIResponseRequest {
    model: string;
    input: string | Array<{
        role: "user" | "assistant" | "system" | "developer";
        content: string | Array<{
            text: string;
            type: "input_text";
        }> | Array<{
            detail: "high" | "low" | "auto";
            type: "input_image";
            file_id?: string | undefined;
            image_url?: string | undefined;
        }> | Array<{
            type: "input_file";
            file_data?: string | undefined;
            file_id?: string | undefined;
            filename?: string | undefined;
        }>;
    }>;
    instructions?: string;
    max_output_tokens?: number;
    metadata?: Record<string, string>;
    parallel_tool_calls?: boolean;
    previous_response_id?: string;
    reasoning?: {
        effort?: "low" | "medium" | "high";
    };
    store?: boolean;
    stream?: boolean;
    temperature?: number;
    top_p?: number;
    truncation?: "auto" | "disabled";
    user?: string;
    tools?: Array<{
        type: "function";
        function: {
            name: string;
            description: string;
            parameters: Record<string, any>;
        };
    }>;
    tool_choice?: "none" | "auto" | "required" | {
        type: string;
        function?: {
            type: "function";
            name: string;
        };
    };
    frequency_penalty?: number;
    presence_penalty?: number;
    logit_bias?: Record<string, number>;
    logprobs?: boolean;
    top_logprobs?: number;
    n?: number;
    response_format?: {
        type: string;
        json_schema?: any;
    };
    seed?: number;
    service_tier?: string;
    stream_options?: any;
    function_call?: string | {
        name: string;
    };
    functions?: Array<any>;
}
export declare const openaiResponseMapper: import("../../path-mapper").PathMapper<OpenAIResponseRequest, import("../../types").LLMRequestBody>;
export declare const mapOpenAIResponse: ({ request, response, model, }: {
    request: OpenAIResponseRequest;
    response: any;
    statusCode?: number;
    model: string;
}) => {
    schema: LlmSchema;
    preview: LLMPreview;
};
export {};
