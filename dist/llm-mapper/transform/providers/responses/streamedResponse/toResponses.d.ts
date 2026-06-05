import { OpenAIStreamEvent } from "../../../types/openai";
import { ResponsesStreamEvent } from "../../../types/responses";
export declare class ChatToResponsesStreamConverter {
    private responseId;
    private model;
    private created;
    private started;
    private textBuffer;
    private toolCalls;
    private itemAdded;
    private partAdded;
    private emittedFunctionItems;
    private completedEmitted;
    private imageBuffer;
    private nextContentIndex;
    private reasoningStates;
    private currentReasoningIndex;
    constructor();
    private getOrCreateReasoningState;
    private getMessageOutputIndex;
    private finalizeReasoningState;
    private finalizeAllReasoning;
    convert(chunk: OpenAIStreamEvent): ResponsesStreamEvent[];
}
