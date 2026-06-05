"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanopyWaveProvider = void 0;
const base_1 = require("./base");
class CanopyWaveProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Canopy Wave";
        this.baseUrl = "https://inference.canopywave.io/";
        this.auth = "api-key";
        this.pricingPages = ["https://canopywave.com/pricing"];
        this.modelPages = ["https://canopywave.com/models"];
    }
    buildUrl(endpoint, requestParams) {
        return `${this.baseUrl}v1/chat/completions`;
    }
}
exports.CanopyWaveProvider = CanopyWaveProvider;
