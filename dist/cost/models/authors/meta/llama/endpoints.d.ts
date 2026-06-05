export declare const endpoints: {
    "llama-4-scout:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-maverick:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-maverick:novita": {
        providerModelId: string;
        provider: "novita";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-maverick:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-guard-4:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.3-70b-versatile:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instant:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-prompt-guard-2-86m:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-prompt-guard-2-22m:groq": {
        providerModelId: string;
        provider: "groq";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-scout:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-scout:novita": {
        provider: "novita";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-scout:deepinfra": {
        provider: "deepinfra";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-4-maverick:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-guard-4:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.3-70b-instruct:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.3-70b-instruct:nebius": {
        provider: "nebius";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instant:openrouter": {
        provider: "openrouter";
        author: "meta-llama";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instruct-turbo:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instruct-turbo:nebius": {
        providerModelId: string;
        provider: "nebius";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instruct:novita": {
        providerModelId: string;
        provider: "novita";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.1-8b-instruct:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "llama-3.3-70b-instruct:novita": {
        providerModelId: string;
        provider: "novita";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
