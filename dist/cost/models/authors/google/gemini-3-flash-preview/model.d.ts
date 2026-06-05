export declare const model: {
    "gemini-3-flash-preview": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "audio" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
};
export type Gemini3FlashPreviewModelName = keyof typeof model;
