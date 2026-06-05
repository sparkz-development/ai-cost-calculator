export declare const endpoints: {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "stream" | "seed" | "functions" | "function_call" | "logprobs" | "top_logprobs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "stream" | "seed" | "functions" | "function_call" | "logprobs" | "top_logprobs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "top_k" | "repetition_penalty" | "seed" | "functions" | "reasoning" | "min_p" | "logit_bias" | "structured_outputs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "top_k" | "repetition_penalty" | "seed" | "min_p" | "logit_bias")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "response_format" | "top_k" | "structured_outputs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "top_k" | "repetition_penalty" | "seed" | "min_p" | "logit_bias")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
