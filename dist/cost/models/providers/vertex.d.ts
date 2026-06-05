import { BaseProvider } from "./base";
import type { RequestBodyContext, Endpoint, AuthContext, AuthResult, RequestParams } from "../types";
import { CacheProvider } from "../../../common/cache/provider";
export declare class VertexProvider extends BaseProvider {
    readonly displayName = "Vertex AI";
    readonly baseUrl = "https://{region}-aiplatform.googleapis.com";
    readonly auth: "service_account";
    readonly requiredConfig: readonly ["projectId", "region"];
    readonly pricingPages: string[];
    readonly modelPages: string[];
    readonly uiConfig: {
        logoUrl: string;
        description: string;
        docsUrl: string;
        relevanceScore: number;
    };
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): string;
    authenticate(authContext: AuthContext, endpoint: Endpoint, cacheProvider?: CacheProvider): Promise<AuthResult>;
    buildErrorMessage(response: Response): Promise<{
        message: string;
        details?: any;
    }>;
}
