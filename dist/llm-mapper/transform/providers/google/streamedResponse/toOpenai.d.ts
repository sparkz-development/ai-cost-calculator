import { ChatCompletionChunk } from "../../../types/openai";
import { GoogleStreamEvent } from "../../../types/google";
export declare class GoogleToOpenAIStreamConverter {
    private messageId;
    private created;
    private model;
    private sentInitial;
    private toolCallIndex;
    private thinkingBlocks;
    private collectedSignature;
    constructor();
    processLines(raw: string, onChunk: (chunk: ChatCompletionChunk) => void): void;
    convert(event: GoogleStreamEvent): ChatCompletionChunk[];
    private createChunk;
}
