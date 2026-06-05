"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepSeekProvider = void 0;
const base_1 = require("./base");
class DeepSeekProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "DeepSeek";
        this.baseUrl = "https://api.deepseek.com";
        this.auth = "api-key";
        this.pricingPages = ["https://api-docs.deepseek.com/"];
        this.modelPages = ["https://api-docs.deepseek.com/"];
    }
    buildUrl(endpoint, requestParams) {
        return "https://api.deepseek.com/chat/completions";
    }
}
exports.DeepSeekProvider = DeepSeekProvider;
