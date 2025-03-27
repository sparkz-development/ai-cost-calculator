import { Provider, ProviderConfig } from "./types";
export declare const providerConfigs: Record<Provider, ProviderConfig>;
export declare function getProviderConfig(provider: Provider): ProviderConfig;
export declare function buildProviderUrl(provider: Provider, modelString?: string, providerSettings?: {
    region?: string;
    project?: string;
    location?: string;
    endpoint?: string;
    deployment?: string;
}): string;
