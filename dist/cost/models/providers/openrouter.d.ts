import { BaseProvider } from "./base";
import type { Endpoint, RequestBodyContext, RequestParams } from "../types";
export declare class OpenRouterProvider extends BaseProvider {
    readonly displayName = "OpenRouter";
    readonly baseUrl = "https://openrouter.ai/api/v1";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): string | Promise<string>;
}
