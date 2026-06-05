import { ModelUsage } from "./types";
import { OpenAIUsage } from "@helicone-package/llm-mapper/transform/types/common";
/**
 * Converts normalized ModelUsage to OpenAI usage format
 * Used by AI Gateway to normalize usage from all providers to OpenAI format
 */
export declare function mapModelUsageToOpenAI(modelUsage: ModelUsage): OpenAIUsage;
