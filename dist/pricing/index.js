"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalCost = exports.calculateRequestCost = exports.calculateGBCost = exports.BYTE_PRICING = exports.REQUEST_PRICING_TIERS = exports.GB_PRICING_TIERS = void 0;
// Pricing tier definitions
var tiers_1 = require("./tiers");
Object.defineProperty(exports, "GB_PRICING_TIERS", { enumerable: true, get: function () { return tiers_1.GB_PRICING_TIERS; } });
Object.defineProperty(exports, "REQUEST_PRICING_TIERS", { enumerable: true, get: function () { return tiers_1.REQUEST_PRICING_TIERS; } });
Object.defineProperty(exports, "BYTE_PRICING", { enumerable: true, get: function () { return tiers_1.BYTE_PRICING; } });
// Cost calculation utilities
var calculator_1 = require("./calculator");
Object.defineProperty(exports, "calculateGBCost", { enumerable: true, get: function () { return calculator_1.calculateGBCost; } });
Object.defineProperty(exports, "calculateRequestCost", { enumerable: true, get: function () { return calculator_1.calculateRequestCost; } });
Object.defineProperty(exports, "calculateTotalCost", { enumerable: true, get: function () { return calculator_1.calculateTotalCost; } });
