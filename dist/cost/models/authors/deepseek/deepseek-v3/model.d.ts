export declare const models: {
    "deepseek-v3": {
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
    "deepseek-v3.1-terminus": {
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
    "deepseek-v3.2": {
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
export type DeepSeekV3ModelName = keyof typeof models;
