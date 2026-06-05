import type { UserEndpointConfig, AuthContext, AuthResult, RequestBodyContext, Endpoint, RequestParams, ModelProviderConfig, PluginId } from "../types";
import { CacheProvider } from "../../../common/cache/provider";
/**
 * Base Provider class - all methods are pure, no state mutation
 */
export declare abstract class BaseProvider {
    abstract readonly displayName: string;
    abstract readonly baseUrl: string;
    abstract readonly auth: "api-key" | "oauth" | "aws-signature" | "service_account";
    abstract readonly pricingPages: string[];
    abstract readonly modelPages: string[];
    readonly supportedPlugins: PluginId[];
    readonly requiredConfig?: ReadonlyArray<keyof UserEndpointConfig>;
    abstract buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    buildModelId(modelProviderConfig: ModelProviderConfig, userEndpointConfig: UserEndpointConfig): string;
    authenticate(authContext: AuthContext, endpoint: Endpoint, cacheProvider?: CacheProvider): AuthResult | Promise<AuthResult>;
    buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): string | Promise<string>;
    buildErrorMessage(response: Response): Promise<{
        message: string;
        details?: any;
    }>;
}
