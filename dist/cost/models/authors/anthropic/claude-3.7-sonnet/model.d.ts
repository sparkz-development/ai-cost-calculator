export declare const models: {
    "claude-3.7-sonnet": {
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
export type Claude37SonnetModelName = keyof typeof models;
