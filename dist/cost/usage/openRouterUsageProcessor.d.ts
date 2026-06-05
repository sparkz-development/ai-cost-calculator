import { IUsageProcessor, ParseInput } from "./IUsageProcessor";
import { ModelUsage } from "./types";
import { Result } from "../../common/result";
export interface OpenRouterCostDetails {
    upstream_inference_cost?: number;
    upstream_inference_prompt_cost?: number;
    upstream_inference_completions_cost?: number;
}
export declare function getOpenRouterDeclaredCost(cost?: number, cost_details?: OpenRouterCostDetails): number | undefined;
export interface OpenRouterUsage extends ModelUsage {
    cost_details?: OpenRouterCostDetails;
    provider?: string;
    is_byok?: boolean;
}
export declare class OpenRouterUsageProcessor implements IUsageProcessor {
    parse(parseInput: ParseInput): Promise<Result<OpenRouterUsage, string>>;
    protected parseNonStreamResponse(responseBody: string): Result<OpenRouterUsage, string>;
    protected parseStreamResponse(responseBody: string): Result<OpenRouterUsage, string>;
    protected consolidateStreamData(streamData: any[]): any;
    protected extractUsageFromResponse(parsedResponse: any): OpenRouterUsage;
}
