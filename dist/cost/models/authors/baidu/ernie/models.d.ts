export declare const models: {
    "ernie-4.5-21b-a3b-thinking": {
        name: string;
        author: "baidu";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Baidu";
    };
};
export type ErnieModelName = keyof typeof models;
