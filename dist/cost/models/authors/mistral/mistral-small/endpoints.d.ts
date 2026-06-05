export declare const endpoints: {
    "mistral-small:deepinfra": {
        providerModelId: string;
        provider: "deepinfra";
        author: "mistral";
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "response_format" | "top_k" | "repetition_penalty" | "seed" | "min_p")[];
        ptbEnabled: true;
        quantization: "fp8";
        endpointConfigs: {
            "*": {};
        };
    };
};
