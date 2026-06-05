export declare const models: {
    "claude-opus-4-1-20250805": {
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
export type ClaudeOpus4120250805ModelName = keyof typeof models;
