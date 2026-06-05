export declare const model: {
    "gemini-3-pro-image-preview": {
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
export type Gemini3ProImagePreviewModelName = keyof typeof model;
