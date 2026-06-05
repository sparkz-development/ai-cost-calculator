import { ModelUsage } from "./types";
import { AnthropicUsageProcessor } from "./anthropicUsageProcessor";
export declare class BedrockUsageProcessor extends AnthropicUsageProcessor {
    protected extractUsageFromResponse(parsedResponse: any): ModelUsage;
}
