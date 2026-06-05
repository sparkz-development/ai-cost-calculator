import { BaseProvider } from "./base";
import type { AuthContext, AuthResult, RequestBodyContext, Endpoint, RequestParams, ModelProviderConfig, UserEndpointConfig } from "../types";
export declare class BedrockProvider extends BaseProvider {
    readonly displayName = "AWS Bedrock";
    readonly baseUrl = "https://bedrock-runtime.{region}.amazonaws.com";
    readonly auth: "aws-signature";
    readonly requiredConfig: readonly ["region"];
    readonly pricingPages: string[];
    readonly modelPages: string[];
    private getModelId;
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    buildModelId(modelProviderConfig: ModelProviderConfig, userEndpointConfig: UserEndpointConfig): string;
    authenticate(authContext: AuthContext, endpoint: Endpoint): Promise<AuthResult>;
    buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): string;
    buildErrorMessage(response: Response): Promise<{
        message: string;
        details?: any;
    }>;
}
