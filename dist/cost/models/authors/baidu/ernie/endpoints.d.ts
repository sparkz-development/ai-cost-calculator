export declare const endpoints: {
    "ernie-4.5-21b-a3b-thinking:novita": {
        provider: "novita";
        author: "baidu";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp8";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "presence_penalty" | "frequency_penalty" | "top_k" | "repetition_penalty" | "seed" | "reasoning" | "min_p" | "logit_bias")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
