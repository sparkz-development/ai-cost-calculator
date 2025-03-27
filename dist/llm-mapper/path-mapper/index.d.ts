import { MapperBuilder } from "./builder";
import { PathMapper } from "./core";
export declare const mappers: {
    readonly "openai-chat": PathMapper<import("../mappers/openai/chat-v2").OpenAIChatRequest, import("../types").LLMRequestBody>;
    readonly "anthropic-chat": PathMapper<import("../mappers/anthropic/chat-v2").AnthropicChatRequest, import("../types").LLMRequestBody>;
    readonly "gemini-chat": PathMapper<import("../mappers/gemini/chat-v2").GoogleChatRequest, import("../types").LLMRequestBody>;
};
export type MapperName = keyof typeof mappers;
export declare function getMapper<T extends MapperName>(name: T): (typeof mappers)[T];
export { MapperBuilder, PathMapper };
