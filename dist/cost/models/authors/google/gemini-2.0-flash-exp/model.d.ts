export declare const model: {
    "gemini-2.0-flash-exp": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: ("text" | "image")[];
        };
        tokenizer: "Gemini";
    };
};
export type Gemini20FlashExpModelName = keyof typeof model;
