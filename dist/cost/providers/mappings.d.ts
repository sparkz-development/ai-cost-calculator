import { ModelDetailsMap, ModelRow } from "../interfaces/Cost";
export declare const azurePattern: RegExp;
export declare const providersNames: readonly ["OPENAI", "ANTHROPIC", "AZURE", "LOCAL", "HELICONE", "AMDBARTEK", "ANYSCALE", "CLOUDFLARE", "2YFV", "TOGETHER", "LEMONFOX", "FIREWORKS", "PERPLEXITY", "GOOGLE", "OPENROUTER", "WISDOMINANUTSHELL", "GROQ", "COHERE", "MISTRAL", "DEEPINFRA", "QSTASH", "FIRECRAWL", "AWS", "BEDROCK", "DEEPSEEK", "X", "AVIAN", "NEBIUS", "NOVITA", "OPENPIPE", "CHUTES", "LLAMA", "NVIDIA", "VERCEL", "CEREBRAS", "BASETEN", "CANOPYWAVE"];
export type ProviderName = (typeof providersNames)[number];
export type ModelNames = (typeof modelNames)[number];
export declare const providers: {
    pattern: RegExp;
    provider: ProviderName;
    costs?: ModelRow[];
    modelDetails?: ModelDetailsMap;
}[];
export declare const defaultProvider: {
    pattern: RegExp;
    provider: ProviderName;
    costs?: ModelRow[];
    modelDetails?: ModelDetailsMap;
};
export declare const allCosts: ModelRow[];
export declare const approvedDomains: RegExp[];
export declare const modelNames: string[];
export declare const parentModelNames: Record<"OPENAI" | "ANTHROPIC" | "AZURE" | "LOCAL" | "HELICONE" | "AMDBARTEK" | "ANYSCALE" | "CLOUDFLARE" | "2YFV" | "TOGETHER" | "LEMONFOX" | "FIREWORKS" | "PERPLEXITY" | "GOOGLE" | "OPENROUTER" | "WISDOMINANUTSHELL" | "GROQ" | "COHERE" | "MISTRAL" | "DEEPINFRA" | "QSTASH" | "FIRECRAWL" | "AWS" | "BEDROCK" | "DEEPSEEK" | "X" | "AVIAN" | "NEBIUS" | "NOVITA" | "OPENPIPE" | "CHUTES" | "LLAMA" | "NVIDIA" | "VERCEL" | "CEREBRAS" | "BASETEN" | "CANOPYWAVE", string[]>;
