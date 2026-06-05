export declare const models: {
    "llama-4-scout": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-4-maverick": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-guard-4": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.3-70b-versatile": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.3-70b-instruct": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.1-8b-instant": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-prompt-guard-2-86m": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-prompt-guard-2-22m": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.1-8b-instruct": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "llama-3.1-8b-instruct-turbo": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
};
export type LlamaModelName = keyof typeof models;
