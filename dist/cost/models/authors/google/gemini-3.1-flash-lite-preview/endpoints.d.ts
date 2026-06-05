export declare const endpoints: {
    "gemini-3.1-flash-lite-preview:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
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
    "gemini-3.1-flash-lite-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3.1-flash-lite-preview:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-flash-lite-preview:helicone": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
