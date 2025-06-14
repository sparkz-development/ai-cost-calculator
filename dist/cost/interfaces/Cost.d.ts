/**
 *
 * DO NOT EDIT THIS FILE UNLESS IT IS IN /costs
 */
interface TextOperator {
    operator: "equals" | "startsWith" | "includes";
    value: string;
}
export interface ModelDetails {
    matches: string[];
    searchTerms: string[];
    info: {
        releaseDate: string;
        maxTokens?: number;
        description: string;
        tradeOffs: string[];
        benchmarks: {
            [key: string]: number;
        };
        capabilities: string[];
        strengths: string[];
        weaknesses: string[];
        recommendations: string[];
    };
}
export type ModelDetailsMap = {
    [key: string]: ModelDetails;
};
export interface ModelRow {
    model: TextOperator;
    cost: {
        prompt_token: number;
        completion_token: number;
        per_image?: number;
        per_call?: number;
        prompt_cache_write_token?: number;
        prompt_cache_read_token?: number;
        prompt_audio_token?: number;
        completion_audio_token?: number;
    };
    showInPlayground?: boolean;
    targetUrl?: string;
    dateRange?: {
        start: string;
        end: string;
    };
}
export {};
