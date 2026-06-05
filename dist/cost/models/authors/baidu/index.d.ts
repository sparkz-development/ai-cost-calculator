/**
 * Baidu model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
export declare const baiduModels: {
    "ernie-4.5-21b-a3b-thinking": {
        name: string;
        author: "baidu";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Baidu";
    };
};
export declare const baiduEndpointConfig: {
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
