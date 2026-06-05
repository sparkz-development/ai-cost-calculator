export declare const models: {
    "glm-4.6": {
        name: string;
        author: "zai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Zai";
    };
    "glm-4.7": {
        name: string;
        author: "zai";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Zai";
    };
};
export type ZaiModelName = keyof typeof models;
