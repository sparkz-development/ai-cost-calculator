export declare const endpoints: {
    "gemma2-9b-it:chutes": {
        providerModelId: string;
        provider: "chutes";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemma2-9b-it:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
