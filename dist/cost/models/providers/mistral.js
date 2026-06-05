"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MistralProvider = void 0;
const base_1 = require("./base");
class MistralProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Mistral AI";
        this.baseUrl = "https://api.mistral.ai/";
        this.auth = "api-key";
        this.pricingPages = ["https://mistral.ai/pricing"];
        this.modelPages = ["https://docs.mistral.ai/getting-started/models"];
    }
    buildUrl() {
        return `${this.baseUrl}v1/chat/completions`;
    }
    buildRequestBody(endpoint, context) {
        let updatedBody = context.parsedBody;
        if (context.bodyMapping === "RESPONSES") {
            updatedBody = context.toChatCompletions(updatedBody);
        }
        return JSON.stringify({
            ...updatedBody,
            model: endpoint.providerModelId,
            user: undefined
        });
    }
    async buildErrorMessage(response) {
        var _a, _b, _c, _d, _e, _f;
        try {
            const respJson = (await response.json());
            return {
                message: ((_c = (_b = (_a = respJson.message) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.msg) || ((_e = (_d = respJson.detail) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.msg) || `Request failed with status ${response.status}`,
                details: ((_f = respJson.message) === null || _f === void 0 ? void 0 : _f.detail) || respJson.detail
            };
        }
        catch (error) {
            return { message: `Request failed with status ${response.status}` };
        }
    }
}
exports.MistralProvider = MistralProvider;
