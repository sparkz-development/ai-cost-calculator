import { AnthropicProvider } from "./anthropic";
import { AzureOpenAIProvider } from "./azure";
import { BasetenProvider } from "./baseten";
import { BedrockProvider } from "./bedrock";
import { CanopyWaveProvider } from "./canopywave";
import { CerebrasProvider } from "./cerebras";
import { ChutesProvider } from "./chutes";
import { DeepInfraProvider } from "./deepinfra";
import { DeepSeekProvider } from "./deepseek";
import { FireworksProvider } from "./fireworks";
import { GoogleProvider } from "./google";
import { GroqProvider } from "./groq";
import { HeliconeProvider } from "./helicone";
import { MistralProvider } from "./mistral";
import { NebiusProvider } from "./nebius";
import { NovitaProvider } from "./novita";
import { OpenAIProvider } from "./openai";
import { OpenRouterProvider } from "./openrouter";
import { PerplexityProvider } from "./perplexity";
import { VertexProvider } from "./vertex";
import { XAIProvider } from "./xai";
export declare const providers: {
    readonly baseten: BasetenProvider;
    readonly anthropic: AnthropicProvider;
    readonly azure: AzureOpenAIProvider;
    readonly bedrock: BedrockProvider;
    readonly canopywave: CanopyWaveProvider;
    readonly cerebras: CerebrasProvider;
    readonly chutes: ChutesProvider;
    readonly deepinfra: DeepInfraProvider;
    readonly deepseek: DeepSeekProvider;
    readonly fireworks: FireworksProvider;
    readonly "google-ai-studio": GoogleProvider;
    readonly groq: GroqProvider;
    readonly helicone: HeliconeProvider;
    readonly mistral: MistralProvider;
    readonly nebius: NebiusProvider;
    readonly novita: NovitaProvider;
    readonly openai: OpenAIProvider;
    readonly openrouter: OpenRouterProvider;
    readonly perplexity: PerplexityProvider;
    readonly vertex: VertexProvider;
    readonly xai: XAIProvider;
};
export type ModelProviderName = keyof typeof providers;
/**
 * Providers that support the context editing feature.
 * Context editing allows automatic management of conversation context,
 * clearing old tool uses and thinking blocks to optimize costs and stay
 * within context window limits.
 *
 * Currently only Anthropic models support this feature.
 * @see https://docs.anthropic.com/en/docs/build-with-claude/context-editing
 */
export declare const ContextEditingEnabledProviders: ModelProviderName[];
export declare const ResponsesAPIEnabledProviders: ModelProviderName[];
export { BaseProvider } from "./base";
export { nativelySupportsResponsesAPI } from "./utils";
