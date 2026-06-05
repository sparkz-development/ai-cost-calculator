import { IUsageProcessor, ParseInput } from "./IUsageProcessor";
import { ModelUsage } from "./types";
import { Result } from "../../common/result";
import { OpenAIUsageProcessor } from "./openAIUsageProcessor";
import { GoogleResponseBody } from "@helicone-package/llm-mapper/transform/types/google";
export declare class VertexOpenAIUsageProcessor extends OpenAIUsageProcessor {
    protected extractUsageFromResponse(response: GoogleResponseBody): ModelUsage;
    protected consolidateStreamData(streamData: any[]): any;
}
export declare class VertexUsageProcessor implements IUsageProcessor {
    parse(parseInput: ParseInput): Promise<Result<ModelUsage, string>>;
}
