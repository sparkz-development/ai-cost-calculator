/**
 * DeepSeek model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
export declare const deepseekModels: {
    "deepseek-reasoner": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-tng-r1t2-chimera": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-v3": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-v3.1-terminus": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-v3.2": {
        name: string;
        author: "deepseek";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "DeepSeek";
    };
    "deepseek-r1-distill-llama-70b": {
        name: string;
        author: "deepseek";
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
};
export declare const deepseekEndpointConfig: {
    "deepseek-reasoner:deepseek": {
        provider: "deepseek";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        quantization: "fp4";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stream" | "frequency_penalty" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-reasoner:openrouter": {
        provider: "openrouter";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stream" | "frequency_penalty" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-reasoner:deepinfra": {
        provider: "deepinfra";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-tng-r1t2-chimera:chutes": {
        provider: "chutes";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "frequency_penalty" | "functions" | "logit_bias" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3:deepseek": {
        provider: "deepseek";
        author: "deepseek";
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "function_call" | "stream" | "frequency_penalty" | "functions" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3:deepinfra": {
        provider: "deepinfra";
        author: "deepseek";
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp4";
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3:openrouter": {
        provider: "openrouter";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "function_call" | "stream" | "frequency_penalty" | "functions" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.1-terminus:deepinfra": {
        provider: "deepinfra";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        quantization: "fp4";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.1-terminus:novita": {
        provider: "novita";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.2:novita": {
        provider: "novita";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.2:baseten": {
        provider: "baseten";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "stop" | "top_k" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-v3.2:canopywave": {
        provider: "canopywave";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-r1-distill-llama-70b:groq": {
        providerModelId: string;
        provider: "groq";
        author: "deepseek";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty" | "reasoning" | "include_reasoning" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-r1-distill-llama-70b:openrouter": {
        provider: "openrouter";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-r1-distill-llama-70b:deepinfra": {
        provider: "deepinfra";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        quantization: "fp8";
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "deepseek-r1-distill-llama-70b:chutes": {
        provider: "chutes";
        author: "deepseek";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "seed" | "stop" | "top_k" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
