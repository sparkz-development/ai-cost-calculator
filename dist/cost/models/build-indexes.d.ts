import { ModelProviderName } from "./providers";
import { ModelProviderConfigId, EndpointId, ModelName } from "./registry-types";
import type { Endpoint, ModelProviderConfig } from "./types";
export interface ModelProviderEntry {
    provider: ModelProviderName;
    config: ModelProviderConfig;
    ptbEndpoints: Endpoint[];
}
export interface ModelIndexes {
    endpointConfigIdToEndpointConfig: Map<ModelProviderConfigId, ModelProviderConfig>;
    endpointIdToEndpoint: Map<EndpointId, Endpoint>;
    modelToPtbEndpoints: Map<ModelName, Endpoint[]>;
    modelProviderIdToPtbEndpoints: Map<ModelProviderConfigId, Endpoint[]>;
    providerToModels: Map<ModelProviderName, Set<ModelName>>;
    modelToEndpointConfigs: Map<ModelName, ModelProviderConfig[]>;
    modelToProviders: Map<ModelName, Set<ModelProviderName>>;
    modelToEndpoints: Map<ModelName, Endpoint[]>;
    modelToProviderData: Map<ModelName, ModelProviderEntry[]>;
    modelProviderToData: Map<ModelProviderConfigId, ModelProviderEntry>;
    providerModelIdToConfig: Map<string, ModelProviderConfig>;
    providerModelIdAliasToConfig: Map<string, ModelProviderConfig>;
    modelToArchivedEndpointConfigs: Map<string, ModelProviderConfig>;
}
export declare function buildIndexes(modelProviderConfigs: Record<string, ModelProviderConfig>, archivedModelProviderConfigs?: Record<string, ModelProviderConfig>): ModelIndexes;
