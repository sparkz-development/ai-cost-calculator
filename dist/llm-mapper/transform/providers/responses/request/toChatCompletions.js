"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toChatCompletions = toChatCompletions;
/**
 * Azure has a 40 character limit on tool_call_id.
 * This function truncates long IDs deterministically so that:
 * 1. IDs <= 40 chars are unchanged
 * 2. IDs > 40 chars are shortened to prefix + hash suffix
 * The same input always produces the same output, ensuring tool_calls
 * and their corresponding tool responses match.
 */
const AZURE_TOOL_CALL_ID_LIMIT = 40;
function truncateToolCallId(id) {
    if (id.length <= AZURE_TOOL_CALL_ID_LIMIT) {
        return id;
    }
    // Use a simple deterministic hash for the suffix
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        const char = id.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    const hashStr = Math.abs(hash).toString(36);
    // Keep prefix + underscore + hash, ensuring total <= 40 chars
    const prefixLength = AZURE_TOOL_CALL_ID_LIMIT - hashStr.length - 1;
    return `${id.substring(0, prefixLength)}_${hashStr}`;
}
function mapRole(role) {
    if (role === "developer")
        return "system";
    if (role === "system" || role === "user" || role === "assistant")
        return role;
    return "user";
}
function convertContentParts(parts) {
    return parts.map((p) => {
        const t = p === null || p === void 0 ? void 0 : p.type;
        switch (t) {
            // some clients may feed output back as input; accept output_text and map to text
            case "input_text":
            case "output_text":
                return { type: "text", text: p.text };
            case "input_image": {
                if (p.image_url) {
                    return { type: "image_url", image_url: { url: p.image_url, detail: p.detail } };
                }
                // Chat Completions does not support file_id for images directly
                throw new Error("input_image with file_id is not supported by Chat Completions");
            }
            // Handle output_image when responses output is fed back as input
            case "output_image": {
                if (p.image_url) {
                    return { type: "image_url", image_url: { url: p.image_url, detail: p.detail } };
                }
                throw new Error("output_image missing image_url");
            }
            case "input_file":
                // Chat Completions API does not support arbitrary files as message parts
                throw new Error("input_file is not supported by Chat Completions");
            default:
                throw new Error(`Unsupported content type in Responses input: ${String(t)}`);
        }
    });
}
/**
 * Collects consecutive items of a specific type from the input array.
 * Returns the collected items and the index after the last collected item.
 */
function collectConsecutiveByType(input, startIndex, type) {
    const items = [];
    let index = startIndex;
    while (index < input.length && input[index].type === type) {
        items.push(input[index]);
        index++;
    }
    return { items, endIndex: index };
}
function convertInputToMessages(input) {
    var _a;
    const messages = [];
    if (typeof input === "string") {
        messages.push({ role: "user", content: input });
        return messages;
    }
    for (let i = 0; i < input.length; i++) {
        const item = input[i];
        // Handle function_call: group consecutive function_call items into a single assistant message
        // with multiple tool_calls. This is required by Chat Completions format for parallel tool calls.
        if (item.type === "function_call") {
            const { items: functionCalls, endIndex } = collectConsecutiveByType(input, i, "function_call");
            const toolCalls = functionCalls.map((fc, idx) => {
                var _a;
                return ({
                    id: truncateToolCallId(fc.id || fc.call_id || `call_${i + idx}`),
                    type: "function",
                    function: {
                        name: fc.name,
                        arguments: (_a = fc.arguments) !== null && _a !== void 0 ? _a : "{}",
                    },
                });
            });
            messages.push({
                role: "assistant",
                content: "",
                tool_calls: toolCalls,
            });
            i = endIndex - 1;
            continue;
        }
        if (item.type === "function_call_output") {
            const fco = item;
            messages.push({
                role: "tool",
                tool_call_id: truncateToolCallId(fco.call_id),
                content: (_a = fco.output) !== null && _a !== void 0 ? _a : "",
            });
            continue;
        }
        // Handle reasoning: collect consecutive reasoning items into a single assistant message
        // with multiple reasoning_details. Anthropic requires all thinking blocks in one message.
        if (item.type === "reasoning") {
            const reasoningDetails = [];
            let hasAllSignatures = true;
            let j = i;
            while (j < input.length && input[j].type === "reasoning") {
                const reasoningItem = input[j];
                // get reasoning text from summary
                let reasoningContent = "";
                if (Array.isArray(reasoningItem.summary)) {
                    reasoningContent = reasoningItem.summary
                        .map((s) => {
                        if (s.type === "summary_text" && s.text) {
                            return s.text;
                        }
                        return typeof s === "string" ? s : JSON.stringify(s);
                    })
                        .join("\n\n");
                }
                else if (typeof reasoningItem.summary === "string") {
                    reasoningContent = reasoningItem.summary;
                }
                // signatures required for providers like anthropic
                if (reasoningItem.encrypted_content) {
                    reasoningDetails.push({
                        thinking: reasoningContent,
                        signature: reasoningItem.encrypted_content,
                    });
                }
                else {
                    hasAllSignatures = false;
                    reasoningDetails.push({
                        thinking: reasoningContent,
                        signature: "",
                    });
                }
                j++;
            }
            // Skip ahead to after the last reasoning item (loop will increment i)
            i = j - 1;
            if (hasAllSignatures && reasoningDetails.length > 0) {
                messages.push({
                    role: "assistant",
                    content: "",
                    reasoning_details: reasoningDetails,
                });
            }
            else if (reasoningDetails.length === 1) {
                messages.push({
                    role: "assistant",
                    content: "",
                    reasoning: reasoningDetails[0].thinking,
                });
            }
            else {
                messages.push({
                    role: "assistant",
                    content: "",
                    reasoning_details: reasoningDetails.filter(d => d.signature),
                });
            }
            continue;
        }
        const msg = item;
        const role = mapRole(msg.role);
        if (typeof msg.content === "string") {
            const content = msg.content;
            messages.push({ role, content });
        }
        else if (Array.isArray(msg.content)) {
            const parts = convertContentParts(msg.content);
            messages.push({ role, content: parts });
        }
        // no-op
    }
    return messages;
}
function toChatCompletions(body) {
    var _a;
    const messages = [];
    if (body.instructions) {
        messages.push({ role: "system", content: body.instructions });
    }
    const inputMessages = convertInputToMessages(body.input);
    messages.push(...inputMessages);
    // tools: Responses (flattened) -> Chat Completions (nested func)
    const tools = Array.isArray(body.tools)
        ? (body.tools.map((t) => {
            var _a;
            if (t.type !== "function")
                return t;
            return {
                type: "function",
                function: {
                    name: t.name,
                    description: t.description,
                    parameters: (_a = t.parameters) !== null && _a !== void 0 ? _a : {},
                },
            };
        }))
        : undefined;
    // tool_choice: unsupported "required" maps to "auto" in Chat Completions
    let tool_choice;
    if (body.tool_choice) {
        if (typeof body.tool_choice === "string") {
            tool_choice = body.tool_choice === "required" ? "auto" : body.tool_choice;
        }
        else if (body.tool_choice.type === "function" && ((_a = body.tool_choice.function) === null || _a === void 0 ? void 0 : _a.name)) {
            tool_choice = { type: "function", function: { name: body.tool_choice.function.name } };
        }
    }
    let reasoning_effort;
    if (body.reasoning) {
        reasoning_effort = body.reasoning.effort === "minimal" ? "low" : body.reasoning.effort;
    }
    const heliconeBody = {
        model: body.model,
        messages,
        max_tokens: body.max_output_tokens,
        temperature: body.temperature,
        top_p: body.top_p,
        top_k: body.top_k,
        n: body.n,
        stream: body.stream,
        tools,
        tool_choice,
        reasoning_effort,
        reasoning_options: body.reasoning_options,
        frequency_penalty: body.frequency_penalty,
        presence_penalty: body.presence_penalty,
        logit_bias: body.logit_bias,
        logprobs: body.logprobs,
        top_logprobs: body.top_logprobs,
        response_format: body.response_format,
        seed: body.seed,
        user: body.user,
        service_tier: body.service_tier,
        parallel_tool_calls: body.parallel_tool_calls,
        stream_options: body.stream_options,
        // Context editing passthrough (only supported by Anthropic - will be stripped for other providers)
        context_editing: body.context_editing,
        image_generation: body.image_generation,
        // Deprecated passthroughs (supported by Chat Completions clients)
        function_call: body.function_call,
        functions: body.functions,
        ...(body.stream ? { stream_options: { include_usage: true } } : {}),
    };
    return heliconeBody;
}
