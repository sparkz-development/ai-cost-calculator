/**
 * OpenAI model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
export declare const openaiModels: {
    "gpt-image-1": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "GPT";
    };
    "gpt-image-1.5": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "GPT";
    };
    "gpt-oss-120b": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-oss-20b": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.4": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.4-2026-03-05": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5.2": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.2-pro": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.2-chat-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1-codex": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1-codex-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1-chat-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "codex-mini-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5.1-2025-11-13": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-nano": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-chat-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-pro": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-codex": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-5-2025-08-07": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5-mini-2025-08-07": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5-nano-2025-08-07": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-5-pro-2025-10-01": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
        pinnedVersionOfModel: string;
    };
    "gpt-4.1": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-4.1-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-4.1-nano": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "o4-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    o3: {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "o3-pro": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "o3-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    o1: {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "o1-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-4o": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "gpt-4o-mini": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "chatgpt-4o-latest": {
        name: string;
        author: "openai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
};
export declare const openaiEndpointConfig: {
    "gpt-image-1:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: "n"[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-image-1.5:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: "n"[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:groq": {
        providerModelId: string;
        provider: "groq";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "reasoning" | "include_reasoning" | "min_p" | "logit_bias" | "logprobs" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-20b:groq": {
        providerModelId: string;
        provider: "groq";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "reasoning" | "include_reasoning" | "min_p" | "logit_bias" | "logprobs" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-20b:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-20b:novita": {
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
        quantization: "bf16";
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "top_k" | "repetition_penalty" | "seed" | "reasoning" | "min_p" | "logit_bias" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp4";
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:cerebras": {
        providerModelId: string;
        provider: "cerebras";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "response_format" | "seed" | "logprobs" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-oss-120b:baseten": {
        providerModelId: string;
        provider: "baseten";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "max_tokens" | "tools" | "tool_choice" | "stop" | "response_format" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
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
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "logprobs" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "top_logprobs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed" | "logit_bias" | "logprobs" | "top_logprobs" | "verbosity")[];
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
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "logprobs" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "top_logprobs")[];
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
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
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
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "logprobs" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "top_logprobs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed" | "logit_bias" | "logprobs" | "top_logprobs" | "verbosity")[];
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
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "logprobs" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "top_logprobs")[];
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
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2:openai": {
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
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "logprobs" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed" | "logit_bias" | "logprobs" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-pro:openai": {
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
        supportedParameters: ("tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "verbosity")[];
        unsupportedParameters: ("temperature" | "top_p" | "max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-pro:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed" | "logit_bias" | "logprobs" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-chat-latest:openai": {
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
    "gpt-5.2-chat-latest:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed" | "logit_bias" | "logprobs" | "top_logprobs" | "verbosity")[];
        unsupportedParameters: never[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-5.2-chat-latest:helicone": {
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
    "gpt-5.2:helicone": {
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
    "gpt-5.2-pro:helicone": {
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
    "gpt-5.2:azure": {
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
        supportedParameters: ("temperature" | "top_p" | "tools" | "tool_choice" | "max_completion_tokens" | "stop" | "response_format" | "seed" | "logprobs" | "verbosity")[];
        unsupportedParameters: ("max_tokens" | "presence_penalty" | "frequency_penalty" | "logit_bias" | "top_logprobs")[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
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
    "gpt-4.1:openai": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-mini:openai": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-nano:openai": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1:azure": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-mini:azure": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-nano:azure": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-mini:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-nano:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1:helicone": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-nano:helicone": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4.1-mini:helicone": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o4-mini:openai": {
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
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o4-mini:azure": {
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
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o4-mini:openrouter": {
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
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o4-mini:helicone": {
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
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
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
    "o1:helicone": {
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
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "o1-mini:helicone": {
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
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o:openai": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o:azure": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o-mini:openai": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o-mini:azure": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "chatgpt-4o-latest:openai": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o-mini:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "chatgpt-4o-latest:openrouter": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o:helicone": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-4o-mini:helicone": {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
