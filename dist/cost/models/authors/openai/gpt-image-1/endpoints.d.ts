export declare const endpoints: {
    "gpt-image-1:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: "n"[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
    "gpt-image-1.5:openai": {
        providerModelId: string;
        provider: "openai";
        author: "openai";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        supportedParameters: "n"[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
};
