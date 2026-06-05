export declare const models: {
    "mistral-large-2411": {
        name: string;
        author: "mistral";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Mistral";
    };
};
export type MistralLargeModelName = keyof typeof models;
