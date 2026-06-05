"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireworksProvider = void 0;
const base_1 = require("./base");
class FireworksProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Fireworks";
        this.baseUrl = "https://api.fireworks.ai/";
        this.auth = "api-key";
        this.pricingPages = ["https://fireworks.ai/pricing/"];
        this.modelPages = ["https://fireworks.ai/models/"];
    }
    buildUrl() {
        return `${this.baseUrl}inference/v1/chat/completions`;
    }
}
exports.FireworksProvider = FireworksProvider;
