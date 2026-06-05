"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProvider = void 0;
/**
 * Base Provider class - all methods are pure, no state mutation
 */
class BaseProvider {
    constructor() {
        // Plugins supported by this provider
        this.supportedPlugins = [];
    }
    buildModelId(modelProviderConfig, userEndpointConfig) {
        return modelProviderConfig.providerModelId;
    }
    authenticate(authContext, endpoint, cacheProvider) {
        return {
            headers: {
                Authorization: `Bearer ${authContext.apiKey || ""}`,
            },
        };
    }
    buildRequestBody(endpoint, context) {
        let updatedBody = context.parsedBody;
        if (context.bodyMapping === "RESPONSES") {
            updatedBody = context.toChatCompletions(updatedBody);
        }
        return JSON.stringify({
            ...updatedBody,
            model: endpoint.providerModelId,
        });
    }
    async buildErrorMessage(response) {
        var _a;
        try {
            const respJson = (await response.json());
            if ((_a = respJson.error) === null || _a === void 0 ? void 0 : _a.message) {
                return { message: respJson.error.message };
            }
            return { message: `Request failed with status ${response.status}` };
        }
        catch (error) {
            return { message: `Request failed with status ${response.status}` };
        }
    }
}
exports.BaseProvider = BaseProvider;
