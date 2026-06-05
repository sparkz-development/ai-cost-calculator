"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasetenProvider = void 0;
const base_1 = require("./base");
class BasetenProvider extends base_1.BaseProvider {
    constructor() {
        super(...arguments);
        this.displayName = "Baseten";
        this.baseUrl = "https://inference.baseten.co/v1/";
        this.auth = "api-key";
        this.pricingPages = ["https://www.baseten.co/pricing/"];
        this.modelPages = ["https://www.baseten.co/library/"];
    }
    buildUrl() {
        return `${this.baseUrl}chat/completions`;
    }
}
exports.BasetenProvider = BasetenProvider;
