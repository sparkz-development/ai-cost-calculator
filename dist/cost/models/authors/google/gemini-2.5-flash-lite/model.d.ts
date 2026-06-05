export declare const model: {
    "gemini-2.5-flash-lite": {
        name: string;
        author: "google";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Gemini";
    };
};
export type Gemini25FlashLiteModelName = keyof typeof model;
