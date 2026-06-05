export declare const endpoints: {
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
