export declare const endpoints: {
    "gemini-2.5-flash:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
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
    "gemini-2.5-flash:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
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
    "gemini-2.5-flash:openrouter": {
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
    "gemini-2.5-flash:helicone": {
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
