"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepInfraProvider = void 0;
const base_1 = require("./base");
class DeepInfraProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "DeepInfra";
        this.baseUrl = "https://api.deepinfra.com/";
        this.auth = "api-key";
        this.pricingPages = ["https://deepinfra.com/pricing/"];
        this.modelPages = ["https://deepinfra.com/models/"];
    }
    buildUrl(endpoint, requestParams) {
        return `${this.baseUrl}v1/openai/chat/completions`;
    }
}
exports.DeepInfraProvider = DeepInfraProvider;
