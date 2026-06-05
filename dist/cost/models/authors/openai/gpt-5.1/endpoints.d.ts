export declare const endpoints: {
    "gpt-5.1:openai": {
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
    "gpt-5.1:openrouter": {
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
    "gpt-5.1-codex:openai": {
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
    "gpt-5.1-codex:openrouter": {
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
    "gpt-5.1-codex-mini:openai": {
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
    "gpt-5.1-codex-mini:openrouter": {
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
    "gpt-5.1-chat-latest:openai": {
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
    "gpt-5.1-chat-latest:openrouter": {
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
    "codex-mini-latest:openai": {
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
    "gpt-5.1-2025-11-13:openai": {
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
    "gpt-5.1-2025-11-13:azure": {
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
    "gpt-5.1-2025-11-13:openrouter": {
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
    "gpt-5.1-2025-11-13:helicone": {
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
    "gpt-5.1-2025-11-13:novita": {
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
};
