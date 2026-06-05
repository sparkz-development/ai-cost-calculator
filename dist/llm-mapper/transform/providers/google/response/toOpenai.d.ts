import { OpenAIFinishReason, OpenAIResponseBody, OpenAIUsage } from "../../../types/openai";
import { GoogleResponseBody, GoogleUsageMetadata } from "../../../types/google";
export declare function toOpenAI(response: GoogleResponseBody): OpenAIResponseBody;
export declare function mapGoogleUsage(usage: GoogleUsageMetadata): OpenAIUsage;
export declare function mapGoogleFinishReason(reason?: string): OpenAIFinishReason;
