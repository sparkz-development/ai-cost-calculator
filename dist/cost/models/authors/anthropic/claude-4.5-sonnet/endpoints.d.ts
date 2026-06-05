export declare const endpoints: {
    "claude-4.5-sonnet:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-sonnet:vertex": {
        provider: "vertex";
        author: "anthropic";
        providerModelId: string;
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-4.5-sonnet:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-4.5-sonnet:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-sonnet:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
};
