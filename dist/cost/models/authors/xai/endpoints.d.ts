export declare const endpoints: {
    "grok-code-fast-1:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-fast-reasoning:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        providerModelIdAliases: string[];
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-fast-non-reasoning:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-1-fast-non-reasoning:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-1-fast-reasoning:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3-mini:xai": {
        providerModelId: string;
        provider: "xai";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3-mini:openrouter": {
        provider: "openrouter";
        author: "xai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-fast-reasoning:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-fast-non-reasoning:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-1-fast-non-reasoning:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4-1-fast-reasoning:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "logprobs" | "response_format" | "seed" | "top_logprobs" | "reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-code-fast-1:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3-mini:helicone": {
        providerModelId: string;
        provider: "helicone";
        author: "xai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-3:openrouter": {
        provider: "openrouter";
        author: "xai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-4:openrouter": {
        provider: "openrouter";
        author: "xai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "grok-code-fast-1:openrouter": {
        provider: "openrouter";
        author: "xai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
