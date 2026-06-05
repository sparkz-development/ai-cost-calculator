import { GeminiGenerateContentRequest } from "../../../types/google";
import { HeliconeChatCreateParams } from "@helicone-package/prompts/types";
export declare function toGoogle(openAIBody: HeliconeChatCreateParams): GeminiGenerateContentRequest;
