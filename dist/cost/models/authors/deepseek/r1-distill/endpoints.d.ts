export declare const endpoints: {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "top_k" | "repetition_penalty" | "seed" | "reasoning" | "include_reasoning" | "min_p" | "logit_bias" | "logprobs" | "top_logprobs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "stop" | "presence_penalty" | "frequency_penalty" | "seed" | "logprobs" | "top_logprobs")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "top_k" | "seed" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
