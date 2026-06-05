export declare const models: {
    "claude-opus-4": {
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
export type ClaudeOpus4ModelName = keyof typeof models;
