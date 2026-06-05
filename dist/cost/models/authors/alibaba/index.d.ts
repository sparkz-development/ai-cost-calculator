/**
 * Alibaba model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
export declare const alibabaModels: {
    "qwen3-32b": {
        name: string;
        author: "alibaba";
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
    "qwen3-30b-a3b": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-coder": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "audio" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-next-80b-a3b-instruct": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-235b-a22b-thinking": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-vl-235b-a22b-instruct": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-coder-30b-a3b-instruct": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen2.5-coder-7b-fast": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
};
export declare const alibabaEndpointConfig: {
    "qwen3-32b:groq": {
        providerModelId: string;
        provider: "groq";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "reasoning" | "include_reasoning" | "min_p" | "logit_bias" | "logprobs" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-32b:openrouter": {
        providerModelId: string;
        provider: "openrouter";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "seed" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-30b-a3b:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp8";
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-coder:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp4";
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-coder:canopywave": {
        providerModelId: string;
        provider: "canopywave";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp8";
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-next-80b-a3b-instruct:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-235b-a22b-thinking:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        rateLimits: {
            rpm: number;
            tpm: number;
            tpd: number;
        };
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-235b-a22b-thinking:novita": {
        providerModelId: string;
        provider: "novita";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "functions" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-vl-235b-a22b-instruct:novita": {
        providerModelId: string;
        provider: "novita";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p" | "logit_bias" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen3-coder-30b-a3b-instruct:nebius": {
        providerModelId: string;
        provider: "nebius";
        author: "qwen";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "top_k" | "seed" | "logit_bias" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "qwen2.5-coder-7b-fast:nebius": {
        providerModelId: string;
        provider: "nebius";
        author: "alibaba";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "seed" | "logit_bias" | "logprobs" | "top_logprobs" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
