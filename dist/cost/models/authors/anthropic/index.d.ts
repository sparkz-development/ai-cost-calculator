/**
 * Anthropic model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
export declare const anthropicModels: {
    "claude-4.6-sonnet": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-4.6-opus": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-4.5-opus": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-opus-4-1-20250805": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-haiku-4-5-20251001": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-sonnet-4-5-20250929": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-4.5-haiku": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-4.5-sonnet": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-3-haiku-20240307": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-3.5-haiku": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-3.5-sonnet-v2": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-3.7-sonnet": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-sonnet-4": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-opus-4": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
    "claude-opus-4-1": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
};
export declare const anthropicEndpointConfig: {
    "claude-4.6-sonnet:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
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
    "claude-4.6-sonnet:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
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
    "claude-4.6-sonnet:bedrock": {
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
    "claude-4.6-sonnet:helicone": {
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
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.6-opus:anthropic": {
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
    "claude-4.6-opus:vertex": {
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
    "claude-4.6-opus:bedrock": {
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
    "claude-4.6-opus:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        providerModelIdAliases: string[];
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
    "claude-4.6-opus:helicone": {
        provider: "helicone";
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
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-4.5-opus:anthropic": {
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
    "claude-4.5-opus:vertex": {
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
    "claude-4.5-opus:bedrock": {
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
    "claude-4.5-opus:openrouter": {
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
    "claude-4.5-opus:helicone": {
        provider: "helicone";
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
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "reasoning" | "include_reasoning")[];
        ptbEnabled: true;
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-opus-4-1-20250805:anthropic": {
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
    "claude-opus-4-1-20250805:vertex": {
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
    "claude-opus-4-1-20250805:bedrock": {
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
    "claude-opus-4-1-20250805:openrouter": {
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
    "claude-opus-4-1-20250805:helicone": {
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
    "claude-haiku-4-5-20251001:anthropic": {
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
    "claude-haiku-4-5-20251001:vertex": {
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
    "claude-haiku-4-5-20251001:bedrock": {
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
    "claude-haiku-4-5-20251001:openrouter": {
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
    "claude-haiku-4-5-20251001:helicone": {
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
    "claude-sonnet-4-5-20250929:anthropic": {
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
    "claude-sonnet-4-5-20250929:vertex": {
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
    "claude-sonnet-4-5-20250929:bedrock": {
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
    "claude-sonnet-4-5-20250929:openrouter": {
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
    "claude-sonnet-4-5-20250929:helicone": {
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
    "claude-3-haiku-20240307:anthropic": {
        provider: "anthropic";
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
    "claude-3-haiku-20240307:helicone": {
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
    "claude-3.5-haiku:anthropic": {
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
    "claude-3.5-haiku:vertex": {
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
    "claude-3.5-haiku:bedrock": {
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
    "claude-3.5-haiku:openrouter": {
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
    "claude-3.5-haiku:helicone": {
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
    "claude-3.5-sonnet-v2:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
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
    "claude-3.5-sonnet-v2:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "anthropic";
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
            global: {
                providerModelId: string;
            };
        };
    };
    "claude-3.5-sonnet-v2:bedrock": {
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
    "claude-3.5-sonnet-v2:openrouter": {
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
    "claude-3.5-sonnet-v2:helicone": {
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
        responseFormat: "ANTHROPIC";
        endpointConfigs: {
            "*": {};
        };
    };
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
    "claude-sonnet-4:anthropic": {
        providerModelId: string;
        provider: "anthropic";
        author: "anthropic";
        version: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
                write1h: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
            cacheMultipliers?: undefined;
        })[];
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
    "claude-sonnet-4:vertex": {
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
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
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
    "claude-sonnet-4:bedrock": {
        provider: "bedrock";
        author: "anthropic";
        providerModelId: string;
        version: string;
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
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
    "claude-sonnet-4:openrouter": {
        provider: "openrouter";
        author: "anthropic";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            web_search?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "claude-sonnet-4:helicone": {
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
    "claude-opus-4-1:anthropic": {
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
    "claude-opus-4-1:vertex": {
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
    "claude-opus-4-1:bedrock": {
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
    "claude-opus-4-1:openrouter": {
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
    "claude-opus-4-1:helicone": {
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
