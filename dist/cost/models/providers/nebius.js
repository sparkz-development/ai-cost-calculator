"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NebiusProvider = void 0;
const base_1 = require("./base");
class NebiusProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Nebius Token Factory";
        this.baseUrl = "https://api.tokenfactory.nebius.com/v1/";
        this.auth = "api-key";
        this.pricingPages = [
            "https://nebius.com/token-factory/prices",
            "https://nebius.com/prices",
        ];
        this.modelPages = ["https://tokenfactory.nebius.com/"];
    }
    buildUrl(endpoint, requestParams) {
        return `${this.baseUrl}chat/completions`;
    }
    async buildErrorMessage(response) {
        try {
            const respJson = (await response.json());
            return {
                message: respJson.detail || `Request failed with status ${response.status}`
            };
        }
        catch (error) {
            return { message: `Request failed with status ${response.status}` };
        }
    }
}
exports.NebiusProvider = NebiusProvider;
