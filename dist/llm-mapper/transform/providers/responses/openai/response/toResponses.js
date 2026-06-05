"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toResponses = toResponses;
function toResponses(body) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const first = (_a = body.choices) === null || _a === void 0 ? void 0 : _a[0];
    const message = first === null || first === void 0 ? void 0 : first.message;
    const output = [];
    if ((message === null || message === void 0 ? void 0 : message.reasoning_details) && message.reasoning_details.length > 0) {
        for (const detail of message.reasoning_details) {
            const reasoningItem = {
                id: `rs_${Math.random().toString(36).slice(2, 10)}`,
                type: "reasoning",
                summary: [{ type: "summary_text", text: detail.thinking }],
                encrypted_content: detail.signature || null,
            };
            output.push(reasoningItem);
        }
    }
    else if (message === null || message === void 0 ? void 0 : message.reasoning) {
        const reasoningItem = {
            id: `rs_${Math.random().toString(36).slice(2, 10)}`,
            type: "reasoning",
            summary: [{ type: "summary_text", text: message.reasoning }],
            encrypted_content: null,
        };
        output.push(reasoningItem);
    }
    // Build message content from text and images
    const messageContent = [];
    if (message === null || message === void 0 ? void 0 : message.content) {
        messageContent.push({
            type: "output_text",
            text: message.content,
            annotations: (_b = message.annotations) !== null && _b !== void 0 ? _b : [],
        });
    }
    // Map images to output_image parts
    if ((message === null || message === void 0 ? void 0 : message.images) && message.images.length > 0) {
        for (const img of message.images) {
            messageContent.push({
                type: "output_image",
                image_url: ((_c = img.image_url) === null || _c === void 0 ? void 0 : _c.url) || "",
                detail: (_d = img.image_url) === null || _d === void 0 ? void 0 : _d.detail,
            });
        }
    }
    // Only create a message output item if we have content
    if (messageContent.length > 0) {
        const msg = {
            id: `msg_${Math.random().toString(36).slice(2, 10)}`,
            type: "message",
            status: "completed",
            role: "assistant",
            content: messageContent,
        };
        output.push(msg);
    }
    const pushFunctionCall = (id, name, args) => {
        const call_id = id || `call_${Math.random().toString(36).slice(2, 10)}`;
        output.push({
            id: call_id,
            type: "function_call",
            status: "completed",
            name,
            call_id,
            arguments: args !== null && args !== void 0 ? args : "{}",
            parsed_arguments: null,
        });
    };
    if ((message === null || message === void 0 ? void 0 : message.tool_calls) && Array.isArray(message.tool_calls)) {
        for (const tc of message.tool_calls) {
            if (tc.type === "function") {
                pushFunctionCall(tc.id, tc.function.name, tc.function.arguments);
            }
        }
    }
    if (message === null || message === void 0 ? void 0 : message.function_call) {
        pushFunctionCall(undefined, message.function_call.name, message.function_call.arguments);
    }
    const usage = body.usage
        ? {
            input_tokens: body.usage.prompt_tokens,
            output_tokens: body.usage.completion_tokens,
            total_tokens: body.usage.total_tokens,
            input_tokens_details: (((_e = body.usage.prompt_tokens_details) === null || _e === void 0 ? void 0 : _e.cached_tokens) || ((_f = body.usage.prompt_tokens_details) === null || _f === void 0 ? void 0 : _f.cache_write_tokens))
                ? {
                    cached_tokens: (_h = (_g = body.usage.prompt_tokens_details) === null || _g === void 0 ? void 0 : _g.cached_tokens) !== null && _h !== void 0 ? _h : 0,
                    ...(((_j = body.usage.prompt_tokens_details) === null || _j === void 0 ? void 0 : _j.cache_write_tokens) && {
                        cache_write_tokens: body.usage.prompt_tokens_details.cache_write_tokens,
                        cache_write_details: body.usage.prompt_tokens_details.cache_write_details,
                    }),
                }
                : undefined,
            output_tokens_details: ((_k = body.usage.completion_tokens_details) === null || _k === void 0 ? void 0 : _k.reasoning_tokens)
                ? {
                    reasoning_tokens: body.usage.completion_tokens_details.reasoning_tokens,
                }
                : undefined,
            modality_tokens: body.usage.modality_tokens,
            cost: body.usage.cost,
        }
        : undefined;
    return {
        id: body.id,
        object: "response",
        created: body.created,
        model: body.model,
        system_fingerprint: body.system_fingerprint,
        output,
        ...(usage ? { usage } : {}),
    };
}
