import { OpenAIUsageProcessor } from "./openAIUsageProcessor";
import { ModelUsage } from "./types";
export declare class DeepSeekUsageProcessor extends OpenAIUsageProcessor {
    protected extractUsageFromResponse(parsedResponse: any): ModelUsage;
}
