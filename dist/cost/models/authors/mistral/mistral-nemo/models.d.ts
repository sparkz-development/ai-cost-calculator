export declare const models: {
    "mistral-nemo": {
        name: string;
        author: "mistral";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Mistral";
    };
};
export type MistralNemoModelName = keyof typeof models;
