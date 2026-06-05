export declare const endpoints: {
    "gemini-3-pro-image-preview:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            image: {
                input: number;
                output: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "response_format" | "seed")[];
        rateLimits: {
            rpm: number;
            tpm: number;
        };
        ptbEnabled: true;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-pro-image-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            image: {
                input: number;
                output: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "response_format" | "seed")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3-pro-image-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            image: {
                input: number;
                output: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "response_format" | "seed")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
