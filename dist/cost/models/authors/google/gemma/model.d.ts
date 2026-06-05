export declare const model: {
    "gemma2-9b-it": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
};
export type GemmaModelName = keyof typeof model;
