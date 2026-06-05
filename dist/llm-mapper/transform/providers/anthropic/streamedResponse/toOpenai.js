"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicToOpenAIStreamConverter = void 0;
class AnthropicToOpenAIStreamConverter {
    constructor() {
        this.messageId = "";
        this.model = "";
        this.created = 0;
        this.finalUsage = null;
        this.inputTokens = 0; // Some providers (e.g. Anthropic) don't include input_tokens in the message_delta event
        this.cacheReadInputTokens = 0; // Cache tokens from message_start
        this.cacheCreationInputTokens = 0; // Cache creation tokens from message_start
        this.cacheCreationDetails = null; // Cache creation details from message_start
        this.toolCallState = new Map();
        this.nextToolCallIndex = 0;
        this.annotations = [];
        this.currentContentLength = 0;
        this.thinkingBlockState = new Map(); // Track thinking blocks with their signatures
        this.created = Math.floor(Date.now() / 1000);
    }
    processLines(raw, onChunk) {
        const chunks = [];
        const lines = raw.split("\n");
        for (const line of lines) {
            if (line.startsWith("data: ")) {
                try {
                    const jsonStr = line.slice(6);
                    // Skip the [DONE] message from Anthropic
                    if (jsonStr.trim() === "[DONE]") {
                        continue;
                    }
                    const anthropicEvent = JSON.parse(jsonStr);
                    const openAIEvents = this.convert(anthropicEvent);
                    for (const openAIEvent of openAIEvents) {
                        onChunk(openAIEvent);
                    }
                }
                catch (error) {
                    console.error("Failed to parse SSE data:", error);
                }
            }
            else if (line.startsWith("event:") || line.startsWith(":")) {
                // Skip event type lines and comments
                continue;
            }
        }
    }
    convert(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const chunks = [];
        switch (event.type) {
            case "message_start":
                this.messageId = event.message.id;
                this.model = event.message.model;
                this.inputTokens = (_a = event.message.usage.input_tokens) !== null && _a !== void 0 ? _a : 0;
                this.cacheReadInputTokens =
                    (_b = event.message.usage.cache_read_input_tokens) !== null && _b !== void 0 ? _b : 0;
                this.cacheCreationInputTokens =
                    (_c = event.message.usage.cache_creation_input_tokens) !== null && _c !== void 0 ? _c : 0;
                this.cacheCreationDetails = event.message.usage.cache_creation
                    ? {
                        ephemeral_5m_input_tokens: (_d = event.message.usage.cache_creation.ephemeral_5m_input_tokens) !== null && _d !== void 0 ? _d : 0,
                        ephemeral_1h_input_tokens: (_e = event.message.usage.cache_creation.ephemeral_1h_input_tokens) !== null && _e !== void 0 ? _e : 0,
                    }
                    : null;
                this.toolCallState.clear();
                this.nextToolCallIndex = 0;
                this.annotations = [];
                this.currentContentLength = 0;
                this.thinkingBlockState.clear();
                chunks.push(this.createChunk({
                    choices: [
                        {
                            index: 0,
                            delta: {
                                role: "assistant",
                                content: "",
                            },
                            logprobs: null,
                            finish_reason: null,
                        },
                    ],
                }));
                break;
            case "content_block_start":
                if (event.content_block.type === "text") {
                    // Check if this text block has citations
                    // Only process if citations is an array (web search results), not a config object (document)
                    if (event.content_block.citations &&
                        Array.isArray(event.content_block.citations) &&
                        event.content_block.citations.length > 0) {
                        // Calculate start position for this text block
                        const blockStartIndex = this.currentContentLength;
                        const blockText = event.content_block.text || "";
                        const blockEndIndex = blockStartIndex + blockText.length;
                        // Add citations as annotations
                        for (const citation of event.content_block.citations) {
                            this.annotations.push({
                                type: "url_citation",
                                url_citation: {
                                    url: citation.url,
                                    title: citation.title,
                                    content: citation.cited_text,
                                    start_index: blockStartIndex,
                                    end_index: blockEndIndex,
                                },
                            });
                        }
                    }
                }
                else if (event.content_block.type === "tool_use") {
                    // Store tool call metadata and emit the initial tool call chunk
                    const toolCall = {
                        id: event.content_block.id || "",
                        name: event.content_block.name || "",
                        arguments: "{}",
                        toolCallIndex: this.nextToolCallIndex++,
                        hasNonEmptyDelta: false,
                    };
                    this.toolCallState.set(event.index, toolCall);
                    chunks.push(this.createChunk({
                        choices: [
                            {
                                index: 0,
                                delta: {
                                    tool_calls: [
                                        {
                                            index: toolCall.toolCallIndex,
                                            id: toolCall.id,
                                            type: "function",
                                            function: {
                                                name: toolCall.name,
                                                arguments: "",
                                            },
                                        },
                                    ],
                                },
                                logprobs: null,
                                finish_reason: null,
                            },
                        ],
                    }));
                }
                else if (event.content_block.type === "thinking") {
                    // Initialize thinking block state for this index
                    this.thinkingBlockState.set(event.index, {
                        thinking: "",
                        signature: "",
                    });
                }
                else if (event.content_block.type === "web_search_tool_result" ||
                    event.content_block.type === "server_tool_use") {
                    // Skip server tool use and web_search_tool_result blocks entirely
                    // They represent internal Anthropic operations, not user-defined tools
                }
                break;
            case "content_block_delta":
                if (event.delta.type === "text_delta") {
                    // Track content length for annotation positioning
                    if (event.delta.text) {
                        this.currentContentLength += event.delta.text.length;
                    }
                    chunks.push(this.createChunk({
                        choices: [
                            {
                                index: 0,
                                delta: { content: event.delta.text },
                                logprobs: null,
                                finish_reason: null,
                            },
                        ],
                    }));
                }
                else if (event.delta.type === "input_json_delta") {
                    const toolCall = this.toolCallState.get(event.index);
                    if (toolCall) {
                        // if we receive any non-empty delta, we know this tool call has non-empty input
                        if (event.delta.partial_json !== "") {
                            toolCall.hasNonEmptyDelta = true;
                        }
                        // don't send chunks unless we have non-empty input
                        if (toolCall.hasNonEmptyDelta) {
                            toolCall.arguments += event.delta.partial_json;
                            chunks.push(this.createChunk({
                                choices: [
                                    {
                                        index: 0,
                                        delta: {
                                            tool_calls: [
                                                {
                                                    index: toolCall.toolCallIndex,
                                                    id: toolCall.id,
                                                    type: "function",
                                                    function: {
                                                        arguments: event.delta.partial_json,
                                                    },
                                                },
                                            ],
                                        },
                                        logprobs: null,
                                        finish_reason: null,
                                    },
                                ],
                            }));
                        }
                    }
                }
                else if (event.delta.type === "thinking_delta") {
                    // Accumulate thinking content for this block
                    const thinkingState = this.thinkingBlockState.get(event.index);
                    if (thinkingState) {
                        thinkingState.thinking += event.delta.thinking;
                    }
                    chunks.push(this.createChunk({
                        choices: [
                            {
                                index: 0,
                                delta: { reasoning: event.delta.thinking },
                                logprobs: null,
                                finish_reason: null,
                            },
                        ],
                    }));
                }
                else if (event.delta.type === "signature_delta") {
                    // Accumulate signature for this thinking block
                    const thinkingState = this.thinkingBlockState.get(event.index);
                    if (thinkingState) {
                        thinkingState.signature += event.delta.signature;
                    }
                }
                else if (event.delta.type === "citations_delta") {
                    // Collect citations - will be sent at the end in message_delta
                    const citation = event.delta.citation;
                    this.annotations.push({
                        type: "url_citation",
                        url_citation: {
                            url: citation.url,
                            title: citation.title,
                            content: citation.cited_text,
                            start_index: 0,
                            end_index: this.currentContentLength,
                        },
                    });
                }
                break;
            case "content_block_stop":
                // handle tool calls with empty arguments
                const toolCall = this.toolCallState.get(event.index);
                if (toolCall && !toolCall.hasNonEmptyDelta) {
                    this.emitEmptyToolCallArguments(toolCall, chunks);
                }
                break;
            case "message_delta":
                // if we have any tool calls with empty arguments, emit them with the {} pattern
                this.finalizePendingToolCalls(chunks);
                // Cache tokens may come from message_start (stored in instance vars) or message_delta
                const cachedTokens = (_f = event.usage.cache_read_input_tokens) !== null && _f !== void 0 ? _f : this.cacheReadInputTokens;
                const cacheWriteTokens = (_g = event.usage.cache_creation_input_tokens) !== null && _g !== void 0 ? _g : this.cacheCreationInputTokens;
                const webSearchRequests = (_j = (_h = event.usage.server_tool_use) === null || _h === void 0 ? void 0 : _h.web_search_requests) !== null && _j !== void 0 ? _j : 0;
                const inputTokens = (_k = event.usage.input_tokens) !== null && _k !== void 0 ? _k : this.inputTokens;
                this.finalUsage = {
                    prompt_tokens: inputTokens + (cachedTokens !== null && cachedTokens !== void 0 ? cachedTokens : 0),
                    completion_tokens: event.usage.output_tokens,
                    total_tokens: inputTokens +
                        event.usage.output_tokens +
                        (cachedTokens !== null && cachedTokens !== void 0 ? cachedTokens : 0) +
                        (cacheWriteTokens !== null && cacheWriteTokens !== void 0 ? cacheWriteTokens : 0),
                    ...((cachedTokens > 0 || cacheWriteTokens > 0) && {
                        prompt_tokens_details: {
                            cached_tokens: cachedTokens,
                            audio_tokens: 0,
                            ...(cacheWriteTokens > 0 && {
                                cache_write_tokens: cacheWriteTokens,
                                cache_write_details: {
                                    write_5m_tokens: (_o = (_m = (_l = this.cacheCreationDetails) === null || _l === void 0 ? void 0 : _l.ephemeral_5m_input_tokens) !== null && _m !== void 0 ? _m : cacheWriteTokens) !== null && _o !== void 0 ? _o : 0,
                                    write_1h_tokens: (_q = (_p = this.cacheCreationDetails) === null || _p === void 0 ? void 0 : _p.ephemeral_1h_input_tokens) !== null && _q !== void 0 ? _q : 0,
                                },
                            }),
                        },
                    }),
                    completion_tokens_details: {
                        reasoning_tokens: 0,
                        audio_tokens: 0,
                        accepted_prediction_tokens: 0,
                        rejected_prediction_tokens: 0,
                    },
                    // AI Gateway extension - only present when converting from Anthropic
                    ...(webSearchRequests > 0 && {
                        server_tool_use: {
                            web_search_requests: webSearchRequests,
                        },
                    }),
                };
                const finishReason = this.mapStopReason(event.delta.stop_reason);
                // Collect reasoning_details from accumulated thinking blocks
                const reasoning_details = Array.from(this.thinkingBlockState.values()).filter((state) => state.thinking || state.signature);
                chunks.push(this.createChunk({
                    choices: [
                        {
                            index: 0,
                            delta: {
                                ...(this.annotations.length > 0 && {
                                    annotations: this.annotations,
                                }),
                                ...(reasoning_details.length > 0 && {
                                    reasoning_details,
                                }),
                            },
                            logprobs: null,
                            finish_reason: finishReason,
                        },
                    ],
                }));
                break;
            case "message_stop":
                chunks.push(this.createChunk({
                    choices: [],
                    usage: this.finalUsage || undefined,
                }));
                break;
            case "ping":
            case "error":
                break;
            default:
                break;
        }
        return chunks;
    }
    createChunk(overrides) {
        return {
            id: this.messageId,
            object: "chat.completion.chunk",
            created: this.created,
            model: this.model,
            system_fingerprint: "",
            choices: [],
            ...overrides,
        };
    }
    mapStopReason(reason) {
        switch (reason) {
            case "max_tokens":
                return "length";
            case "tool_use":
                return "tool_calls";
            default:
                return "stop";
        }
    }
    emitEmptyToolCallArguments(toolCall, chunks) {
        // this was a tool call made with empty arguments, so emit the {} pattern
        // When tools are called with empty args, Anthropic just does nothing
        // OpenAI clients expect something like this: (two chunks, { and } deltas)
        chunks.push(this.createChunk({
            choices: [
                {
                    index: 0,
                    delta: {
                        tool_calls: [
                            {
                                index: toolCall.toolCallIndex,
                                id: toolCall.id,
                                type: "function",
                                function: {
                                    arguments: "{",
                                },
                            },
                        ],
                    },
                    logprobs: null,
                    finish_reason: null,
                },
            ],
        }));
        chunks.push(this.createChunk({
            choices: [
                {
                    index: 0,
                    delta: {
                        tool_calls: [
                            {
                                index: toolCall.toolCallIndex,
                                id: toolCall.id,
                                type: "function",
                                function: {
                                    arguments: "}",
                                },
                            },
                        ],
                    },
                    logprobs: null,
                    finish_reason: null,
                },
            ],
        }));
        toolCall.arguments = "{}";
        toolCall.hasNonEmptyDelta = true; // mark as handled
    }
    finalizePendingToolCalls(chunks) {
        this.toolCallState.forEach((toolCall) => {
            if (!toolCall.hasNonEmptyDelta) {
                this.emitEmptyToolCallArguments(toolCall, chunks);
            }
        });
    }
}
exports.AnthropicToOpenAIStreamConverter = AnthropicToOpenAIStreamConverter;
