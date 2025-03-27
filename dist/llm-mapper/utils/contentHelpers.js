"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasImage = exports.hasFunctionCall = exports.isJSON = void 0;
exports.getContentType = getContentType;
const isJSON = (str) => {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isJSON = isJSON;
const hasFunctionCall = (message) => {
    var _a, _b;
    return !!(message === null || message === void 0 ? void 0 : message.function_call) ||
        (Array.isArray(message === null || message === void 0 ? void 0 : message.tool_calls) && ((_a = message === null || message === void 0 ? void 0 : message.tool_calls) === null || _a === void 0 ? void 0 : _a.length) > 0) ||
        (Array.isArray(message === null || message === void 0 ? void 0 : message.content) &&
            ((_b = message === null || message === void 0 ? void 0 : message.content) === null || _b === void 0 ? void 0 : _b.some((item) => typeof item === "object" &&
                item !== null &&
                "type" in item &&
                item.type === "tool_use")));
};
exports.hasFunctionCall = hasFunctionCall;
const hasImage = (message) => {
    var _a;
    return Array.isArray(message === null || message === void 0 ? void 0 : message.content) &&
        ((_a = message === null || message === void 0 ? void 0 : message.content) === null || _a === void 0 ? void 0 : _a.some((item) => (item === null || item === void 0 ? void 0 : item.type) === "image_url" || (item === null || item === void 0 ? void 0 : item.type) === "image"));
};
exports.hasImage = hasImage;
function getContentType(message) {
    if ((message === null || message === void 0 ? void 0 : message.role) === "function")
        return "function";
    if ((0, exports.hasFunctionCall)(message))
        return "functionCall";
    if ((0, exports.hasImage)(message))
        return "image";
    if (typeof message === "string" &&
        message.includes("helicone-auto-prompt-input"))
        return "autoInput";
    return "message";
}
