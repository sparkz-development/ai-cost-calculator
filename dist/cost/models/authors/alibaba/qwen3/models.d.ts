export declare const models: {
    "qwen3-32b": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "GPT";
    };
    "qwen3-30b-a3b": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-coder": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "audio" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-next-80b-a3b-instruct": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-235b-a22b-thinking": {
        name: string;
        author: "qwen";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-vl-235b-a22b-instruct": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: ("text" | "image" | "video")[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
    "qwen3-coder-30b-a3b-instruct": {
        name: string;
        author: "alibaba";
        description: string;
        contextLength: number;
        maxOutputTokens: number;
        created: string;
        modality: {
            inputs: "text"[];
            outputs: "text"[];
        };
        tokenizer: "Qwen";
    };
};
export type Qwen3ModelName = keyof typeof models;
