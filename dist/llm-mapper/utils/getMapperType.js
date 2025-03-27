"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMapperType = exports.getMapperTypeFromHeliconeRequest = void 0;
const isAssistantRequest = (request) => {
    return (request.request_body.hasOwnProperty("assistant_id") ||
        request.request_body.hasOwnProperty("metadata") ||
        request.response_body.hasOwnProperty("metadata") ||
        (Array.isArray(request.response_body.data) &&
            request.response_body.data.some((item) => item.hasOwnProperty("metadata"))));
};
const isRealtimeRequest = (request) => {
    var _a, _b, _c;
    return (((_a = request.response_body) === null || _a === void 0 ? void 0 : _a.object) === "realtime.session" ||
        ((_c = (_b = request.response_body) === null || _b === void 0 ? void 0 : _b.messages) === null || _c === void 0 ? void 0 : _c.some((msg) => { var _a; return ((_a = msg.content) === null || _a === void 0 ? void 0 : _a.type) === "session.created"; })));
};
const getMapperTypeFromHeliconeRequest = (heliconeRequest, model) => {
    var _a, _b, _c, _d, _e;
    if (((_a = heliconeRequest.request_body) === null || _a === void 0 ? void 0 : _a._type) === "vector_db") {
        return "vector-db";
    }
    if (((_b = heliconeRequest.request_body) === null || _b === void 0 ? void 0 : _b._type) === "tool") {
        return "tool";
    }
    // Check for OpenAI Assistant responses
    if (((_c = heliconeRequest.response_body) === null || _c === void 0 ? void 0 : _c.object) === "thread.run" ||
        ((_d = heliconeRequest.response_body) === null || _d === void 0 ? void 0 : _d.assistant_id) ||
        ((_e = heliconeRequest.response_body) === null || _e === void 0 ? void 0 : _e.thread_id)) {
        return "openai-assistant";
    }
    // Check for realtime responses
    if (isRealtimeRequest(heliconeRequest)) {
        return "openai-realtime";
    }
    return (0, exports.getMapperType)({
        model,
        provider: heliconeRequest.provider,
        path: heliconeRequest.request_path,
        isAssistant: isAssistantRequest(heliconeRequest),
    });
};
exports.getMapperTypeFromHeliconeRequest = getMapperTypeFromHeliconeRequest;
const getMapperType = ({ model, provider, path, isAssistant, }) => {
    if (!model) {
        return "openai-chat";
    }
    if (typeof model !== "string") {
        return "openai-chat";
    }
    if (model.includes("deepseek")) {
        return "openai-chat";
    }
    if (model === "vector_db") {
        return "vector-db";
    }
    if (/^gpt-3\.5-turbo-instruct/.test(model)) {
        return "openai-instruct";
    }
    if (model == "black-forest-labs/FLUX.1-schnell") {
        return "black-forest-labs-image";
    }
    if (/^mistralai\/Mistral-7B-Instruct-v\d+\.\d+$/.test(model) ||
        /^(ft:)?gpt-(4|3\.5|35)(?!-turbo-instruct)(-turbo)?(-\d{2}k)?(-\d{4})?/.test(model) ||
        /^o1-(preview|mini)(-\d{4}-\d{2}-\d{2})?$/.test(model) ||
        /^meta-llama\/.*/i.test(model) ||
        provider === "OPENROUTER" ||
        provider === "CUSTOM" ||
        provider === "GROQ" ||
        provider === "TOGETHER" ||
        provider === "TOGETHERAI" ||
        (path === null || path === void 0 ? void 0 : path.includes("oai2ant")) ||
        model == "gpt-4-vision-preview" ||
        model == "gpt-4-1106-vision-preview") {
        if (provider === "CUSTOM" && /^claude/.test(model)) {
            return "anthropic-chat";
        }
        return "openai-chat";
    }
    // Check for any Anthropic model regardless of provider
    if (/^claude/.test(model) ||
        model.includes("claude") ||
        model.includes("anthropic") ||
        provider === "ANTHROPIC" ||
        (provider === "AWS" &&
            (model.includes("claude") || model.includes("anthropic")))) {
        return "anthropic-chat";
    }
    if (isAssistant) {
        return "openai-assistant";
    }
    if (model &&
        (model.toLowerCase().includes("gemini") || provider === "GOOGLE")) {
        if (provider === "OPENAI") {
            return "openai-chat";
        }
        return "gemini-chat";
    }
    if (model === "dall-e-3" || model === "dall-e-2") {
        return "openai-image";
    }
    if (/^text-moderation(-\[\w+\]|-\d+)?$/.test(model)) {
        return "openai-moderation";
    }
    if (/^text-embedding/.test(model)) {
        return "openai-embedding";
    }
    return "openai-chat";
};
exports.getMapperType = getMapperType;
