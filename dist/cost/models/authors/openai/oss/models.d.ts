export declare const models: {
    "gpt-oss-120b": {
        name: string;
        author: "openai";
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
    "gpt-oss-20b": {
        name: string;
        author: "openai";
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
export type GPTOSSModelName = keyof typeof models;
