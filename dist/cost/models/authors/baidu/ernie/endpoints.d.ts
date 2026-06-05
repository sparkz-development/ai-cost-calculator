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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logit_bias" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty" | "reasoning" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
