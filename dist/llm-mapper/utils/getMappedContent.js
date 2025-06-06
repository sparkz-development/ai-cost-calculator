"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heliconeRequestToMappedContent = exports.getMappedContent = exports.MAPPERS = void 0;
const chat_1 = require("../mappers/anthropic/chat");
const chat_2 = require("../mappers/gemini/chat");
const chat_3 = require("../mappers/openai/chat");
const dalle_1 = require("../mappers/openai/dalle");
const embedding_1 = require("../mappers/openai/embedding");
const instruct_1 = require("../mappers/openai/instruct");
const costCalc_1 = require("../../cost/costCalc");
const image_1 = require("../mappers/black-forest-labs/image");
const assistant_1 = require("../mappers/openai/assistant");
const moderation_1 = require("../mappers/openai/moderation");
const realtime_1 = require("../mappers/openai/realtime");
const tool_1 = require("../mappers/tool");
const vector_db_1 = require("../mappers/vector-db");
const getMapperType_1 = require("./getMapperType");
const responses_1 = require("../mappers/openai/responses");
const MAX_PREVIEW_LENGTH = 1000;
exports.MAPPERS = {
    "openai-chat": chat_3.mapOpenAIRequest,
    "openai-response": responses_1.mapOpenAIResponse,
    "anthropic-chat": chat_1.mapAnthropicRequest,
    "gemini-chat": chat_2.mapGeminiPro,
    "black-forest-labs-image": image_1.mapBlackForestLabsImage,
    "openai-assistant": assistant_1.mapOpenAIAssistant,
    "openai-image": dalle_1.mapDalleRequest,
    "openai-moderation": moderation_1.mapOpenAIModeration,
    "openai-embedding": embedding_1.mapOpenAIEmbedding,
    "openai-instruct": instruct_1.mapOpenAIInstructRequest,
    "openai-realtime": realtime_1.mapRealtimeRequest,
    "vector-db": vector_db_1.mapVectorDB,
    tool: tool_1.mapTool,
    unknown: chat_3.mapOpenAIRequest,
};
const getStatusType = (heliconeRequest) => {
    var _a, _b;
    if ((_b = (_a = heliconeRequest.response_body) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message) {
        return "error";
    }
    switch (heliconeRequest.response_status) {
        case 200:
            return "success";
        case 0:
        case null:
            return "pending";
        default:
            return "error";
    }
};
const metaDataFromHeliconeRequest = (heliconeRequest, model) => {
    var _a, _b, _c, _d, _e;
    return {
        requestId: heliconeRequest.request_id,
        countryCode: heliconeRequest.country_code,
        cacheEnabled: (_a = heliconeRequest.cache_enabled) !== null && _a !== void 0 ? _a : false,
        cacheReferenceId: (_b = heliconeRequest.cache_reference_id) !== null && _b !== void 0 ? _b : null,
        cost: (0, costCalc_1.modelCost)({
            provider: heliconeRequest.provider,
            model: model,
            sum_prompt_tokens: heliconeRequest.prompt_tokens || 0,
            prompt_cache_write_tokens: heliconeRequest.prompt_cache_write_tokens || 0,
            prompt_cache_read_tokens: heliconeRequest.prompt_cache_read_tokens || 0,
            prompt_audio_tokens: heliconeRequest.prompt_audio_tokens || 0,
            completion_audio_tokens: heliconeRequest.completion_audio_tokens || 0,
            sum_completion_tokens: heliconeRequest.completion_tokens || 0,
            sum_tokens: heliconeRequest.total_tokens || 0,
        }),
        createdAt: heliconeRequest.request_created_at,
        path: heliconeRequest.request_path,
        completionTokens: heliconeRequest.completion_tokens,
        promptTokens: heliconeRequest.prompt_tokens,
        totalTokens: heliconeRequest.total_tokens,
        latency: heliconeRequest.delay_ms,
        user: heliconeRequest.request_user_id,
        customProperties: heliconeRequest.request_properties,
        status: {
            statusType: getStatusType(heliconeRequest),
            code: heliconeRequest.response_status,
        },
        feedback: {
            createdAt: (_c = heliconeRequest.feedback_created_at) !== null && _c !== void 0 ? _c : null,
            id: (_d = heliconeRequest.feedback_id) !== null && _d !== void 0 ? _d : null,
            rating: (_e = heliconeRequest.feedback_rating) !== null && _e !== void 0 ? _e : null,
        },
        provider: heliconeRequest.provider,
        timeToFirstToken: heliconeRequest.time_to_first_token,
        scores: heliconeRequest.scores,
    };
};
const getUnsanitizedMappedContent = ({ mapperType, heliconeRequest, }) => {
    const mapper = exports.MAPPERS[mapperType];
    if (!mapper) {
        throw new Error(`Mapper not found: ${JSON.stringify(mapperType)}`);
    }
    let result;
    try {
        result = mapper({
            request: heliconeRequest.request_body,
            response: heliconeRequest.response_body,
            statusCode: heliconeRequest.response_status,
            model: heliconeRequest.model,
        });
    }
    catch (e) {
        result = {
            preview: {
                concatenatedMessages: [],
                request: JSON.stringify(heliconeRequest.request_body),
                response: JSON.stringify(heliconeRequest.response_body),
                fullRequestText: () => {
                    return JSON.stringify(heliconeRequest.request_body);
                },
                fullResponseText: () => {
                    return JSON.stringify(heliconeRequest.response_body);
                },
            },
            schema: {
                request: {
                    prompt: `Error: ${e.message}`,
                },
            },
        };
    }
    return {
        _type: mapperType,
        preview: result.preview,
        schema: result.schema,
        model: heliconeRequest.model,
        id: heliconeRequest.request_id,
        raw: {
            request: heliconeRequest.request_body,
            response: heliconeRequest.response_body,
        },
        heliconeMetadata: metaDataFromHeliconeRequest(heliconeRequest, heliconeRequest.model),
    };
};
const messageToText = (message) => {
    var _a, _b, _c, _d, _e, _f, _g;
    let text = "";
    (_a = message.contentArray) === null || _a === void 0 ? void 0 : _a.forEach((message) => {
        text += messageToText(message).trim();
    });
    text += (_c = (_b = message.content) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : "";
    (_d = message.tool_calls) === null || _d === void 0 ? void 0 : _d.forEach((toolCall) => {
        text += JSON.stringify(toolCall.arguments).trim();
        if (toolCall.name) {
            text += JSON.stringify(toolCall.name).trim();
        }
    });
    text += (_e = message.role) !== null && _e !== void 0 ? _e : "";
    text += (_f = message.name) !== null && _f !== void 0 ? _f : "";
    text += (_g = message.tool_call_id) !== null && _g !== void 0 ? _g : "";
    return text.trim();
};
const messagesToText = (messages) => {
    return messages.map(messageToText).join("\n").trim();
};
const sanitizeMappedContent = (mappedContent) => {
    var _a, _b, _c;
    const sanitizeMessage = (message) => {
        if (!message) {
            return {
                role: "unknown",
                content: "",
                _type: "message",
            };
        }
        return {
            ...message,
            content: message.content
                ? typeof message.content === "string"
                    ? message.content
                    : JSON.stringify(message.content)
                : "",
        };
    };
    const sanitizeMessages = (messages) => {
        return messages === null || messages === void 0 ? void 0 : messages.map(sanitizeMessage);
    };
    if ((_b = (_a = mappedContent.schema.response) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.heliconeMessage) {
        try {
            if (typeof mappedContent.schema.response.error.heliconeMessage === "string") {
                mappedContent.schema.response.error.heliconeMessage = JSON.stringify(JSON.parse(mappedContent.schema.response.error.heliconeMessage), null, 2);
            }
            else {
                mappedContent.schema.response.error.heliconeMessage = JSON.stringify(mappedContent.schema.response.error.heliconeMessage, null, 2);
            }
        }
        catch (e) { }
    }
    return {
        _type: mappedContent._type,
        id: mappedContent.id,
        schema: {
            request: {
                ...mappedContent.schema.request,
                messages: sanitizeMessages(mappedContent.schema.request.messages),
            },
            response: mappedContent.schema.response && {
                ...mappedContent.schema.response,
                messages: sanitizeMessages(mappedContent.schema.response.messages),
            },
        },
        preview: {
            request: typeof mappedContent.preview.request === "string"
                ? mappedContent.preview.request
                    .replaceAll("\n", " ")
                    .slice(0, MAX_PREVIEW_LENGTH)
                : String(mappedContent.preview.request || "").slice(0, MAX_PREVIEW_LENGTH),
            response: typeof mappedContent.preview.response === "string"
                ? mappedContent.preview.response
                    .replaceAll("\n", " ")
                    .slice(0, MAX_PREVIEW_LENGTH)
                : String(mappedContent.preview.response || "").slice(0, MAX_PREVIEW_LENGTH),
            concatenatedMessages: (_c = sanitizeMessages(mappedContent.preview.concatenatedMessages)) !== null && _c !== void 0 ? _c : [],
            fullRequestText: (preview) => {
                var _a;
                if (preview) {
                    return mappedContent.preview.request;
                }
                return messagesToText((_a = mappedContent.schema.request.messages) !== null && _a !== void 0 ? _a : []);
            },
            fullResponseText: (preview) => {
                var _a, _b;
                if (preview) {
                    return mappedContent.preview.response;
                }
                return messagesToText((_b = (_a = mappedContent.schema.response) === null || _a === void 0 ? void 0 : _a.messages) !== null && _b !== void 0 ? _b : []);
            },
        },
        model: mappedContent.model,
        raw: mappedContent.raw,
        heliconeMetadata: mappedContent.heliconeMetadata,
    };
};
const getMappedContent = ({ mapperType, heliconeRequest, }) => {
    const unsanitized = getUnsanitizedMappedContent({
        mapperType,
        heliconeRequest,
    });
    return sanitizeMappedContent(unsanitized);
};
exports.getMappedContent = getMappedContent;
const heliconeRequestToMappedContent = (heliconeRequest) => {
    const mapperType = (0, getMapperType_1.getMapperTypeFromHeliconeRequest)(heliconeRequest, heliconeRequest.model);
    return (0, exports.getMappedContent)({
        mapperType,
        heliconeRequest,
    });
};
exports.heliconeRequestToMappedContent = heliconeRequestToMappedContent;
