import { BaseProvider } from "./base";
import type { Endpoint, RequestParams } from "../types";
export declare class NebiusProvider extends BaseProvider {
    readonly displayName = "Nebius Token Factory";
    readonly baseUrl = "https://api.tokenfactory.nebius.com/v1/";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    buildErrorMessage(response: Response): Promise<{
        message: string;
        details?: any;
    }>;
}
