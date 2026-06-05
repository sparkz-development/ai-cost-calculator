export declare const endpoints: {
    "claude-4.5-haiku:anthropic": {
        provider: "anthropic";
        author: "anthropic";
        providerModelId: string;
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-4.5-haiku:vertex": {
        provider: "vertex";
        author: "anthropic";
        providerModelId: string;
        crossRegion: false;
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "us-east5": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-4.5-haiku:bedrock": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "us-east-1": {};
        };
        responseFormat: "ANTHROPIC";
    };
    "claude-4.5-haiku:openrouter": {
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
    "claude-4.5-haiku:helicone": {
        provider: "helicone";
        author: "anthropic";
        providerModelId: string;
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
        responseFormat: "ANTHROPIC";
    };
};
