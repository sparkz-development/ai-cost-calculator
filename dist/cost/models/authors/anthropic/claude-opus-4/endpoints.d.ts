export declare const endpoints: {
    "claude-opus-4:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
        version: string;
        ptbEnabled: true;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
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
    "claude-opus-4:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-opus-4:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
        version: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        }[];
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
