import { HeliconeRequest, MappedLLMRequest, MapperType } from "../types";
import { MapperFn } from "../mappers/types";
export declare const MAPPERS: Record<MapperType, MapperFn<any, any>>;
export declare const getMappedContent: ({ mapperType, heliconeRequest, }: {
    mapperType: MapperType;
    heliconeRequest: HeliconeRequest;
}) => MappedLLMRequest;
export declare const heliconeRequestToMappedContent: (heliconeRequest: HeliconeRequest) => MappedLLMRequest;
