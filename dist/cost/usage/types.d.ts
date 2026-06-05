export interface ModalityUsage {
    input?: number;
    cachedInput?: number;
    output?: number;
}
export interface ModelUsage {
    input: number;
    output: number;
    cacheDetails?: {
        cachedInput: number;
        write5m?: number;
        write1h?: number;
    };
    cacheDurationHours?: number;
    thinking?: number;
    image?: ModalityUsage;
    audio?: ModalityUsage;
    video?: ModalityUsage;
    file?: ModalityUsage;
    web_search?: number;
    cost?: number;
}
