export declare const endpoints: {
    "gpt-5:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini:azure": {
        providerModelId: string;
        provider: "azure";
        author: "openai";
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
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "structured_outputs")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-chat-latest:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-chat-latest:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
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
        rateLimits: {
            rpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: "max_completion_tokens"[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-chat-latest:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-codex:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-codex:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-codex:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs" | "verbosity")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
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
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
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
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
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
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-nano-2025-08-07:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-mini-2025-08-07:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-2025-08-07:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:openrouter": {
        provider: "openrouter";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5-pro-2025-10-01:novita": {
        provider: "novita";
        author: "openai";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
