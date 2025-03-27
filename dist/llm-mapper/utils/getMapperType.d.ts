import { HeliconeRequest, MapperType, Provider } from "../types";
export declare const getMapperTypeFromHeliconeRequest: (heliconeRequest: HeliconeRequest, model: string) => MapperType;
export declare const getMapperType: ({ model, provider, path, isAssistant, }: {
    model: string;
    provider: Provider;
    path?: string | null;
    isAssistant?: boolean;
}) => MapperType;
