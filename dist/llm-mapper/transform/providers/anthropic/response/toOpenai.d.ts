import { OpenAIResponseBody } from "../../../types/openai";
import { AnthropicResponseBody } from "../../../types/anthropic";
export declare function toOpenAI(response: AnthropicResponseBody): OpenAIResponseBody;
