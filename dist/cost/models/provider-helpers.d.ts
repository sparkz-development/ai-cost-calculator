import { Result } from "../../common/result";
import type { Endpoint, ModelProviderConfig, UserEndpointConfig, AuthContext, AuthResult, RequestBodyContext, RequestParams, ModelSpec } from "./types";
import { ModelProviderName } from "./providers";
import { BaseProvider } from "./providers/base";
import { Provider } from "../../llm-mapper/types";
import { CacheProvider } from "../../common/cache/provider";
export declare function heliconeProviderToModelProviderName(provider: Provider): ModelProviderName | null;
export declare function getProvider(providerName: string): Result<BaseProvider>;
export declare function getProviderDisplayName(providerName: string): string;
export declare const dbProviderToProvider: (provider: string) => ModelProviderName | null;
export declare function buildEndpointUrl(endpoint: Endpoint, requestParams: RequestParams): Result<string>;
export declare function buildModelId(modelProviderConfig: ModelProviderConfig, userConfig?: UserEndpointConfig): Result<string>;
export declare function authenticateRequest(endpoint: Endpoint, authContext: AuthContext, cacheProvider?: CacheProvider): Promise<Result<AuthResult>>;
export declare function filterUnsupportedParameters(parsedBody: any, endpoint: Endpoint): any;
export declare function buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): Promise<Result<string>>;
export declare function buildErrorMessage(endpoint: Endpoint, response: Response): Promise<Result<{
    message: string;
    details?: any;
}>>;
export declare function validateProvider(provider: string): provider is ModelProviderName;
/**
 * Model name mapping for backward compatibility
 * Maps deprecated/incorrect model names to their correct counterparts
 */
export declare const MODEL_NAME_MAPPINGS: Record<string, string>;
export declare function parseModelString(modelString: string): Result<ModelSpec, string>;
