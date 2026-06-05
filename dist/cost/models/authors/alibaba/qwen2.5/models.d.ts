export declare const models: {
    "qwen2.5-coder-7b-fast": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
};
export type Qwen25ModelName = keyof typeof models;
