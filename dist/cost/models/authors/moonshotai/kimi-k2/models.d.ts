export declare const models: {
    "kimi-k2-0711": {
        name: string;
        author: "moonshotai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "MoonshotAI";
    };
    "kimi-k2-0905": {
        name: string;
        author: "moonshotai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "MoonshotAI";
    };
    "kimi-k2-thinking": {
        name: string;
        author: "moonshotai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "MoonshotAI";
    };
};
export type KimiK2ModelName = keyof typeof models;
