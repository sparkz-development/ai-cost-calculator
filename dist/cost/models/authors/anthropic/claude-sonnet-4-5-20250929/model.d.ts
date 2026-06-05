export declare const models: {
    "claude-sonnet-4-5-20250929": {
        name: string;
        author: "anthropic";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Claude";
    };
};
export type ClaudeSonnet4520250929ModelName = keyof typeof models;
