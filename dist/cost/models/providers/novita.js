"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NovitaProvider = void 0;
const base_1 = require("./base");
class NovitaProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Novita";
        this.baseUrl = "https://api.novita.ai/openai/v1";
        this.auth = "api-key";
        this.pricingPages = ["https://novita.ai/pricing/"];
        this.modelPages = ["https://novita.ai/models/"];
    }
    buildUrl(endpoint, requestParams) {
        return `${this.baseUrl}/chat/completions`;
    }
    async buildErrorMessage(response) {
        try {
            const respJson = (await response.json());
            return {
                message: respJson.message || `Request failed with status ${response.status}`
            };
        }
        catch (error) {
            return { message: `Request failed with status ${response.status}` };
        }
    }
}
exports.NovitaProvider = NovitaProvider;
