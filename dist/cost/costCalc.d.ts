export declare function modelCost(modelRow: {
    provider: string;
    model: string;
    sum_prompt_tokens: number;
    prompt_cache_write_tokens: number;
    prompt_cache_read_tokens: number;
    prompt_audio_tokens: number;
    sum_completion_tokens: number;
    completion_audio_tokens: number;
    sum_tokens: number;
    per_call?: number;
    per_image?: number;
}): number;
