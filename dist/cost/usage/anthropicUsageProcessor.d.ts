import { IUsageProcessor, ParseInput } from "./IUsageProcessor";
import { ModelUsage } from "./types";
import { Result } from "../../common/result";
export declare class AnthropicUsageProcessor implements IUsageProcessor {
    parse(parseInput: ParseInput): Promise<Result<ModelUsage, string>>;
    private parseNonStreamResponse;
    private parseStreamResponse;
    private consolidateStreamUsage;
    protected extractUsageFromResponse(parsedResponse: any): ModelUsage;
}
