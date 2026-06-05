export declare const models: {
    "claude-haiku-4-5-20251001": {
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
export type ClaudeHaiku4520251001ModelName = keyof typeof models;
