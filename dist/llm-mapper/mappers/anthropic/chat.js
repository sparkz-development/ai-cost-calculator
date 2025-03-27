"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAnthropicRequest = void 0;
const requestParser_1 = require("./requestParser");
const responseParser_1 = require("./responseParser");
const getRequestText = (requestBody) => {
    var _a, _b, _c;
    const result = requestBody.tooLarge
        ? "Helicone Message: Input too large"
        : requestBody.prompt || ((_c = (_b = (_a = requestBody.messages) === null || _a === void 0 ? void 0 : _a.slice(-1)) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.content) || "";
    if (typeof result === "string") {
        return result;
    }
    if (Array.isArray(result)) {
        return result.map((item) => item.text || JSON.stringify(item)).join(" ");
    }
    return JSON.stringify(result);
};
const getResponseText = (responseBody, statusCode = 200) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if ([200, 201, -3].includes(statusCode)) {
        if (responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) {
            return ((_a = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _a === void 0 ? void 0 : _a.message) || "";
        }
        // Handle AWS Bedrock Anthropic format
        if ((_c = (_b = responseBody === null || responseBody === void 0 ? void 0 : responseBody.output) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content) {
            const content = responseBody.output.message.content;
            if (Array.isArray(content) && ((_d = content[0]) === null || _d === void 0 ? void 0 : _d.text)) {
                return content[0].text || "";
            }
        }
        // Handle new format
        if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.content) && Array.isArray(responseBody.content)) {
            const textContent = responseBody.content.find((item) => item.type === "text");
            if (textContent) {
                // Remove any undefined values and clean up the text
                return (textContent.text || "").replace(/undefined/g, "").trim();
            }
        }
        // Handle old format with choices
        if ((responseBody === null || responseBody === void 0 ? void 0 : responseBody.choices) && Array.isArray(responseBody.choices)) {
            const choice = responseBody.choices[0];
            if (typeof ((_e = choice === null || choice === void 0 ? void 0 : choice.message) === null || _e === void 0 ? void 0 : _e.content) === "string") {
                try {
                    // Try to parse stringified JSON content
                    const parsedContent = JSON.parse(choice.message.content);
                    if (Array.isArray(parsedContent)) {
                        const textContent = parsedContent.find((item) => item.type === "text");
                        if (textContent) {
                            return (textContent.text || "").replace(/undefined/g, "").trim();
                        }
                    }
                    return JSON.stringify(parsedContent);
                }
                catch (e) {
                    // If parsing fails, return the content as is
                    return choice.message.content;
                }
            }
        }
        // Handle old format with content array
        if (Array.isArray(responseBody === null || responseBody === void 0 ? void 0 : responseBody.content)) {
            const toolUse = responseBody.content.find((item) => item.type === "tool_use");
            if (toolUse) {
                return `${toolUse.name}(${JSON.stringify(toolUse.input)})`;
            }
            const textContent = (_f = responseBody.content) === null || _f === void 0 ? void 0 : _f.find((item) => item.type === "text");
            if (textContent) {
                // Remove any undefined values and clean up the text
                return (textContent.text || "").replace(/undefined/g, "").trim();
            }
        }
        return (responseBody === null || responseBody === void 0 ? void 0 : responseBody.body)
            ? (_h = (_g = responseBody === null || responseBody === void 0 ? void 0 : responseBody.body) === null || _g === void 0 ? void 0 : _g.completion) !== null && _h !== void 0 ? _h : ""
            : (_j = responseBody === null || responseBody === void 0 ? void 0 : responseBody.completion) !== null && _j !== void 0 ? _j : "";
    }
    else if (statusCode === 0 || statusCode === null) {
        return "";
    }
    else {
        return ((_k = responseBody === null || responseBody === void 0 ? void 0 : responseBody.error) === null || _k === void 0 ? void 0 : _k.message) || "";
    }
};
const mapAnthropicRequest = ({ request, response, statusCode = 200, model, }) => {
    var _a;
    const requestMessages = (0, requestParser_1.getRequestMessages)(request);
    const responseData = (0, responseParser_1.getLLMSchemaResponse)(response);
    // Ensure we have a valid response object with messages
    const llmSchema = {
        request: {
            messages: requestMessages,
            tool_choice: request.tool_choice,
            max_tokens: request.max_tokens,
            model: request.model || model,
            tools: (_a = request.tools) === null || _a === void 0 ? void 0 : _a.map((tool) => ({
                name: tool.name,
                description: tool.description,
                parameters: tool.input_schema,
            })),
        },
        response: (responseData === null || responseData === void 0 ? void 0 : responseData.error)
            ? responseData
            : {
                messages: (responseData === null || responseData === void 0 ? void 0 : responseData.messages) || [],
                model: (responseData === null || responseData === void 0 ? void 0 : responseData.model) || request.model || model,
            },
    };
    const concatenatedMessages = [
        ...requestMessages,
        ...((responseData === null || responseData === void 0 ? void 0 : responseData.messages) || []),
    ];
    return {
        schema: llmSchema,
        preview: {
            request: getRequestText(request),
            response: getResponseText(response, statusCode),
            concatenatedMessages,
        },
    };
};
exports.mapAnthropicRequest = mapAnthropicRequest;
