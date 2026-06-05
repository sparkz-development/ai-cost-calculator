import { IUsageProcessor, ParseInput } from "./IUsageProcessor";
import { ModelUsage } from "./types";
import { Result } from "../../common/result";
export declare class OpenAIUsageProcessor implements IUsageProcessor {
    parse(parseInput: ParseInput): Promise<Result<ModelUsage, string>>;
    protected parseNonStreamResponse(responseBody: string): Result<ModelUsage, string>;
    protected parseStreamResponse(responseBody: string): Result<ModelUsage, string>;
    protected consolidateStreamData(streamData: any[]): any;
    protected extractUsageFromResponse(parsedResponse: any): ModelUsage;
}
