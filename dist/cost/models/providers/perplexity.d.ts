import { BaseProvider } from "./base";
import type { RequestParams, Endpoint } from "../types";
export declare class PerplexityProvider extends BaseProvider {
    readonly displayName = "Perplexity";
    readonly baseUrl = "https://api.perplexity.ai";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    buildErrorMessage(response: Response): Promise<{
        message: string;
        details?: any;
    }>;
}
