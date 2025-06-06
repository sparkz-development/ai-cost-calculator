"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.parentModelNames = exports.modelNames = exports.approvedDomains = exports.allCosts = exports.defaultProvider = exports.playgroundModels = exports.providers = exports.providersNames = void 0;
const anthropic_1 = require("./anthropic");
const avian_1 = require("./avian");
const awsBedrock_1 = require("./awsBedrock");
const azure_1 = require("./azure");
const cohere_1 = require("./cohere");
const deepseek_1 = require("./deepseek");
const fireworks_1 = require("./fireworks");
const groq_1 = require("./groq");
const mistral_1 = require("./mistral");
const nebius_1 = require("./nebius");
const novita_1 = require("./novita");
const openai_1 = require("./openai");
const fine_tuned_models_1 = require("./openai/fine-tuned-models");
const openrouter_1 = require("./openrouter");
const perplexity_1 = require("./perplexity");
const qstash_1 = require("./qstash");
const chat_1 = require("./togetherai/chat");
const llama_1 = require("./togetherai/chat/llama");
const completion_1 = require("./togetherai/completion");
const x_1 = require("./x");
const google_1 = require("./google");
const openAiPattern = /^https:\/\/api\.openai\.com/;
const anthropicPattern = /^https:\/\/api\.anthropic\.com/;
const azurePattern = /^(https?:\/\/)?([^.]*\.)?(openai\.azure\.com|azure-api\.net|cognitiveservices\.azure\.com)(\/.*)?$/;
const localProxyPattern = /^http:\/\/127\.0\.0\.1:\d+\/v\d+\/?$/;
const heliconeProxyPattern = /^https:\/\/oai\.hconeai\.com/;
const amdbartekPattern = /^https:\/\/.*\.amdbartek\.dev/;
const anyscalePattern = /^https:\/\/api\.endpoints\.anyscale\.com/;
const cloudflareAiGatewayPattern = /^https:\/\/gateway\.ai\.cloudflare\.com/;
const twoYFV = /^https:\/\/api\.2yfv\.com/;
const togetherPattern = /^https:\/\/api\.together\.xyz/;
const lemonFox = /^https:\/\/api\.lemonfox\.ai/;
const fireworks = /^https:\/\/api\.fireworks\.ai/;
const perplexity = /^https:\/\/api\.perplexity\.ai/;
const googleapis = /^https:\/\/(.*\.)?googleapis\.com/;
// openrouter.ai or api.openrouter.ai
const openRouter = /^https:\/\/(api\.)?openrouter\.ai/;
//api.wisdominanutshell.academy
const wisdomInANutshell = /^https:\/\/api\.wisdominanutshell\.academy/;
// api.groq.com
const groq = /^https:\/\/api\.groq\.com/;
// cohere.ai
const cohere = /^https:\/\/api\.cohere\.ai/;
// api.mistral.ai
const mistral = /^https:\/\/api\.mistral\.ai/;
// https://api.deepinfra.com
const deepinfra = /^https:\/\/api\.deepinfra\.com/;
//https://qstash.upstash.io/llm
const qstash = /^https:\/\/qstash\.upstash\.io/;
//https://www.firecrawl.dev/
const firecrawl = /^https:\/\/api\.firecrawl\.dev/;
// https://bedrock-runtime.{some-region}.amazonaws.com/{something-after}
const awsBedrock = /^https:\/\/bedrock-runtime\.[a-z0-9-]+\.amazonaws\.com\/.*/;
// https://api.deepseek.com
const deepseek = /^https:\/\/api\.deepseek\.com/;
// https://api.x.ai
const x = /^https:\/\/api\.x\.ai/;
const avianPattern = /^https:\/\/api\.avian\.io/;
//https://api.studio.nebius.ai
const nebius = /^https:\/\/api\.studio\.nebius\.ai/;
// https://api.novita.ai
const novita = /^https:\/\/api\.novita\.ai/;
exports.providersNames = [
    "OPENAI",
    "ANTHROPIC",
    "AZURE",
    "LOCAL",
    "HELICONE",
    "AMDBARTEK",
    "ANYSCALE",
    "CLOUDFLARE",
    "2YFV",
    "TOGETHER",
    "LEMONFOX",
    "FIREWORKS",
    "PERPLEXITY",
    "GOOGLE",
    "OPENROUTER",
    "WISDOMINANUTSHELL",
    "GROQ",
    "COHERE",
    "MISTRAL",
    "DEEPINFRA",
    "QSTASH",
    "FIRECRAWL",
    "AWS",
    "DEEPSEEK",
    "X",
    "AVIAN",
    "NEBIUS",
    "NOVITA",
];
exports.providers = [
    {
        pattern: openAiPattern,
        provider: "OPENAI",
        costs: [...openai_1.openAIProvider.costs, ...fine_tuned_models_1.costs],
        modelDetails: openai_1.openAIProvider.modelDetails,
    },
    {
        pattern: anthropicPattern,
        provider: "ANTHROPIC",
        costs: anthropic_1.anthropicProvider.costs,
        modelDetails: anthropic_1.anthropicProvider.modelDetails,
    },
    {
        pattern: azurePattern,
        provider: "AZURE",
        costs: [...azure_1.costs, ...openai_1.openAIProvider.costs],
    },
    {
        pattern: nebius,
        provider: "NEBIUS",
        costs: nebius_1.costs,
    },
    {
        pattern: localProxyPattern,
        provider: "LOCAL",
    },
    {
        pattern: heliconeProxyPattern,
        provider: "HELICONE",
    },
    {
        pattern: amdbartekPattern,
        provider: "AMDBARTEK",
    },
    {
        pattern: anyscalePattern,
        provider: "ANYSCALE",
    },
    {
        pattern: cloudflareAiGatewayPattern,
        provider: "CLOUDFLARE",
    },
    {
        pattern: x,
        provider: "X",
        costs: x_1.costs,
    },
    {
        pattern: twoYFV,
        provider: "2YFV",
    },
    {
        pattern: togetherPattern,
        provider: "TOGETHER",
        costs: [
            ...chat_1.costs,
            ...llama_1.costs,
            ...completion_1.costs,
            ...completion_1.costs,
        ],
    },
    {
        pattern: lemonFox,
        provider: "LEMONFOX",
    },
    {
        pattern: fireworks,
        provider: "FIREWORKS",
        costs: fireworks_1.costs,
    },
    {
        pattern: perplexity,
        provider: "PERPLEXITY",
        costs: perplexity_1.costs,
    },
    {
        pattern: googleapis,
        provider: "GOOGLE",
        costs: google_1.googleProvider.costs,
        modelDetails: google_1.googleProvider.modelDetails,
    },
    {
        pattern: openRouter,
        provider: "OPENROUTER",
        costs: openrouter_1.costs,
    },
    {
        pattern: wisdomInANutshell,
        provider: "WISDOMINANUTSHELL",
    },
    {
        pattern: groq,
        provider: "GROQ",
        costs: groq_1.costs,
    },
    {
        pattern: cohere,
        provider: "COHERE",
        costs: cohere_1.costs,
    },
    {
        pattern: mistral,
        provider: "MISTRAL",
        costs: mistral_1.costs,
    },
    {
        pattern: deepinfra,
        provider: "DEEPINFRA",
    },
    {
        pattern: qstash,
        provider: "QSTASH",
        costs: qstash_1.costs,
    },
    {
        pattern: firecrawl,
        provider: "FIRECRAWL",
    },
    {
        pattern: awsBedrock,
        provider: "AWS",
        costs: awsBedrock_1.costs,
    },
    {
        pattern: deepseek,
        provider: "DEEPSEEK",
        costs: deepseek_1.costs,
    },
    {
        pattern: avianPattern,
        provider: "AVIAN",
        costs: avian_1.costs,
    },
    {
        pattern: novita,
        provider: "NOVITA",
        costs: novita_1.costs,
    },
];
exports.playgroundModels = (_a = exports.providers
    .map((provider) => {
    var _a;
    return (_a = provider.costs) === null || _a === void 0 ? void 0 : _a.filter((cost) => cost.showInPlayground).map((cost) => ({
        name: cost.model.value,
        provider: provider.provider,
    }));
})
    .flat()
    .filter((model) => model !== undefined)) !== null && _a !== void 0 ? _a : [];
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
exports.defaultProvider = exports.providers.find((provider) => provider.provider === "OPENAI");
exports.allCosts = exports.providers.flatMap((provider) => { var _a; return (_a = provider.costs) !== null && _a !== void 0 ? _a : []; });
exports.approvedDomains = exports.providers.map((provider) => provider.pattern);
exports.modelNames = exports.allCosts.map((cost) => cost.model.value);
exports.parentModelNames = exports.providers.reduce((acc, provider) => {
    if (provider.modelDetails) {
        acc[provider.provider] = Object.keys(provider.modelDetails);
    }
    return acc;
}, {});
