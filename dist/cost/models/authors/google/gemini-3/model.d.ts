export declare const model: {
    "gemini-3-pro-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "audio" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
};
export type Gemini3ProPreviewModelName = keyof typeof model;
