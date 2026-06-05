import { BaseProvider } from "./base";
import type { AuthContext, AuthResult, Endpoint, RequestBodyContext, RequestParams } from "../types";
export declare class HeliconeProvider extends BaseProvider {
    readonly displayName = "Helicone";
    readonly baseUrl = "https://inference.helicone.ai";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    authenticate(authContext: AuthContext, endpoint: Endpoint): AuthResult;
    buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): string;
}
