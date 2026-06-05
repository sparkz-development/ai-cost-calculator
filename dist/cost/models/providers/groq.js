"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroqProvider = void 0;
const base_1 = require("./base");
class GroqProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Groq";
        this.baseUrl = "https://api.groq.com/openai/v1";
        this.auth = "api-key";
        this.pricingPages = [
            "https://console.groq.com/pricing",
            "https://groq.com/pricing/",
        ];
        this.modelPages = ["https://console.groq.com/docs/models"];
    }
    buildUrl(endpoint, requestParams) {
        return "https://api.groq.com/openai/v1/chat/completions";
    }
}
exports.GroqProvider = GroqProvider;
