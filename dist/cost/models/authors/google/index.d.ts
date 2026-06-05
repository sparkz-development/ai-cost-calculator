/**
 * Google model registry aggregation
 * Combines all models and endpoints from subdirectories
 */
export declare const googleModels: {
    "gemma-3-12b-it": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemma2-9b-it": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3.1-flash-lite-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3-pro-image-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3-flash-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3.1-pro-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-3-pro-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-2.5-flash-lite": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-2.5-flash": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-2.5-pro": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
    "gemini-2.0-flash-exp": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "Gemini";
    };
};
export declare const googleEndpointConfig: {
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "response_format" | "seed" | "stop" | "top_k" | "repetition_penalty" | "min_p")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemma2-9b-it:chutes": {
        providerModelId: string;
        provider: "chutes";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "presence_penalty" | "seed" | "stop" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemma2-9b-it:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "frequency_penalty" | "logprobs" | "presence_penalty" | "seed" | "stop" | "top_logprobs" | "top_k" | "repetition_penalty")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-flash-lite-preview:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
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
    "gemini-3.1-flash-lite-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3.1-flash-lite-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-flash-lite-preview:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-flash-preview:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
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
    "gemini-3-flash-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3-flash-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-flash-preview:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-pro-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3.1-pro-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3.1-pro-preview:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-pro-preview:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
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
    "gemini-3-pro-preview:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-3-pro-preview:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-3-pro-preview:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-flash-lite:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
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
    "gemini-2.5-flash-lite:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-2.5-flash-lite:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-flash:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
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
    "gemini-2.5-flash:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: {
            threshold: number;
            input: number;
            output: number;
            audio: {
                input: number;
                cachedInputMultiplier: number;
            };
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-2.5-flash:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-flash:helicone": {
        provider: "helicone";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "gemini-2.5-pro:google-ai-studio": {
        providerModelId: string;
        provider: "google-ai-studio";
        author: "google";
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
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
    "gemini-2.5-pro:vertex": {
        providerModelId: string;
        provider: "vertex";
        author: "google";
        crossRegion: true;
        pricing: ({
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers: {
                cachedInput: number;
                write5m: number;
            };
            cacheStoragePerHour: number;
        } | {
            threshold: number;
            input: number;
            output: number;
            cacheMultipliers?: undefined;
            cacheStoragePerHour?: undefined;
        })[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop" | "reasoning" | "include_reasoning" | "structured_outputs")[];
        responseFormat: "GOOGLE";
        ptbEnabled: true;
        endpointConfigs: {
            global: {
                providerModelId: string;
            };
        };
    };
    "gemini-2.5-pro:openrouter": {
        provider: "openrouter";
        author: "google";
        providerModelId: string;
        pricing: {
            threshold: number;
            input: number;
            output: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "tools" | "tool_choice" | "response_format" | "seed" | "stop")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
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
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "response_format" | "seed" | "stop")[];
        ptbEnabled: false;
        endpointConfigs: {
            "*": {};
        };
    };
};
