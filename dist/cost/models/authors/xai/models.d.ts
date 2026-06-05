export declare const models: {
    "grok-code-fast-1": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-4": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-4-fast-reasoning": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-4-fast-non-reasoning": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "audio")[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-4-1-fast-non-reasoning": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "Grok";
    };
    "grok-4-1-fast-reasoning": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-3": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
    "grok-3-mini": {
        name: string;
        author: "xai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Grok";
    };
};
export type GrokModelName = keyof typeof models;
