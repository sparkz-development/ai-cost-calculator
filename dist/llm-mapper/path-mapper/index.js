"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathMapper = exports.MapperBuilder = exports.mappers = void 0;
exports.getMapper = getMapper;
const chat_v2_1 = require("../mappers/anthropic/chat-v2");
const chat_v2_2 = require("../mappers/gemini/chat-v2");
const chat_v2_3 = require("../mappers/openai/chat-v2");
const builder_1 = require("./builder");
Object.defineProperty(exports, "MapperBuilder", { enumerable: true, get: function () { return builder_1.MapperBuilder; } });
const core_1 = require("./core");
Object.defineProperty(exports, "PathMapper", { enumerable: true, get: function () { return core_1.PathMapper; } });
// Export a simple object with all mappers for easy access
exports.mappers = {
    "openai-chat": chat_v2_3.openaiChatMapper,
    "anthropic-chat": chat_v2_1.anthropicChatMapper,
    "gemini-chat": chat_v2_2.googleChatMapper,
};
// Helper function to get a mapper by name with proper typing
function getMapper(name) {
    return exports.mappers[name];
}
