export declare const endpoints: {
    "gpt-5.4:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4:openrouter": {
        provider: "openrouter";
        author: "openai";
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "max_completion_tokens" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
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
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4-2026-03-05:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
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
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4-2026-03-05:openrouter": {
        provider: "openrouter";
        author: "openai";
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "max_completion_tokens" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4-2026-03-05:azure": {
        provider: "azure";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
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
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "logprobs" | "max_completion_tokens" | "response_format" | "seed" | "stop" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.4-2026-03-05:helicone": {
        provider: "helicone";
        author: "openai";
        providerModelId: string;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            web_search: number;
            cacheMultipliers: {
                cachedInput: number;
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
        supportedParameters: ("max_completion_tokens" | "stop")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
