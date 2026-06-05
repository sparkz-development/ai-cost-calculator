import { AnthropicStreamEvent } from "../../../types/anthropic";
import { OpenAIStreamEvent, ChatCompletionChunk } from "../../../types/openai";
export declare class AnthropicToOpenAIStreamConverter {
    private messageId;
    private model;
    private created;
    private finalUsage;
    private inputTokens;
    private cacheReadInputTokens;
    private cacheCreationInputTokens;
    private cacheCreationDetails;
    private toolCallState;
    private nextToolCallIndex;
    private annotations;
    private currentContentLength;
    private thinkingBlockState;
    constructor();
    processLines(raw: string, onChunk: (chunk: ChatCompletionChunk) => void): void;
    convert(event: AnthropicStreamEvent): OpenAIStreamEvent[];
    private createChunk;
    private mapStopReason;
    private emitEmptyToolCallArguments;
    private finalizePendingToolCalls;
}
