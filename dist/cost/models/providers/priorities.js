"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PROVIDER_PRIORITY = exports.PROVIDER_PRIORITIES = void 0;
exports.getProviderPriority = getProviderPriority;
exports.sortAttemptsByPriority = sortAttemptsByPriority;
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
exports.PROVIDER_PRIORITIES = {
    // Priority 1: BYOK (Bring Your Own Key) - Reserved for user's own API keys
    // Priority 2: Helicone-hosted inference
    helicone: 2,
    // Priority 3: Premium direct providers
    anthropic: 3,
    openai: 3,
    // Priority 4: All other providers (default)
    azure: 4,
    baseten: 4,
    bedrock: 4,
    canopywave: 4,
    cerebras: 4,
    chutes: 4,
    deepinfra: 4,
    deepseek: 4,
    fireworks: 4,
    groq: 4,
    mistral: 4,
    nebius: 4,
    novita: 4,
    perplexity: 4,
    vertex: 4,
    xai: 4,
    // Priority 5: Secondary primary providers
    "google-ai-studio": 5,
    // Priority 10: OpenRouter - for fallback only
    openrouter: 10,
};
/**
 * Default priority for providers not explicitly configured
 */
exports.DEFAULT_PROVIDER_PRIORITY = 4;
/**
 * Get the default priority for a provider
 */
function getProviderPriority(provider) {
    var _a;
    return (_a = exports.PROVIDER_PRIORITIES[provider]) !== null && _a !== void 0 ? _a : exports.DEFAULT_PROVIDER_PRIORITY;
}
/**
 * Sort attempts by auth type (BYOK first), then cost, then provider priority
 */
function sortAttemptsByPriority(attempts) {
    return attempts.sort((a, b) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        // BYOK always comes before PTB
        if (a.authType === "byok" && b.authType !== "byok")
            return -1;
        if (a.authType !== "byok" && b.authType === "byok")
            return 1;
        // Within PTB, sort by cost (lowest first)
        if (a.authType === "ptb" && b.authType === "ptb") {
            const aCost = ((_b = (_a = a.endpoint.pricing[0]) === null || _a === void 0 ? void 0 : _a.input) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = a.endpoint.pricing[0]) === null || _c === void 0 ? void 0 : _c.output) !== null && _d !== void 0 ? _d : 0);
            const bCost = ((_f = (_e = b.endpoint.pricing[0]) === null || _e === void 0 ? void 0 : _e.input) !== null && _f !== void 0 ? _f : 0) + ((_h = (_g = b.endpoint.pricing[0]) === null || _g === void 0 ? void 0 : _g.output) !== null && _h !== void 0 ? _h : 0);
            // If costs are different, sort by cost
            if (aCost !== bCost) {
                return aCost - bCost;
            }
            // Within same cost, sort by provider priority
            return a.priority - b.priority;
        }
        // For BYOK, sort by provider priority
        return a.priority - b.priority;
    });
}
