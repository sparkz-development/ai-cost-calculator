import { ResponsesRequestBody } from "../../../types/responses";
import { HeliconeChatCreateParams } from "@helicone-package/prompts/types";
/**
 * Converts a Chat Completions request body to Responses API format.
 *
 * This is used after prompt merging to convert the merged Chat Completions body
 * back to Responses API format for the final request.
 *
 * @param body - The Chat Completions request body (merged with prompt)
 * @param originalResponsesBody - Optional original Responses API request to preserve Responses-specific fields
 * @returns The converted Responses API request body
 */
export declare function fromChatCompletions(body: HeliconeChatCreateParams, originalResponsesBody?: Partial<ResponsesRequestBody>): ResponsesRequestBody;
