export declare const models: {
    "o4-mini": {
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
export type O4ModelName = keyof typeof models;
