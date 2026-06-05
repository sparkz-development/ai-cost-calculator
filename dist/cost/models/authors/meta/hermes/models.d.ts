export declare const models: {
    "hermes-2-pro-llama-3-8b": {
        name: string;
        author: "meta-llama";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Tekken";
    };
};
export type HermesModelName = keyof typeof models;
