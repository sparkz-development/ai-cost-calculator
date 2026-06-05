"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerplexityProvider = void 0;
const base_1 = require("./base");
class PerplexityProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Perplexity";
        this.baseUrl = "https://api.perplexity.ai";
        this.auth = "api-key";
        this.pricingPages = ["https://docs.perplexity.ai/guides/pricing"];
        this.modelPages = ["https://docs.perplexity.ai/guides/models"];
    }
    buildUrl(endpoint, requestParams) {
        return "https://api.perplexity.ai/chat/completions";
    }
    async buildErrorMessage(response) {
        var _a;
        try {
            const respJson = (await response.json());
            return {
                message: ((_a = respJson.error) === null || _a === void 0 ? void 0 : _a.message) || `Request failed with status ${response.status}`
            };
        }
        catch (error) {
            return { message: `Request failed with status ${response.status}` };
        }
    }
}
exports.PerplexityProvider = PerplexityProvider;
