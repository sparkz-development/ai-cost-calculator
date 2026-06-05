import { BaseProvider } from "./base";
import type { AuthContext, AuthResult, Endpoint, RequestBodyContext, RequestParams, PluginId } from "../types";
export declare class AnthropicProvider extends BaseProvider {
    readonly displayName = "Anthropic";
    readonly baseUrl = "https://api.anthropic.com";
    readonly auth: "api-key";
    readonly supportedPlugins: PluginId[];
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    authenticate(authContext: AuthContext, endpoint: Endpoint): AuthResult;
    buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): string;
}
