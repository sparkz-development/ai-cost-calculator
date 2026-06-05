export declare const models: {
    "deepseek-r1-distill-llama-70b": {
        name: string;
        author: "deepseek";
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
export type DeepSeekR1ModelName = keyof typeof models;
