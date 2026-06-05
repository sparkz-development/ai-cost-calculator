import { BaseProvider } from "./base";
import type { Endpoint, RequestParams } from "../types";
export declare class CerebrasProvider extends BaseProvider {
    readonly displayName = "Cerebras";
    readonly baseUrl = "https://api.cerebras.ai/";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
}
