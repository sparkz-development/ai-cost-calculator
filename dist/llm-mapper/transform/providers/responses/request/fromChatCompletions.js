"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromChatCompletions = fromChatCompletions;
const crypto_1 = require("crypto");
/**
 * Maps Chat Completions role to Responses API role
 */
function mapRole(role) {
    if (role === "system" || role === "developer")
        return "developer";
    if (role === "assistant")
        return "assistant";
    return "user";
}
/**
 * Converts Chat Completions content parts to Responses API content parts
 */
function convertContentParts(parts) {
    return parts.map((p) => {
        if (p.type === "text") {
            return { type: "input_text", text: p.text };
        }
        if (p.type === "image_url") {
            return {
                type: "input_image",
                image_url: typeof p.image_url === "string" ? p.image_url : p.image_url.url,
                detail: typeof p.image_url === "object" ? p.image_url.detail : undefined,
            };
        }
        // Pass through other types as-is (e.g., document)
        return p;
    });
}
/**
 * Converts a single Chat Completions message to Responses API input item(s)
 */
function convertMessageToResponsesInput(msg) {
    const items = [];
    // Handle tool calls in assistant messages -> function_call items
    if (msg.role === "assistant" && "tool_calls" in msg && msg.tool_calls) {
        // First, add the reasoning item if present
        if ("reasoning" in msg && msg.reasoning) {
            items.push({
                id: (0, crypto_1.randomUUID)(),
                type: "reasoning",
                summary: [{ type: "summary_text", text: msg.reasoning }],
            });
        }
        if ("reasoning_details" in msg && msg.reasoning_details) {
            for (const detail of msg.reasoning_details) {
                items.push({
                    id: (0, crypto_1.randomUUID)(),
                    type: "reasoning",
                    summary: [{ type: "summary_text", text: detail.thinking }],
                    encrypted_content: detail.signature || undefined,
                });
            }
        }
        // Add function_call items for each tool call
        for (const toolCall of msg.tool_calls) {
            // Only handle function type tool calls
            if (toolCall.type === "function" && "function" in toolCall) {
                items.push({
                    type: "function_call",
                    id: toolCall.id,
                    call_id: toolCall.id,
                    name: toolCall.function.name,
                    arguments: toolCall.function.arguments,
                });
            }
        }
        return items;
    }
    // Handle tool responses -> function_call_output
    if (msg.role === "tool" && "tool_call_id" in msg) {
        items.push({
            type: "function_call_output",
            call_id: msg.tool_call_id,
            output: typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content),
        });
        return items;
    }
    // Handle reasoning in assistant messages without tool calls
    if (msg.role === "assistant") {
        if ("reasoning" in msg && msg.reasoning) {
            items.push({
                id: (0, crypto_1.randomUUID)(),
                type: "reasoning",
                summary: [{ type: "summary_text", text: msg.reasoning }],
            });
        }
        if ("reasoning_details" in msg && msg.reasoning_details) {
            for (const detail of msg.reasoning_details) {
                items.push({
                    id: (0, crypto_1.randomUUID)(),
                    type: "reasoning",
                    summary: [{ type: "summary_text", text: detail.thinking }],
                    encrypted_content: detail.signature || undefined,
                });
            }
        }
    }
    // Regular message
    const role = mapRole(msg.role);
    if (msg.content === null || msg.content === undefined) {
        // Skip messages with null content (unless they had tool_calls which we handled above)
        if (items.length > 0)
            return items;
        // Return empty message
        items.push({
            type: "message",
            role,
            content: "",
        });
        return items;
    }
    if (typeof msg.content === "string") {
        items.push({
            type: "message",
            role,
            content: msg.content,
        });
        return items;
    }
    // Array content - convert parts
    const content = convertContentParts(msg.content);
    items.push({
        type: "message",
        role,
        content,
    });
    return items;
}
/**
 * Converts Chat Completions tools to Responses API tool definitions
 */
function convertTools(tools) {
    if (!tools || tools.length === 0)
        return undefined;
    return tools
        .filter((t) => t.type === "function" && "function" in t)
        .map((t) => ({
        type: "function",
        name: t.function.name,
        description: t.function.description,
        parameters: t.function.parameters,
    }));
}
/**
 * Converts a Chat Completions request body to Responses API format.
 *
 * This is used after prompt merging to convert the merged Chat Completions body
 * back to Responses API format for the final request.
 *
 * @param body - The Chat Completions request body (merged with prompt)
 * @param originalResponsesBody - Optional original Responses API request to preserve Responses-specific fields
 * @returns The converted Responses API request body
 */
function fromChatCompletions(body, originalResponsesBody) {
    const inputItems = [];
    // Convert all messages to Responses format input items
    // System messages become developer role (mimics Chat Completions structure)
    for (const msg of body.messages || []) {
        const items = convertMessageToResponsesInput(msg);
        inputItems.push(...items);
    }
    // Keep input as array to mimic Chat Completions message structure
    const input = inputItems;
    // Map tools
    const tools = convertTools(body.tools);
    // Map tool_choice
    let tool_choice = originalResponsesBody === null || originalResponsesBody === void 0 ? void 0 : originalResponsesBody.tool_choice;
    if (body.tool_choice) {
        if (typeof body.tool_choice === "string") {
            tool_choice = body.tool_choice;
        }
        else if (typeof body.tool_choice === "object" &&
            "function" in body.tool_choice) {
            tool_choice = {
                type: "function",
                function: { name: body.tool_choice.function.name },
            };
        }
    }
    // Map reasoning effort
    let reasoning = originalResponsesBody === null || originalResponsesBody === void 0 ? void 0 : originalResponsesBody.reasoning;
    if (body.reasoning_effort) {
        reasoning = {
            ...reasoning,
            effort: body.reasoning_effort === "low"
                ? "minimal"
                : body.reasoning_effort,
        };
    }
    // Build the final Responses API body
    // Use != null checks to filter out both null and undefined (OpenAI types use null, Responses uses undefined)
    const responsesBody = {
        model: body.model,
        input,
        // Preserve instructions from original request if provided
        ...((originalResponsesBody === null || originalResponsesBody === void 0 ? void 0 : originalResponsesBody.instructions) != null && {
            instructions: originalResponsesBody.instructions,
        }),
        // Map common parameters (filter out null values)
        ...(body.max_tokens != null && { max_output_tokens: body.max_tokens }),
        ...(body.temperature != null && { temperature: body.temperature }),
        ...(body.top_p != null && { top_p: body.top_p }),
        ...(body.top_k != null && { top_k: body.top_k }),
        ...(body.n != null && { n: body.n }),
        ...(body.stream != null && { stream: body.stream }),
        ...(body.frequency_penalty != null && {
            frequency_penalty: body.frequency_penalty,
        }),
        ...(body.presence_penalty != null && {
            presence_penalty: body.presence_penalty,
        }),
        ...(body.logit_bias != null && { logit_bias: body.logit_bias }),
        ...(body.logprobs != null && { logprobs: body.logprobs }),
        ...(body.top_logprobs != null && { top_logprobs: body.top_logprobs }),
        ...(body.response_format != null && {
            response_format: body.response_format,
        }),
        ...(body.seed != null && { seed: body.seed }),
        ...(body.user != null && { user: body.user }),
        ...(body.service_tier != null && { service_tier: body.service_tier }),
        ...(body.parallel_tool_calls != null && {
            parallel_tool_calls: body.parallel_tool_calls,
        }),
        // Note: stream_options is NOT included here as it's a Chat Completions-only parameter
        // The Responses API handles streaming usage differently
        // Tools
        ...(tools && { tools }),
        ...(tool_choice && { tool_choice }),
        // Reasoning
        ...(reasoning && { reasoning }),
        ...(body.reasoning_options != null && {
            reasoning_options: body.reasoning_options,
        }),
        // Context editing (Anthropic-specific)
        ...(body.context_editing != null && {
            context_editing: body.context_editing,
        }),
        // Image generation
        ...(body.image_generation != null && {
            image_generation: body.image_generation,
        }),
        // Preserve Responses-specific fields from original request
        ...((originalResponsesBody === null || originalResponsesBody === void 0 ? void 0 : originalResponsesBody.metadata) != null && {
            metadata: originalResponsesBody.metadata,
        }),
        ...((originalResponsesBody === null || originalResponsesBody === void 0 ? void 0 : originalResponsesBody.previous_response_id) != null && {
            previous_response_id: originalResponsesBody.previous_response_id,
        }),
        ...((originalResponsesBody === null || originalResponsesBody === void 0 ? void 0 : originalResponsesBody.store) != null && {
            store: originalResponsesBody.store,
        }),
        ...((originalResponsesBody === null || originalResponsesBody === void 0 ? void 0 : originalResponsesBody.truncation) != null && {
            truncation: originalResponsesBody.truncation,
        }),
        ...((originalResponsesBody === null || originalResponsesBody === void 0 ? void 0 : originalResponsesBody.text) != null && {
            text: originalResponsesBody.text,
        }),
    };
    return responsesBody;
}
