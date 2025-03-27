import { Message } from "../types";
import { LlmSchema } from "../types";
export declare const getFormattedMessageContent: (content: any) => string;
export declare function getRequestMessages(llmSchema: LlmSchema | undefined, requestBody: any): Message[];
export declare function getResponseMessage(llmSchema: LlmSchema | undefined, responseBody: any, model: string): Message | null;
export declare function getMessages(requestMessages: Message[], responseMessage: Message | null, status: number): Message[];
