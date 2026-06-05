export declare const model: {
    "gemini-2.5-flash": {
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
export type Gemini25FlashModelName = keyof typeof model;
