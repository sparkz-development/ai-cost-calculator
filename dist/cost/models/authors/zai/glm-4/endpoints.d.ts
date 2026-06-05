export declare const endpoints: {
    "glm-4.6:novita": {
        providerModelId: string;
        provider: "novita";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.6:canopywave": {
        providerModelId: string;
        provider: "canopywave";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:novita": {
        providerModelId: string;
        provider: "novita";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:canopywave": {
        providerModelId: string;
        provider: "canopywave";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:fireworks": {
        providerModelId: string;
        provider: "fireworks";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.6:baseten": {
        providerModelId: string;
        provider: "baseten";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:baseten": {
        providerModelId: string;
        provider: "baseten";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "glm-4.7:cerebras": {
        providerModelId: string;
        provider: "cerebras";
        author: "zai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "bf16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "functions" | "logit_bias" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
