import { BaseProvider } from "./base";
import type { AuthContext, AuthResult, RequestParams, Endpoint } from "../types";
export declare class AzureOpenAIProvider extends BaseProvider {
    readonly displayName = "Azure OpenAI";
    readonly baseUrl = "https://{resourceName}.openai.azure.com";
    readonly auth: "api-key";
    readonly requiredConfig: readonly ["resourceName", "deploymentName"];
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(endpoint: Endpoint, requestParams: RequestParams): string;
    authenticate(authContext: AuthContext): AuthResult;
}
