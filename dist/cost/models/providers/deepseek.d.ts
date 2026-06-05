import { BaseProvider } from "./base";
import type { RequestParams, Endpoint } from "../types";
export declare class DeepSeekProvider extends BaseProvider {
    readonly displayName = "DeepSeek";
    readonly baseUrl = "https://api.deepseek.com";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
}
