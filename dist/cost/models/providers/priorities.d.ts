import type { ModelProviderName } from "./index";
/**
 * Provider priority configuration
 * Lower number = higher priority in the AI gateway routing
 *
 * Priority levels:
 * - 1: BYOK (Bring Your Own Key) - Reserved for user's own API keys
 * - 2: Helicone Provider - Helicone-hosted inference endpoints
 * - 3: Anthropic & OpenAI - Direct provider endpoints for premium providers
 * - 4: Other providers - All other third-party providers (default)
 */
export declare const PROVIDER_PRIORITIES: Record<ModelProviderName, number>;
/**
 * Default priority for providers not explicitly configured
 */
export declare const DEFAULT_PROVIDER_PRIORITY = 4;
/**
 * Get the default priority for a provider
 */
export declare function getProviderPriority(provider: ModelProviderName): number;
/**
 * Sort attempts by auth type (BYOK first), then cost, then provider priority
 */
export declare function sortAttemptsByPriority<T extends {
    authType: "byok" | "ptb";
    priority: number;
    endpoint: {
        pricing: Array<{
            input: number;
            output: number;
        }>;
    };
}>(attempts: T[]): T[];
