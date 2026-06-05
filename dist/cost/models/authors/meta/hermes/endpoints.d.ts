export declare const endpoints: {
    "hermes-2-pro-llama-3-8b:novita": {
        providerModelId: string;
        provider: "novita";
        author: "meta-llama";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        quantization: "fp16";
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "functions" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
