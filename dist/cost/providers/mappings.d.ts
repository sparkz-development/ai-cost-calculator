import { ModelDetailsMap, ModelRow } from "../interfaces/Cost";
export declare const providersNames: readonly ["OPENAI", "ANTHROPIC", "AZURE", "LOCAL", "HELICONE", "AMDBARTEK", "ANYSCALE", "CLOUDFLARE", "2YFV", "TOGETHER", "LEMONFOX", "FIREWORKS", "PERPLEXITY", "GOOGLE", "OPENROUTER", "WISDOMINANUTSHELL", "GROQ", "COHERE", "MISTRAL", "DEEPINFRA", "QSTASH", "FIRECRAWL", "AWS", "DEEPSEEK", "X", "AVIAN", "NEBIUS", "NOVITA"];
export type ProviderName = (typeof providersNames)[number];
export type ModelNames = (typeof modelNames)[number];
export declare const providers: {
    pattern: RegExp;
    provider: ProviderName;
    costs?: ModelRow[];
    modelDetails?: ModelDetailsMap;
}[];
export declare const playgroundModels: {
    name: string;
    provider: ProviderName;
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
export declare const parentModelNames: Record<"OPENAI" | "ANTHROPIC" | "AZURE" | "LOCAL" | "HELICONE" | "AMDBARTEK" | "ANYSCALE" | "CLOUDFLARE" | "2YFV" | "TOGETHER" | "LEMONFOX" | "FIREWORKS" | "PERPLEXITY" | "GOOGLE" | "OPENROUTER" | "WISDOMINANUTSHELL" | "GROQ" | "COHERE" | "MISTRAL" | "DEEPINFRA" | "QSTASH" | "FIRECRAWL" | "AWS" | "DEEPSEEK" | "X" | "AVIAN" | "NEBIUS" | "NOVITA", string[]>;
