import { BaseProvider } from "./base";
import type { Endpoint, RequestParams, AuthContext, AuthResult, RequestBodyContext } from "../types";
import type { CacheProvider } from "../../../common/cache/provider";
export declare class GoogleProvider extends BaseProvider {
    readonly displayName = "Google AI Studio";
    readonly baseUrl = "https://generativelanguage.googleapis.com/v1beta";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    authenticate(authContext: AuthContext, endpoint: Endpoint, cacheProvider?: CacheProvider): AuthResult;
    buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): string;
}
