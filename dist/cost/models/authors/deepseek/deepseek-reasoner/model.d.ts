export declare const models: {
    "deepseek-reasoner": {
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
        tokenizer: "DeepSeek";
    };
    "deepseek-tng-r1t2-chimera": {
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
        tokenizer: "DeepSeek";
    };
};
export type DeepSeekReasonerModelName = keyof typeof models;
