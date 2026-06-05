export declare const models: {
    "mistral-small": {
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
export type MistralSmallModelName = keyof typeof models;
