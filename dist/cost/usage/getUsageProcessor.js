"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsageProcessor = getUsageProcessor;
const openAIUsageProcessor_1 = require("./openAIUsageProcessor");
const anthropicUsageProcessor_1 = require("./anthropicUsageProcessor");
const groqUsageProcessor_1 = require("./groqUsageProcessor");
const xaiUsageProcessor_1 = require("./xaiUsageProcessor");
const openRouterUsageProcessor_1 = require("./openRouterUsageProcessor");
const deepseekUsageProcessor_1 = require("./deepseekUsageProcessor");
const vertexUsageProcessor_1 = require("./vertexUsageProcessor");
const googleUsageProcessor_1 = require("./googleUsageProcessor");
const bedrockUsageProcessor_1 = require("./bedrockUsageProcessor");
function getUsageProcessor(provider) {
    switch (provider) {
        case "openai":
        case "azure":
        case "baseten":
        case "canopywave":
        case "chutes":
        case "deepinfra":
        case "helicone":
        case "mistral":
        case "nebius":
        case "novita":
        case "fireworks":
        case "cerebras":
        case "perplexity":
            return new openAIUsageProcessor_1.OpenAIUsageProcessor();
        case "anthropic":
            return new anthropicUsageProcessor_1.AnthropicUsageProcessor();
        case "groq":
            return new groqUsageProcessor_1.GroqUsageProcessor();
        case "xai":
            return new xaiUsageProcessor_1.XAIUsageProcessor();
        case "openrouter":
            return new openRouterUsageProcessor_1.OpenRouterUsageProcessor();
        case "deepseek":
            return new deepseekUsageProcessor_1.DeepSeekUsageProcessor();
        case "vertex":
            return new vertexUsageProcessor_1.VertexUsageProcessor();
        case "google-ai-studio":
            return new googleUsageProcessor_1.GoogleUsageProcessor();
        case "bedrock":
            return new bedrockUsageProcessor_1.BedrockUsageProcessor();
        default:
            return null;
    }
}
