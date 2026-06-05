export declare const models: {
    "kimi-k2.5": {
        name: string;
        author: "moonshotai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "MoonshotAI";
    };
};
export type KimiK25ModelName = keyof typeof models;
