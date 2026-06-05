export declare const endpoints: {
    "gemini-2.5-pro:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "response_format" | "seed" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: true;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-pro:vertex": {
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
                write5m: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
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
    "gemini-2.5-pro:openrouter": {
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
};
