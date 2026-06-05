import { BaseProvider } from "./base";
import type { Endpoint, RequestParams, RequestBodyContext } from "../types";
export declare class OpenAIProvider extends BaseProvider {
    readonly displayName = "OpenAI";
    readonly baseUrl = "https://api.openai.com";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    private validateBaseUrl;
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): string | Promise<string>;
}
