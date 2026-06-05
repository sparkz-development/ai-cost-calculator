/**
 * Main registry with O(1) endpoint access
 */
import type { Endpoint, ModelConfig, ModelProviderConfig, UserEndpointConfig } from "./types";
import { ModelProviderEntry } from "./build-indexes";
import { ModelProviderName } from "./providers";
import { Result } from "../../common/result";
import { ModelName } from "./registry-types";
declare function getAllModelIds(): Result<ModelName[]>;
declare function getAllModelsWithIds(): Result<Record<ModelName, ModelConfig>>;
declare function getAuthorByModel(model: string): string | null;
declare function getEndpointsByModel(model: string): Result<Endpoint[]>;
declare function createPassthroughEndpoint(modelName: string, provider: ModelProviderName, userEndpointConfig: UserEndpointConfig): Result<Endpoint>;
declare function getPtbEndpointsByProvider(model: string, provider: string): Result<Endpoint[]>;
declare function getProviderModels(provider: string): Result<Set<ModelName>>;
declare function buildEndpoint(endpointConfig: ModelProviderConfig, userEndpointConfig: UserEndpointConfig): Result<Endpoint>;
declare function getModelProviderConfig(model: string, provider: string): Result<ModelProviderConfig>;
declare function getModelProviderConfigByProviderModelId(providerModelId: string, provider: ModelProviderName): Result<ModelProviderConfig>;
declare function getModelProviderConfigs(model: string): Result<ModelProviderConfig[]>;
declare function getModelProviders(model: string): Result<Set<ModelProviderName>>;
declare function getModelProviderEntriesByModel(model: string): Result<ModelProviderEntry[]>;
declare function getModelProviderEntry(model: string, provider: ModelProviderName): Result<ModelProviderEntry | null>;
export declare const getPtbEndpoints: (model: string) => Result<Endpoint[]>;
declare function getPtbEndpointsForProvider(provider: string): Result<{
    endpoint: Endpoint;
    model: ModelName;
}[]>;
declare function getModelProviderConfigByVersion(model: string, provider: ModelProviderName, version: string): Result<ModelProviderConfig | null>;
export declare const registry: {
    getAllModelIds: typeof getAllModelIds;
    getAllModelsWithIds: typeof getAllModelsWithIds;
    createPassthroughEndpoint: typeof createPassthroughEndpoint;
    getPtbEndpointsByProvider: typeof getPtbEndpointsByProvider;
    getPtbEndpoints: (model: string) => Result<Endpoint[]>;
    getProviderModels: typeof getProviderModels;
    buildEndpoint: typeof buildEndpoint;
    getModelProviderConfig: typeof getModelProviderConfig;
    getModelProviderConfigByProviderModelId: typeof getModelProviderConfigByProviderModelId;
    getPtbEndpointsForProvider: typeof getPtbEndpointsForProvider;
    getModelProviderConfigs: typeof getModelProviderConfigs;
    getModelProviders: typeof getModelProviders;
    getEndpointsByModel: typeof getEndpointsByModel;
    getModelProviderEntriesByModel: typeof getModelProviderEntriesByModel;
    getModelProviderEntry: typeof getModelProviderEntry;
    getModelProviderConfigByVersion: typeof getModelProviderConfigByVersion;
    getAuthorByModel: typeof getAuthorByModel;
};
export {};
