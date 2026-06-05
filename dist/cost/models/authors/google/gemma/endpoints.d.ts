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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "top_k" | "repetition_penalty" | "seed")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "top_k" | "repetition_penalty" | "seed" | "logprobs" | "top_logprobs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
