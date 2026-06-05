import { BaseProvider } from "./base";
import type { Endpoint, RequestParams } from "../types";
export declare class CanopyWaveProvider extends BaseProvider {
    readonly displayName = "Canopy Wave";
    readonly baseUrl = "https://inference.canopywave.io/";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
}
