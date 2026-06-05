export declare const endpoints: {
    "o3:openai": {
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-pro:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-mini:openai": {
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-mini:azure": {
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
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "response_format" | "seed")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3:openrouter": {
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
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-mini:openrouter": {
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
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-pro:openrouter": {
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
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3:helicone": {
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
        supportedParameters: "max_tokens"[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-mini:helicone": {
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
        supportedParameters: "max_tokens"[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o3-pro:helicone": {
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
        supportedParameters: "max_tokens"[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "n" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
