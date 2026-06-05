"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatToResponsesStreamConverter = void 0;
class ChatToResponsesStreamConverter {
    constructor() {
        this.responseId = "";
        this.model = "";
        this.created = 0;
        this.started = false;
        this.textBuffer = "";
        this.itemAdded = false;
        this.partAdded = false;
        this.emittedFunctionItems = new Set();
        this.completedEmitted = false;
        this.imageBuffer = [];
        this.nextContentIndex = 0;
        this.reasoningStates = [];
        this.currentReasoningIndex = -1;
        this.toolCalls = new Map();
    }
    getOrCreateReasoningState(index) {
        while (this.reasoningStates.length <= index) {
            this.reasoningStates.push({
                id: `rs_${this.responseId}_${this.reasoningStates.length}`,
                buffer: "",
                signature: null,
                itemAdded: false,
                summaryPartAdded: false,
                done: false,
            });
        }
        return this.reasoningStates[index];
    }
    getMessageOutputIndex() {
        return this.reasoningStates.filter(s => s.itemAdded).length;
    }
    finalizeReasoningState(events, state, outputIndex) {
        if (state.itemAdded && !state.done) {
            const textDone = {
                type: "response.reasoning_summary_text.done",
                item_id: state.id,
                output_index: outputIndex,
                summary_index: 0,
                text: state.buffer,
            };
            events.push(textDone);
            const partDone = {
                type: "response.reasoning_summary_part.done",
                item_id: state.id,
                output_index: outputIndex,
                summary_index: 0,
                part: { type: "summary_text", text: state.buffer },
            };
            events.push(partDone);
            events.push({
                type: "response.output_item.done",
                output_index: outputIndex,
                item: {
                    id: state.id,
                    type: "reasoning",
                    summary: [{ type: "summary_text", text: state.buffer }],
                    encrypted_content: state.signature,
                },
            });
            state.done = true;
        }
    }
    finalizeAllReasoning(events) {
        this.reasoningStates.forEach((state, index) => {
            this.finalizeReasoningState(events, state, index);
        });
    }
    convert(chunk) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        const events = [];
        const c = chunk;
        if (!this.started) {
            this.responseId = c.id;
            this.model = c.model;
            this.created = c.created;
            this.started = true;
            const createdEvt = {
                type: "response.created",
                response: {
                    id: this.responseId,
                    object: "response",
                    created_at: this.created,
                    status: "in_progress",
                    output: [],
                    model: this.model,
                },
            };
            events.push(createdEvt);
            events.push({ type: "response.in_progress", response: { id: this.responseId, object: "response", model: this.model, output: [] } });
        }
        for (const choice of (_a = c.choices) !== null && _a !== void 0 ? _a : []) {
            // Handle reasoning_details (multiple blocks with signatures)
            if (((_b = choice === null || choice === void 0 ? void 0 : choice.delta) === null || _b === void 0 ? void 0 : _b.reasoning_details) && choice.delta.reasoning_details.length > 0) {
                for (let i = 0; i < choice.delta.reasoning_details.length; i++) {
                    const detail = choice.delta.reasoning_details[i];
                    const blockIndex = this.currentReasoningIndex >= 0 ? this.currentReasoningIndex : 0;
                    const state = this.getOrCreateReasoningState(blockIndex);
                    if (detail.signature && !state.signature) {
                        state.signature = detail.signature;
                        this.finalizeReasoningState(events, state, blockIndex);
                        this.currentReasoningIndex = blockIndex + 1;
                    }
                    if (detail.thinking) {
                        state.buffer += detail.thinking;
                    }
                }
            }
            // Handle reasoning deltas (simple reasoning string)
            if ((_c = choice === null || choice === void 0 ? void 0 : choice.delta) === null || _c === void 0 ? void 0 : _c.reasoning) {
                const delta = choice.delta.reasoning;
                if (delta.length > 0) {
                    if (this.currentReasoningIndex < 0) {
                        this.currentReasoningIndex = 0;
                    }
                    const state = this.getOrCreateReasoningState(this.currentReasoningIndex);
                    state.buffer += delta;
                    if (!state.itemAdded) {
                        events.push({
                            type: "response.output_item.added",
                            output_index: this.currentReasoningIndex,
                            item: {
                                id: state.id,
                                type: "reasoning",
                                summary: [],
                            },
                        });
                        state.itemAdded = true;
                    }
                    if (!state.summaryPartAdded) {
                        const partAdded = {
                            type: "response.reasoning_summary_part.added",
                            item_id: state.id,
                            output_index: this.currentReasoningIndex,
                            summary_index: 0,
                            part: { type: "summary_text", text: "" },
                        };
                        events.push(partAdded);
                        state.summaryPartAdded = true;
                    }
                    const deltaEvt = {
                        type: "response.reasoning_summary_text.delta",
                        item_id: state.id,
                        output_index: this.currentReasoningIndex,
                        summary_index: 0,
                        delta,
                    };
                    events.push(deltaEvt);
                }
            }
            if ((_d = choice === null || choice === void 0 ? void 0 : choice.delta) === null || _d === void 0 ? void 0 : _d.content) {
                const delta = choice.delta.content;
                if (delta.length > 0) {
                    this.finalizeAllReasoning(events);
                    this.textBuffer += delta;
                    const msgOutputIndex = this.getMessageOutputIndex();
                    if (!this.itemAdded) {
                        events.push({
                            type: "response.output_item.added",
                            output_index: msgOutputIndex,
                            item: {
                                id: `msg_${this.responseId}`,
                                type: "message",
                                status: "in_progress",
                                role: "assistant",
                                content: [],
                            },
                        });
                        this.itemAdded = true;
                    }
                    if (!this.partAdded) {
                        events.push({
                            type: "response.content_part.added",
                            item_id: `msg_${this.responseId}`,
                            output_index: msgOutputIndex,
                            content_index: 0,
                            part: { type: "output_text", text: "", annotations: [] },
                        });
                        this.partAdded = true;
                    }
                    const deltaEvt = {
                        type: "response.output_text.delta",
                        item_id: `msg_${this.responseId}`,
                        output_index: msgOutputIndex,
                        content_index: 0,
                        delta,
                    };
                    events.push(deltaEvt);
                }
            }
            // Handle image outputs
            if (((_e = choice === null || choice === void 0 ? void 0 : choice.delta) === null || _e === void 0 ? void 0 : _e.images) && Array.isArray(choice.delta.images)) {
                this.finalizeAllReasoning(events);
                const msgOutputIndex = this.getMessageOutputIndex();
                for (const img of choice.delta.images) {
                    // Ensure message item is added
                    if (!this.itemAdded) {
                        events.push({
                            type: "response.output_item.added",
                            output_index: msgOutputIndex,
                            item: {
                                id: `msg_${this.responseId}`,
                                type: "message",
                                status: "in_progress",
                                role: "assistant",
                                content: [],
                            },
                        });
                        this.itemAdded = true;
                    }
                    // Track content index (text is 0 if present, images start after)
                    const contentIndex = this.nextContentIndex++;
                    this.imageBuffer.push(img);
                    // Emit content part added for the image
                    events.push({
                        type: "response.content_part.added",
                        item_id: `msg_${this.responseId}`,
                        output_index: msgOutputIndex,
                        content_index: contentIndex,
                        part: {
                            type: "output_image",
                            image_url: ((_f = img.image_url) === null || _f === void 0 ? void 0 : _f.url) || "",
                            detail: (_g = img.image_url) === null || _g === void 0 ? void 0 : _g.detail,
                        },
                    });
                }
            }
            if (((_h = choice === null || choice === void 0 ? void 0 : choice.delta) === null || _h === void 0 ? void 0 : _h.tool_calls) && Array.isArray(choice.delta.tool_calls)) {
                this.finalizeAllReasoning(events);
                const msgOutputIndex = this.getMessageOutputIndex();
                for (const tc of choice.delta.tool_calls) {
                    const idx = (_j = tc.index) !== null && _j !== void 0 ? _j : 0;
                    const existing = this.toolCalls.get(idx) || {
                        id: tc.id || `call_${idx}`,
                        name: ((_k = tc.function) === null || _k === void 0 ? void 0 : _k.name) || "",
                        arguments: "",
                        item_id: `fn_${this.responseId}_${idx}`,
                    };
                    if ((_l = tc.function) === null || _l === void 0 ? void 0 : _l.name)
                        existing.name = tc.function.name;
                    if (tc.id)
                        existing.id = tc.id;
                    if ((_m = tc.function) === null || _m === void 0 ? void 0 : _m.arguments)
                        existing.arguments += tc.function.arguments;
                    this.toolCalls.set(idx, existing);
                    if (!this.emittedFunctionItems.has(existing.item_id)) {
                        events.push({
                            type: "response.output_item.added",
                            output_index: msgOutputIndex,
                            item: {
                                id: existing.item_id,
                                type: "function_call",
                                status: "in_progress",
                                name: existing.name || "",
                                call_id: existing.id,
                                arguments: "",
                                parsed_arguments: null,
                            },
                        });
                        this.emittedFunctionItems.add(existing.item_id);
                    }
                    if ((_o = tc.function) === null || _o === void 0 ? void 0 : _o.arguments) {
                        events.push({
                            type: "response.function_call_arguments.delta",
                            item_id: existing.item_id,
                            output_index: msgOutputIndex,
                            delta: tc.function.arguments,
                        });
                    }
                }
            }
            if (choice === null || choice === void 0 ? void 0 : choice.finish_reason) {
                this.finalizeAllReasoning(events);
                const msgOutputIndex = this.getMessageOutputIndex();
                if (this.itemAdded) {
                    // Emit text done event if we have text content
                    if (this.textBuffer.length > 0) {
                        const doneEvt = {
                            type: "response.output_text.done",
                            item_id: `msg_${this.responseId}`,
                            output_index: msgOutputIndex,
                            content_index: 0,
                            text: this.textBuffer,
                        };
                        events.push(doneEvt);
                        if (this.partAdded) {
                            events.push({
                                type: "response.content_part.done",
                                item_id: `msg_${this.responseId}`,
                                output_index: msgOutputIndex,
                                content_index: 0,
                                part: { type: "output_text", text: this.textBuffer, annotations: [] },
                            });
                        }
                    }
                    // Emit content part done events for images
                    let imageContentIndex = this.textBuffer.length > 0 ? 1 : 0;
                    for (const img of this.imageBuffer) {
                        events.push({
                            type: "response.content_part.done",
                            item_id: `msg_${this.responseId}`,
                            output_index: msgOutputIndex,
                            content_index: imageContentIndex++,
                            part: {
                                type: "output_image",
                                image_url: ((_p = img.image_url) === null || _p === void 0 ? void 0 : _p.url) || "",
                                detail: (_q = img.image_url) === null || _q === void 0 ? void 0 : _q.detail,
                            },
                        });
                    }
                    // Build the final message content
                    const finalContent = [];
                    if (this.textBuffer.length > 0) {
                        finalContent.push({ type: "output_text", text: this.textBuffer, annotations: [] });
                    }
                    for (const img of this.imageBuffer) {
                        finalContent.push({
                            type: "output_image",
                            image_url: ((_r = img.image_url) === null || _r === void 0 ? void 0 : _r.url) || "",
                            detail: (_s = img.image_url) === null || _s === void 0 ? void 0 : _s.detail,
                        });
                    }
                    events.push({
                        type: "response.output_item.done",
                        output_index: msgOutputIndex,
                        item: {
                            id: `msg_${this.responseId}`,
                            type: "message",
                            status: "completed",
                            role: "assistant",
                            content: finalContent,
                        },
                    });
                }
                this.toolCalls.forEach((tc) => {
                    events.push({
                        type: "response.function_call_arguments.done",
                        item_id: tc.item_id,
                        output_index: msgOutputIndex,
                        arguments: tc.arguments || "{}",
                    });
                    events.push({
                        type: "response.output_item.done",
                        output_index: msgOutputIndex,
                        item: {
                            id: tc.item_id,
                            type: "function_call",
                            status: "completed",
                            name: tc.name || "",
                            call_id: tc.id,
                            arguments: tc.arguments || "{}",
                            parsed_arguments: null,
                        },
                    });
                });
            }
        }
        if (c.usage && !this.completedEmitted) {
            const usage = {
                input_tokens: c.usage.prompt_tokens,
                output_tokens: c.usage.completion_tokens,
                total_tokens: c.usage.total_tokens,
                input_tokens_details: (((_t = c.usage.prompt_tokens_details) === null || _t === void 0 ? void 0 : _t.cached_tokens) || ((_u = c.usage.prompt_tokens_details) === null || _u === void 0 ? void 0 : _u.cache_write_tokens))
                    ? {
                        cached_tokens: (_w = (_v = c.usage.prompt_tokens_details) === null || _v === void 0 ? void 0 : _v.cached_tokens) !== null && _w !== void 0 ? _w : 0,
                        ...(((_x = c.usage.prompt_tokens_details) === null || _x === void 0 ? void 0 : _x.cache_write_tokens) && {
                            cache_write_tokens: c.usage.prompt_tokens_details.cache_write_tokens,
                            cache_write_details: c.usage.prompt_tokens_details.cache_write_details,
                        }),
                    }
                    : undefined,
                output_tokens_details: ((_y = c.usage.completion_tokens_details) === null || _y === void 0 ? void 0 : _y.reasoning_tokens)
                    ? {
                        reasoning_tokens: c.usage.completion_tokens_details.reasoning_tokens,
                    }
                    : undefined,
                modality_tokens: c.usage.modality_tokens,
            };
            const output = [];
            for (const state of this.reasoningStates) {
                if (state.itemAdded) {
                    output.push({
                        id: state.id,
                        type: "reasoning",
                        summary: [{ type: "summary_text", text: state.buffer }],
                        encrypted_content: state.signature,
                    });
                }
            }
            // Build message content from text and images
            const hasContent = this.textBuffer.length > 0 || this.imageBuffer.length > 0;
            if (hasContent) {
                const messageContent = [];
                if (this.textBuffer.length > 0) {
                    messageContent.push({ type: "output_text", text: this.textBuffer, annotations: [] });
                }
                for (const img of this.imageBuffer) {
                    messageContent.push({
                        type: "output_image",
                        image_url: ((_z = img.image_url) === null || _z === void 0 ? void 0 : _z.url) || "",
                        detail: (_0 = img.image_url) === null || _0 === void 0 ? void 0 : _0.detail,
                    });
                }
                output.push({
                    id: `msg_${this.responseId}`,
                    type: "message",
                    status: "completed",
                    role: "assistant",
                    content: messageContent,
                });
            }
            output.push(...Array.from(this.toolCalls.values()).map((tc) => ({
                id: tc.id,
                type: "function_call",
                status: "completed",
                name: tc.name || "",
                call_id: tc.id,
                arguments: tc.arguments || "{}",
                parsed_arguments: null,
            })));
            const completed = {
                type: "response.completed",
                response: {
                    id: this.responseId,
                    object: "response",
                    created: this.created,
                    created_at: this.created,
                    status: "completed",
                    model: this.model,
                    output,
                    usage,
                },
            };
            events.push(completed);
            this.completedEmitted = true;
        }
        return events;
    }
}
exports.ChatToResponsesStreamConverter = ChatToResponsesStreamConverter;
