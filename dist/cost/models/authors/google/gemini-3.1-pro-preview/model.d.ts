export declare const model: {
    "gemini-3.1-pro-preview": {
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
export type Gemini31ProPreviewModelName = keyof typeof model;
