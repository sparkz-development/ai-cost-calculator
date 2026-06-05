"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XAIProvider = void 0;
const base_1 = require("./base");
class XAIProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "xAI";
        this.baseUrl = "https://api.x.ai";
        this.auth = "api-key";
        this.pricingPages = ["https://docs.x.ai/docs/pricing"];
        this.modelPages = ["https://docs.x.ai/docs/models"];
    }
    buildUrl(endpoint, requestParams) {
        return "https://api.x.ai/v1/chat/completions";
    }
}
exports.XAIProvider = XAIProvider;
