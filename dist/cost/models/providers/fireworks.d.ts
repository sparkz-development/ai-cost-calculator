import { BaseProvider } from "./base";
export declare class FireworksProvider extends BaseProvider {
    readonly displayName = "Fireworks";
    readonly baseUrl = "https://api.fireworks.ai/";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(): string;
}
