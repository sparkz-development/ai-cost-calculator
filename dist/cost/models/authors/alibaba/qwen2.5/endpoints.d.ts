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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "logprobs" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_logprobs" | "top_k" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
