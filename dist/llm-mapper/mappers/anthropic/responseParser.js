"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLLMSchemaResponse = void 0;
const randomId = () => {
    return (Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15));
};
const anthropicContentToMessage = (content, role) => {
    var _a, _b;
    if (!(content === null || content === void 0 ? void 0 : content.type)) {
        return {
            id: (content === null || content === void 0 ? void 0 : content.id) || randomId(),
            content: typeof content === "string"
                ? content
                : Array.isArray(content)
                    ? content
                        .map((item) => item.text || JSON.stringify(item))
                        .join(" ")
                    : JSON.stringify(content, null, 2),
            _type: "message",
            role,
        };
    }
    if (content.type === "text") {
        return {
            id: content.id || randomId(),
            content: (content.text || JSON.stringify(content, null, 2))
                .replace(/undefined/g, "")
                .trim(),
            _type: "message",
            role,
        };
    }
    else if (content.type === "tool_use") {
        return {
            id: content.id || randomId(),
            content: "",
            role: "assistant",
            tool_calls: [
                {
                    name: (_a = content.name) !== null && _a !== void 0 ? _a : "",
                    arguments: (_b = content.input) !== null && _b !== void 0 ? _b : {},
                },
            ],
            _type: "functionCall",
        };
    }
    else {
        return {
            id: content.id || randomId(),
            role: role,
            content: typeof content === "string"
                ? content
                : Array.isArray(content)
                    ? content
                        .map((item) => item.text || JSON.stringify(item))
                        .join(" ")
                    : JSON.stringify(content, null, 2),
            _type: "message",
        };
    }
};
const getLLMSchemaResponse = (response) => {
    var _a, _b, _c, _d, _e;
    if ("error" in response) {
        if ("heliconeMessage" in response.error) {
            return {
                error: {
                    heliconeMessage: response.error.heliconeMessage,
                },
            };
        }
        else {
            return {
                error: {
                    heliconeMessage: JSON.stringify(response.error, null, 2),
                },
            };
        }
    }
    else {
        const messages = [];
        // Handle AWS Bedrock Anthropic format
        if ((_b = (_a = response.output) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) {
            if (Array.isArray(response.output.message.content)) {
                for (const content of response.output.message.content) {
                    const message = anthropicContentToMessage(content, response.output.message.role || "assistant");
                    if (typeof message.content === "string") {
                        message.content = message.content.replace(/undefined/g, "").trim();
                    }
                    messages.push(message);
                }
            }
            else {
                const message = anthropicContentToMessage(response.output.message.content, response.output.message.role || "assistant");
                if (typeof message.content === "string") {
                    message.content = message.content.replace(/undefined/g, "").trim();
                }
                messages.push(message);
            }
        }
        // Handle new Claude 3 format and message_stop type
        else if (((response === null || response === void 0 ? void 0 : response.type) === "message" || (response === null || response === void 0 ? void 0 : response.type) === "message_stop") &&
            (response === null || response === void 0 ? void 0 : response.content)) {
            if (Array.isArray(response.content)) {
                for (const content of response.content) {
                    const message = anthropicContentToMessage(content, response.role);
                    // Clean up any undefined strings in the content
                    if (typeof message.content === "string") {
                        message.content = message.content.replace(/undefined/g, "").trim();
                    }
                    messages.push(message);
                }
            }
            else {
                const message = anthropicContentToMessage(response.content, response.role);
                // Clean up any undefined strings in the content
                if (typeof message.content === "string") {
                    message.content = message.content.replace(/undefined/g, "").trim();
                }
                messages.push(message);
            }
        }
        // Handle old format with choices
        else if ((response === null || response === void 0 ? void 0 : response.choices) && Array.isArray(response === null || response === void 0 ? void 0 : response.choices)) {
            for (const choice of response === null || response === void 0 ? void 0 : response.choices) {
                if (Array.isArray((_c = choice.message) === null || _c === void 0 ? void 0 : _c.content)) {
                    for (const content of choice.message.content) {
                        const message = anthropicContentToMessage(content, choice.message.role);
                        // Clean up any undefined strings in the content
                        if (typeof message.content === "string") {
                            message.content = message.content
                                .replace(/undefined/g, "")
                                .trim();
                        }
                        messages.push(message);
                    }
                }
                else if (typeof ((_d = choice.message) === null || _d === void 0 ? void 0 : _d.content) === "string") {
                    try {
                        // Try to parse the content as JSON if it's a string
                        const parsedContent = JSON.parse(choice.message.content);
                        if (Array.isArray(parsedContent)) {
                            for (const content of parsedContent) {
                                const message = anthropicContentToMessage(content, choice.message.role);
                                // Clean up any undefined strings in the content
                                if (typeof message.content === "string") {
                                    message.content = message.content
                                        .replace(/undefined/g, "")
                                        .trim();
                                }
                                messages.push(message);
                            }
                        }
                        else {
                            const message = anthropicContentToMessage(parsedContent, choice.message.role);
                            // Clean up any undefined strings in the content
                            if (typeof message.content === "string") {
                                message.content = message.content
                                    .replace(/undefined/g, "")
                                    .trim();
                            }
                            messages.push(message);
                        }
                    }
                    catch (e) {
                        // If parsing fails, treat it as regular text content
                        const message = anthropicContentToMessage({ type: "text", text: choice.message.content }, choice.message.role);
                        // Clean up any undefined strings in the content
                        if (typeof message.content === "string") {
                            message.content = message.content
                                .replace(/undefined/g, "")
                                .trim();
                        }
                        messages.push(message);
                    }
                }
                else if ((_e = choice.message) === null || _e === void 0 ? void 0 : _e.content) {
                    const message = anthropicContentToMessage(choice.message.content, choice.message.role);
                    // Clean up any undefined strings in the content
                    if (typeof message.content === "string") {
                        message.content = message.content.replace(/undefined/g, "").trim();
                    }
                    messages.push(message);
                }
            }
        }
        return {
            messages,
            model: response === null || response === void 0 ? void 0 : response.model,
        };
    }
};
exports.getLLMSchemaResponse = getLLMSchemaResponse;
