"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CerebrasProvider = void 0;
const base_1 = require("./base");
class CerebrasProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Cerebras";
        this.baseUrl = "https://api.cerebras.ai/";
        this.auth = "api-key";
        this.pricingPages = ["https://www.cerebras.ai/pricing"];
        this.modelPages = ["https://inference-docs.cerebras.ai/models/overview/"];
    }
    buildUrl(endpoint, requestParams) {
        return `${this.baseUrl}v1/chat/completions`;
    }
}
exports.CerebrasProvider = CerebrasProvider;
