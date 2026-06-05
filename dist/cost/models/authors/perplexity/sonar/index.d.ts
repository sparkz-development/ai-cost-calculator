/**
 * Perplexity model registry aggregation
 * Combines all models and endpoints from Perplexity
 */
import { models as perplexityModels } from "./models";
export { perplexityModels };
export declare const perplexityEndpointConfig: {
    "sonar:perplexity": {
        providerModelId: string;
        provider: "perplexity";
        author: "perplexity";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "frequency_penalty" | "response_format")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "sonar-pro:perplexity": {
        providerModelId: string;
        provider: "perplexity";
        author: "perplexity";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "frequency_penalty" | "response_format")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "sonar-reasoning:perplexity": {
        providerModelId: string;
        provider: "perplexity";
        author: "perplexity";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "frequency_penalty" | "response_format" | "reasoning")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "sonar-reasoning-pro:perplexity": {
        providerModelId: string;
        provider: "perplexity";
        author: "perplexity";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "frequency_penalty" | "response_format" | "reasoning")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
    "sonar-deep-research:perplexity": {
        providerModelId: string;
        provider: "perplexity";
        author: "perplexity";
        pricing: {
            threshold: number;
            input: number;
            output: number;
            request: number;
            web_search: number;
        }[];
        contextLength: number;
        maxCompletionTokens: number;
        supportedParameters: ("temperature" | "top_p" | "max_tokens" | "stop" | "frequency_penalty" | "response_format" | "reasoning")[];
        ptbEnabled: true;
        endpointConfigs: {
            "*": {};
        };
    };
};
