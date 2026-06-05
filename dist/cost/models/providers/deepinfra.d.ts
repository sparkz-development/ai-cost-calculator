import { BaseProvider } from "./base";
import type { RequestParams, Endpoint } from "../types";
export declare class DeepInfraProvider extends BaseProvider {
    readonly displayName = "DeepInfra";
    readonly baseUrl = "https://api.deepinfra.com/";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
}
