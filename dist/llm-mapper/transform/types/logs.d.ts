import { ChatCompletionChunk, OpenAIResponseBody } from "./openai";
import { AnthropicResponseBody } from "./anthropic";
export interface OpenAILog extends OpenAIResponseBody {
    streamed_data?: ChatCompletionChunk[];
}
export interface AnthropicLog extends AnthropicResponseBody {
    streamed_data?: string;
}
