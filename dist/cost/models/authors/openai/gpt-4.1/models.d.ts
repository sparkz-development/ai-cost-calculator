export declare const models: {
    "gpt-4.1": {
        name: string;
        author: "openai";
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
    "gpt-4.1-mini": {
        name: string;
        author: "openai";
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
    "gpt-4.1-nano": {
        name: string;
        author: "openai";
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
};
export type GPT41ModelName = keyof typeof models;
