"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChutesProvider = void 0;
const base_1 = require("./base");
class ChutesProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Chutes";
        this.baseUrl = "https://api.chutes.ai/";
        this.auth = "api-key";
        this.pricingPages = ["https://chutes.ai/pricing/"];
        this.modelPages = ["https://chutes.ai/app"];
    }
    buildUrl() {
        return `https://llm.chutes.ai/v1/chat/completions`;
    }
    async buildErrorMessage(response) {
        var _a;
        try {
            const respJson = (await response.json());
            return {
                message: ((_a = respJson.detail) === null || _a === void 0 ? void 0 : _a.message) || `Request failed with status ${response.status}`
            };
        }
        catch (error) {
            return { message: `Request failed with status ${response.status}` };
        }
    }
}
exports.ChutesProvider = ChutesProvider;
