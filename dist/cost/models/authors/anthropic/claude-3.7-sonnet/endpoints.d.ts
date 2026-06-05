export declare const endpoints: {
    "claude-3.7-sonnet:anthropic": {
        provider: "anthropic";
        author: "anthropic";
        providerModelId: string;
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        supportedPlugins: "web"[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3.7-sonnet:vertex": {
        provider: "vertex";
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
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            global: {};
        };
    };
    "claude-3.7-sonnet:bedrock": {
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
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "us-east-1": {};
        };
    };
    "claude-3.7-sonnet:openrouter": {
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
    "claude-3.7-sonnet:deepinfra": {
        provider: "deepinfra";
        author: "anthropic";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-3.7-sonnet:helicone": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
};
