import { BaseProvider } from "./base";
export declare class ChutesProvider extends BaseProvider {
    readonly displayName = "Chutes";
    readonly baseUrl = "https://api.chutes.ai/";
    readonly auth: "api-key";
    readonly pricingPages: string[];
    readonly modelPages: string[];
    buildUrl(): string;
    buildErrorMessage(response: Response): Promise<{
        message: string;
        details?: any;
    }>;
}
