export declare const endpoints: {
    "gemini-3.1-pro-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "response_format" | "seed" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3.1-pro-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-pro-preview:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "response_format" | "seed" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
