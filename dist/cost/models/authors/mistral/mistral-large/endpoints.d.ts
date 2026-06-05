export declare const endpoints: {
    "mistral-large-2411:mistral": {
        providerModelId: string;
        provider: "mistral";
        author: "mistral";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
