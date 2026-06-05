export declare const endpoints: {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty" | "reasoning" | "include_reasoning" | "min_p" | "structured_outputs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "functions" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p" | "structured_outputs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs" | "top_k")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
