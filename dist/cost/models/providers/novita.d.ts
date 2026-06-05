import { BaseProvider } from "./base";
import type { RequestParams, Endpoint } from "../types";
export declare class NovitaProvider extends BaseProvider {
    readonly displayName = "Novita";
    readonly baseUrl = "https://api.novita.ai/openai/v1";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    buildErrorMessage(response: Response): Promise<{
        message: string;
        details?: any;
    }>;
}
