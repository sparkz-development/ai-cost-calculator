import { BaseProvider } from "./base";
import type { RequestParams, Endpoint } from "../types";
export declare class XAIProvider extends BaseProvider {
    readonly displayName = "xAI";
    readonly baseUrl = "https://api.x.ai";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
}
