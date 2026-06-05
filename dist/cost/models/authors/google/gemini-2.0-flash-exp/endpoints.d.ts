export declare const endpoints: {
    "gemini-2.0-flash-exp:google-ai-studio": {
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
        ptbEnabled: false;
        responseFormat: "GOOGLE";
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.0-flash-exp:vertex": {
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
        ptbEnabled: false;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-2.0-flash-exp:openrouter": {
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
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
};
