import { Endpoint, RequestBodyContext } from "../types";
import { BaseProvider } from "./base";
export declare class MistralProvider extends BaseProvider {
    readonly displayName = "Mistral AI";
    readonly baseUrl = "https://api.mistral.ai/";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(): string;
    buildRequestBody(endpoint: Endpoint, context: RequestBodyContext): string;
    buildErrorMessage(response: Response): Promise<{
        message: string;
        details?: any;
    }>;
}
