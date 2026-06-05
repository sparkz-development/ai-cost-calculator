import { BaseProvider } from "./base";
export declare class BasetenProvider extends BaseProvider {
    readonly displayName = "Baseten";
    readonly baseUrl = "https://inference.baseten.co/v1/";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(): string;
}
