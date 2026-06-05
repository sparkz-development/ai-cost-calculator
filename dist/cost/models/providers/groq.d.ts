import { BaseProvider } from "./base";
import type { Endpoint, RequestParams } from "../types";
export declare class GroqProvider extends BaseProvider {
    readonly displayName = "Groq";
    readonly baseUrl = "https://api.groq.com/openai/v1";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
}
