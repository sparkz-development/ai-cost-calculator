"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRealtimeRequest = void 0;
const contentHelpers_1 = require("../../utils/contentHelpers");
const mapRealtimeRequest = ({ request, response, statusCode = 200, model, }) => {
    var _a, _b;
    const requestMessages = mapRealtimeMessages((request === null || request === void 0 ? void 0 : request.messages) || []);
    const responseMessages = mapRealtimeMessages((response === null || response === void 0 ? void 0 : response.messages) || []);
    const allMessages = [...requestMessages, ...responseMessages];
    const llmSchema = {
        request: {
            model: model || (request === null || request === void 0 ? void 0 : request.model) || "gpt-4o-realtime",
            messages: requestMessages,
            stream: true,
        },
        response: {
            messages: responseMessages,
        },
    };
    return {
        schema: llmSchema,
        preview: {
            request: ((_a = requestMessages[0]) === null || _a === void 0 ? void 0 : _a.content) || "",
            response: ((_b = responseMessages[0]) === null || _b === void 0 ? void 0 : _b.content) || "",
            concatenatedMessages: allMessages,
        },
    };
};
exports.mapRealtimeRequest = mapRealtimeRequest;
const combineAudioBuffers = (audioBuffer, audio_key, type) => {
    // When we hit a commit, we create a combined message from all appends in the current group
    const firstMsg = audioBuffer[0];
    const lastMsg = audioBuffer[audioBuffer.length - 1];
    // Properly combine audio buffers - this is safer than just joining strings
    // First, collect all base64 audio chunks
    const audioChunks = audioBuffer
        .map((m) => m.content[audio_key] || "")
        .filter((chunk) => chunk.length > 0);
    // If we have valid chunks, combine them
    let combinedAudio = audioChunks.join("");
    const combinedMsg = {
        type: firstMsg.type,
        from: lastMsg.from,
        timestamp: lastMsg.timestamp,
        content: {
            type: type,
            audio: combinedAudio,
        },
    };
    return combinedMsg;
};
// Helper function to group audio buffer append messages
const groupAudioBufferMessages = (messages) => {
    const result = [];
    let currentAudioGroup = [];
    let targetAudioGroup = [];
    // First pass: identify groups of audio buffer messages
    for (let i = 0; i < messages.length; i++) {
        const msg = messages[i];
        if (msg.content.type === "response.audio.delta") {
            targetAudioGroup.push(msg);
        }
        else if (msg.content.type === "response.audio.done" &&
            targetAudioGroup.length > 0) {
            result.push(combineAudioBuffers(targetAudioGroup, "delta", "response.audio.combined"));
            targetAudioGroup = [];
        }
        else if (msg.content.type === "input_audio_buffer.append") {
            currentAudioGroup.push(msg);
        }
        else if (msg.content.type === "input_audio_buffer.commit" &&
            currentAudioGroup.length > 0) {
            result.push(combineAudioBuffers(currentAudioGroup, "audio", "input_audio_buffer.combined"));
            currentAudioGroup = []; // Reset the group
        }
        result.push(msg);
    }
    // Add any remaining input audio buffer messages that weren't committed
    if (currentAudioGroup.length > 0) {
        const firstMsg = currentAudioGroup[0];
        // Same safe combining approach as above
        const audioChunks = currentAudioGroup
            .map((m) => m.content.audio || "")
            .filter((chunk) => chunk.length > 0);
        let combinedAudio = "";
        if (audioChunks.length > 0) {
            combinedAudio = audioChunks.join("");
        }
        const combinedMsg = {
            type: firstMsg.type,
            from: firstMsg.from,
            timestamp: firstMsg.timestamp,
            content: {
                type: "input_audio_buffer.combined",
                audio: combinedAudio,
            },
        };
        result.push(combinedMsg);
    }
    return result;
};
const mapRealtimeMessages = (messages) => {
    if (!(messages === null || messages === void 0 ? void 0 : messages.length))
        return [];
    // Group audio buffer messages before processing
    const groupedMessages = groupAudioBufferMessages(messages);
    // Track deleted item IDs
    const deletedItemIds = new Set();
    groupedMessages.forEach((msg) => {
        if (msg.content.type === "conversation.item.delete" &&
            msg.content.item_id) {
            deletedItemIds.add(msg.content.item_id);
        }
    });
    let userTentativeMessage = null;
    let targetTentativeMessage = null;
    let userAudioTentativeMessage = null;
    let targetAudioTentativeMessage = null;
    let message = null;
    return groupedMessages
        .map((msg) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        // Only process specific message types that we want to show
        const output = (_c = (_b = (_a = msg.content) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.output) === null || _c === void 0 ? void 0 : _c[0];
        const item = (_d = msg.content) === null || _d === void 0 ? void 0 : _d.item;
        switch (msg.content.type) {
            case "input_audio_buffer.speech_started":
                if (!userTentativeMessage) {
                    userTentativeMessage = {
                        role: "user",
                        _type: "audio",
                        content: "",
                        start_timestamp: msg.timestamp,
                        trigger_event_id: msg.content.type,
                    };
                }
                break;
            case "input_audio_buffer.append":
                if (!userAudioTentativeMessage) {
                    userAudioTentativeMessage = {
                        role: "user",
                        _type: "audio",
                        content: "",
                        audio_data: "",
                        start_timestamp: msg.timestamp,
                        trigger_event_id: msg.content.type,
                    };
                }
                break;
            case "input_audio_buffer.combined":
                message = {
                    ...userAudioTentativeMessage,
                    role: "user",
                    _type: "audio",
                    content: "Input Audio",
                    audio_data: msg.content.audio,
                    timestamp: msg.timestamp,
                    ending_event_id: msg.content.type,
                };
                userAudioTentativeMessage = null;
                return message;
            case "response.audio.delta":
                if (!targetAudioTentativeMessage) {
                    targetAudioTentativeMessage = {
                        role: "assistant",
                        _type: "audio",
                        start_timestamp: msg.timestamp,
                        trigger_event_id: msg.content.type,
                    };
                }
                break;
            case "response.audio.combined":
                message = {
                    ...targetAudioTentativeMessage,
                    role: "assistant",
                    _type: "audio",
                    content: "Assistant Audio",
                    audio_data: msg.content.audio,
                    timestamp: msg.timestamp,
                    ending_event_id: msg.content.type,
                };
                targetAudioTentativeMessage = null;
                return message;
            case "response.create":
                // -> User: Text
                return ((_f = (_e = msg.content) === null || _e === void 0 ? void 0 : _e.response) === null || _f === void 0 ? void 0 : _f.instructions)
                    ? {
                        role: "user",
                        _type: "message",
                        content: msg.content.response.instructions,
                        timestamp: msg.timestamp,
                    }
                    : null;
            case "response.created":
                if (!targetTentativeMessage) {
                    targetTentativeMessage = {
                        role: msg.from === "target" ? "assistant" : "user",
                        _type: "audio",
                        start_timestamp: msg.timestamp,
                        trigger_event_id: msg.content.type,
                    };
                }
                break;
            case "conversation.item.input_audio_transcription.completed":
                // -> User: Audio (transcript)
                message = ((_g = msg.content) === null || _g === void 0 ? void 0 : _g.transcript)
                    ? {
                        ...userTentativeMessage,
                        role: "user",
                        _type: "audio",
                        content: msg.content.transcript,
                        audio_data: ((_k = (_j = (_h = msg.content.item) === null || _h === void 0 ? void 0 : _h.content) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.audio) || undefined,
                        timestamp: msg.timestamp,
                        ending_event_id: msg.content.type,
                    }
                    : null;
                userTentativeMessage = null;
                return message;
            case "response.done":
                if ((_l = output === null || output === void 0 ? void 0 : output.content) === null || _l === void 0 ? void 0 : _l[0]) {
                    // -> Assistant: Text or Audio
                    const content = output.content[0];
                    if (!content.text && !content.transcript)
                        return null;
                    const message = {
                        ...targetTentativeMessage,
                        role: "assistant",
                        _type: content.text ? "text" : "audio",
                        content: content.text || content.transcript || "",
                        audio_data: content.audio,
                        timestamp: msg.timestamp,
                        ending_event_id: msg.content.type,
                    };
                    targetTentativeMessage = null;
                    return message;
                }
                if ((output === null || output === void 0 ? void 0 : output.type) === "function_call" &&
                    output.name &&
                    output.arguments) {
                    // -> Assistant: Function call
                    try {
                        return {
                            role: "assistant",
                            _type: "functionCall",
                            tool_call_id: output.call_id,
                            tool_calls: [
                                {
                                    name: output.name,
                                    arguments: (0, contentHelpers_1.isJSON)(output.arguments)
                                        ? JSON.parse(output.arguments)
                                        : output.arguments,
                                },
                            ],
                            timestamp: msg.timestamp,
                        };
                    }
                    catch (e) {
                        return null;
                    }
                }
                return null;
            case "conversation.item.create":
                if ((item === null || item === void 0 ? void 0 : item.type) === "function_call_output" && item.output) {
                    // -> Assistant: Function call output
                    return {
                        role: "user",
                        _type: "function",
                        tool_call_id: item.call_id,
                        tool_calls: [
                            {
                                name: undefined,
                                arguments: (0, contentHelpers_1.isJSON)(item.output)
                                    ? JSON.parse(item.output)
                                    : item.output,
                            },
                        ],
                        timestamp: msg.timestamp,
                        id: item.id,
                        // Check if this function call output has been deleted
                        deleted: item.id ? deletedItemIds.has(item.id) : false,
                    };
                }
                // Handle user-created audio items
                if ((item === null || item === void 0 ? void 0 : item.type) === "message" &&
                    item.content &&
                    Array.isArray(item.content) &&
                    ((_m = item.content[0]) === null || _m === void 0 ? void 0 : _m.type) === "input_audio") {
                    return {
                        role: "user",
                        _type: "audio",
                        content: item.content[0].transcript || "",
                        audio_data: item.content[0].audio || null,
                        timestamp: msg.timestamp,
                        id: item.id,
                        // Check if this audio item has been deleted
                        deleted: item.id ? deletedItemIds.has(item.id) : false,
                    };
                }
                // Handle user-created text items
                if ((item === null || item === void 0 ? void 0 : item.type) === "message" &&
                    item.content &&
                    Array.isArray(item.content) &&
                    ((_o = item.content[0]) === null || _o === void 0 ? void 0 : _o.type) === "input_text") {
                    return {
                        role: "user",
                        _type: "message",
                        content: item.content[0].text || "",
                        timestamp: msg.timestamp,
                        id: item.id,
                        // Check if this text item has been deleted
                        deleted: item.id ? deletedItemIds.has(item.id) : false,
                    };
                }
                return null;
            case "session.update":
                // -> User: Session update
                return msg.content
                    ? {
                        role: "user",
                        _type: "message",
                        content: JSON.stringify(msg.content),
                        timestamp: msg.timestamp,
                    }
                    : null;
            case "conversation.item.delete":
                // We don't create a message for delete events, we just track them
                return null;
            default:
                return null;
        }
    })
        .filter((msg) => msg !== null)
        .sort(
    // Sort by timestamp
    (a, b) => {
        var _a, _b;
        return new Date(((_a = a === null || a === void 0 ? void 0 : a.start_timestamp) !== null && _a !== void 0 ? _a : a === null || a === void 0 ? void 0 : a.timestamp) || 0).getTime() -
            new Date(((_b = b === null || b === void 0 ? void 0 : b.start_timestamp) !== null && _b !== void 0 ? _b : b === null || b === void 0 ? void 0 : b.timestamp) || 0).getTime();
    });
};
