export declare const endpoints: {
    "gemma-3-12b-it:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "google";
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
