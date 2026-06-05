import { OpenAIUsageProcessor } from "./openAIUsageProcessor";
import { ModelUsage } from "./types";
export declare class XAIUsageProcessor extends OpenAIUsageProcessor {
    protected extractUsageFromResponse(parsedResponse: any): ModelUsage;
}
