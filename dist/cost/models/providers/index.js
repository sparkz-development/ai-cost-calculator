"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nativelySupportsResponsesAPI = exports.BaseProvider = exports.ResponsesAPIEnabledProviders = exports.ContextEditingEnabledProviders = exports.providers = void 0;
const anthropic_1 = require("./anthropic");
const azure_1 = require("./azure");
const baseten_1 = require("./baseten");
const bedrock_1 = require("./bedrock");
const canopywave_1 = require("./canopywave");
const cerebras_1 = require("./cerebras");
const chutes_1 = require("./chutes");
const deepinfra_1 = require("./deepinfra");
const deepseek_1 = require("./deepseek");
const fireworks_1 = require("./fireworks");
const google_1 = require("./google");
const groq_1 = require("./groq");
const helicone_1 = require("./helicone");
const mistral_1 = require("./mistral");
const nebius_1 = require("./nebius");
const novita_1 = require("./novita");
const openai_1 = require("./openai");
const openrouter_1 = require("./openrouter");
const perplexity_1 = require("./perplexity");
const vertex_1 = require("./vertex");
const xai_1 = require("./xai");
// Create singleton instances (stateless, so safe to share)
exports.providers = {
    baseten: new baseten_1.BasetenProvider(),
    anthropic: new anthropic_1.AnthropicProvider(),
    azure: new azure_1.AzureOpenAIProvider(),
    bedrock: new bedrock_1.BedrockProvider(),
    canopywave: new canopywave_1.CanopyWaveProvider(),
    cerebras: new cerebras_1.CerebrasProvider(),
    chutes: new chutes_1.ChutesProvider(),
    deepinfra: new deepinfra_1.DeepInfraProvider(),
    deepseek: new deepseek_1.DeepSeekProvider(),
    fireworks: new fireworks_1.FireworksProvider(),
    "google-ai-studio": new google_1.GoogleProvider(),
    groq: new groq_1.GroqProvider(),
    helicone: new helicone_1.HeliconeProvider(),
    mistral: new mistral_1.MistralProvider(),
    nebius: new nebius_1.NebiusProvider(),
    novita: new novita_1.NovitaProvider(),
    openai: new openai_1.OpenAIProvider(),
    openrouter: new openrouter_1.OpenRouterProvider(),
    perplexity: new perplexity_1.PerplexityProvider(),
    vertex: new vertex_1.VertexProvider(),
    xai: new xai_1.XAIProvider()
};
/**
 * Providers that support the context editing feature.
 * Context editing allows automatic management of conversation context,
 * clearing old tool uses and thinking blocks to optimize costs and stay
 * within context window limits.
 *
 * Currently only Anthropic models support this feature.
 * @see https://docs.anthropic.com/en/docs/build-with-claude/context-editing
 */
exports.ContextEditingEnabledProviders = [
    "anthropic",
];
// TODO: temporarily whitelist responses API providers until all mappings are done
exports.ResponsesAPIEnabledProviders = [
    "openai",
    "helicone",
    "anthropic",
    "bedrock",
    "google-ai-studio",
    // chat completions only
    "azure",
    "chutes",
    "deepinfra",
    "deepseek",
    // has known issues with returning structured JSONS
    // should be okay to enable, but its not stable enough to add without request
    // "google-ai-studio",
    "cerebras",
    "groq",
    "mistral",
    "nebius",
    "novita",
    "openrouter",
    "perplexity",
    "xai",
    "baseten",
    "fireworks",
    // anthropic and chat completions provider
    "vertex"
    // anthropic only
    // none right now, need anthropic mapper
];
// Re-export base for extending
var base_1 = require("./base");
Object.defineProperty(exports, "BaseProvider", { enumerable: true, get: function () { return base_1.BaseProvider; } });
// Re-export utilities
var utils_1 = require("./utils");
Object.defineProperty(exports, "nativelySupportsResponsesAPI", { enumerable: true, get: function () { return utils_1.nativelySupportsResponsesAPI; } });
