"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGoogle = toGoogle;
function toGoogle(openAIBody) {
    var _a;
    const messages = (_a = openAIBody.messages) !== null && _a !== void 0 ? _a : [];
    if (messages.length === 0) {
        throw new Error("Gemini models require at least one message.");
    }
    const contents = [];
    const systemParts = [];
    for (const message of messages) {
        if (!message) {
            continue;
        }
        if (message.role === "system" || message.role === "developer") {
            systemParts.push(...mapContentToGeminiParts(message.content));
            continue;
        }
        if (message.role === "tool" || message.role === "function") {
            const responsePart = mapToolResponse(message);
            if (responsePart) {
                contents.push({
                    role: "user",
                    parts: [responsePart],
                });
            }
            continue;
        }
        const role = mapRole(message.role);
        const parts = [];
        // For assistant messages with reasoning_details, add thinking parts FIRST
        // (similar to Anthropic pattern where thinking blocks must precede content)
        if (message.role === "assistant") {
            const reasoningDetails = message.reasoning_details;
            if (reasoningDetails && Array.isArray(reasoningDetails)) {
                for (const detail of reasoningDetails) {
                    if (detail.thinking) {
                        parts.push({
                            text: detail.thinking,
                            thought: true,
                            ...(detail.signature && { thoughtSignature: detail.signature }),
                        });
                    }
                }
            }
        }
        // Add regular content parts
        parts.push(...mapContentToGeminiParts(message.content));
        if (message.role === "assistant") {
            const toolCallParts = mapToolCallsToParts(message);
            parts.push(...toolCallParts);
            const imageParts = mapImagesToParts(message);
            parts.push(...imageParts);
        }
        if (parts.length === 0) {
            continue;
        }
        contents.push({
            role,
            parts,
        });
    }
    const geminiBody = {
        contents,
    };
    if (systemParts.length > 0) {
        geminiBody.system_instruction = {
            role: "system",
            parts: systemParts,
        };
    }
    const generationConfig = buildGenerationConfig(openAIBody);
    if (generationConfig) {
        geminiBody.generationConfig = generationConfig;
    }
    const tools = buildTools(openAIBody);
    if (tools) {
        geminiBody.tools = tools;
        const toolConfig = buildToolConfig(openAIBody.tool_choice);
        if (toolConfig) {
            geminiBody.toolConfig = toolConfig;
        }
    }
    return geminiBody;
}
function buildGenerationConfig(body) {
    var _a, _b;
    const getNumberOrUndefined = (value) => {
        return typeof value === "number" ? value : undefined;
    };
    const maxOutputTokens = (_b = (_a = getNumberOrUndefined(body.max_completion_tokens)) !== null && _a !== void 0 ? _a : getNumberOrUndefined(body.max_tokens)) !== null && _b !== void 0 ? _b : undefined;
    const stopSequences = Array.isArray(body.stop)
        ? body.stop
        : body.stop
            ? [body.stop]
            : undefined;
    const config = {};
    const temperature = getNumberOrUndefined(body.temperature);
    if (temperature !== undefined) {
        config.temperature = temperature;
    }
    const topP = getNumberOrUndefined(body.top_p);
    if (topP !== undefined) {
        config.topP = topP;
    }
    const topK = getNumberOrUndefined(body.top_k);
    if (topK !== undefined) {
        config.topK = topK;
    }
    if (maxOutputTokens !== undefined) {
        config.maxOutputTokens = maxOutputTokens;
    }
    if (stopSequences && stopSequences.length > 0) {
        config.stopSequences = stopSequences;
    }
    const candidateCount = getNumberOrUndefined(body.n);
    if (candidateCount !== undefined) {
        config.candidateCount = candidateCount;
    }
    const presencePenalty = getNumberOrUndefined(body.presence_penalty);
    if (presencePenalty !== undefined) {
        config.presencePenalty = presencePenalty;
    }
    const frequencyPenalty = getNumberOrUndefined(body.frequency_penalty);
    if (frequencyPenalty !== undefined) {
        config.frequencyPenalty = frequencyPenalty;
    }
    // Handle reasoning/thinking configuration
    const thinkingConfig = buildThinkingConfig(body, maxOutputTokens);
    if (thinkingConfig) {
        config.thinkingConfig = thinkingConfig;
    }
    const imageConfig = buildImageConfig(body);
    if (imageConfig) {
        config.imageConfig = imageConfig;
    }
    // Handle response_format for structured output
    const responseFormatConfig = buildResponseFormatConfig(body);
    if (responseFormatConfig) {
        if (responseFormatConfig.responseMimeType) {
            config.responseMimeType = responseFormatConfig.responseMimeType;
        }
        if (responseFormatConfig.responseSchema) {
            config.responseSchema = responseFormatConfig.responseSchema;
        }
    }
    return Object.keys(config).length > 0 ? config : undefined;
}
/**
 * Converts OpenAI's response_format to Google's responseMimeType and responseSchema.
 *
 * OpenAI format:
 * - { type: "text" } -> No special handling (default)
 * - { type: "json_object" } -> responseMimeType: "application/json"
 * - { type: "json_schema", json_schema: { schema: {...} } } -> responseMimeType + responseSchema
 *
 * Google format:
 * - generationConfig.responseMimeType: "application/json"
 * - generationConfig.responseSchema: { type: "object", properties: {...} }
 */
function buildResponseFormatConfig(body) {
    const responseFormat = body.response_format;
    if (!responseFormat) {
        return undefined;
    }
    // Handle different response_format types
    if (responseFormat.type === "text") {
        // Default behavior, no special config needed
        return undefined;
    }
    if (responseFormat.type === "json_object") {
        // Simple JSON mode without schema
        return {
            responseMimeType: "application/json",
        };
    }
    if (responseFormat.type === "json_schema") {
        const jsonSchema = responseFormat.json_schema;
        if (!(jsonSchema === null || jsonSchema === void 0 ? void 0 : jsonSchema.schema)) {
            // Fallback to simple JSON mode if no schema provided
            return {
                responseMimeType: "application/json",
            };
        }
        // Strip OpenAI-specific fields from the schema (like additionalProperties)
        const cleanedSchema = stripOpenAISchemaFields(jsonSchema.schema);
        return {
            responseMimeType: "application/json",
            responseSchema: cleanedSchema,
        };
    }
    return undefined;
}
/**
 * Checks if the model supports thinkingLevel (Gemini 3+ models).
 * Gemini 2.5 models only support thinkingBudget.
 */
function supportsThinkingLevel(model) {
    const modelLower = model.toLowerCase();
    const geminiMatch = modelLower.match(/gemini-(\d+)/);
    if (geminiMatch) {
        const majorVersion = parseInt(geminiMatch[1], 10);
        return majorVersion >= 3;
    }
    return false;
}
/**
 * Builds the Google thinking configuration from OpenAI reasoning parameters.
 *
 * IMPORTANT: For Google models, reasoning_effort is REQUIRED to enable thinking.
 * budget_tokens alone does NOT enable thinking - it only sets the budget when
 * reasoning_effort is also provided. We have set up "low" as default for Gemini 3+ models.
 *
 * Supports:
 * - reasoning_effort: "low" | "medium" | "high" -> thinkingLevel (for Gemini 3+)
 *   or thinkingBudget: -1 (for Gemini 2.5 models that don't support thinkingLevel)
 * - reasoning_options.budget_tokens -> thinkingBudget (only when reasoning_effort is set)
 * - reasoning_options.thinking_level -> thinkingLevel (overrides reasoning_effort)
 *
 * If no reasoning_effort is provided, it defaults to "low".
 */
function buildThinkingConfig(body, _maxOutputTokens) {
    var _a;
    const model = body.model || "";
    const reasoningOptions = body.reasoning_options;
    // If reasoning_options.thinking_level is explicitly set, use it
    if ((reasoningOptions === null || reasoningOptions === void 0 ? void 0 : reasoningOptions.thinking_level) !== undefined) {
        const thinkingConfig = {
            includeThoughts: true,
            thinkingLevel: reasoningOptions.thinking_level,
        };
        // Also apply budget_tokens if provided
        if (reasoningOptions.budget_tokens !== undefined) {
            thinkingConfig.thinkingBudget = reasoningOptions.budget_tokens;
        }
        return thinkingConfig;
    }
    // Determine if this is a Gemini 3+ model
    const isGemini3Plus = /gemini-3/.test(model.toLowerCase());
    // Default to "low" for Gemini 3+ models, otherwise require explicit reasoning_effort
    const reasoningEffort = (_a = body.reasoning_effort) !== null && _a !== void 0 ? _a : (isGemini3Plus ? "low" : undefined);
    // If no reasoning_effort and not a reasoning model, disable thinking
    if (!reasoningEffort) {
        return {
            thinkingBudget: 0,
        };
    }
    const thinkingConfig = {
        includeThoughts: true,
    };
    const modelSupportsThinkingLevel = supportsThinkingLevel(model);
    // Handle reasoning_effort
    if (modelSupportsThinkingLevel) {
        // Gemini 3+ models: pass through reasoning_effort as thinkingLevel
        // Google supports "low", "medium", "high" (Flash also supports "minimal" via reasoning_options)
        thinkingConfig.thinkingLevel = reasoningEffort;
    }
    else {
        // Gemini 2.5 models: use dynamic thinkingBudget (-1)
        thinkingConfig.thinkingBudget = -1;
    }
    // Apply budget_tokens if provided (only effective when reasoning_effort is set)
    if ((reasoningOptions === null || reasoningOptions === void 0 ? void 0 : reasoningOptions.budget_tokens) !== undefined) {
        thinkingConfig.thinkingBudget = reasoningOptions.budget_tokens;
    }
    return thinkingConfig;
}
function buildImageConfig(body) {
    const heliconeImageConfig = body.image_generation;
    if (heliconeImageConfig === undefined) {
        return undefined;
    }
    const imageConfig = {
        aspectRatio: heliconeImageConfig.aspect_ratio,
        imageSize: heliconeImageConfig.image_size
    };
    return imageConfig;
}
/**
 * Recursively strips OpenAI-specific JSON Schema fields that Gemini doesn't recognize.
 *
 * OpenAI's strict mode requires additionalProperties: false on all object schemas,
 * but Gemini's API rejects this field with:
 * "Unknown name 'additionalProperties' at 'tools[0].function_declarations[0].parameters'"
 *
 * Also handles:
 * - $schema: JSON Schema version identifier (not supported by Gemini)
 * - type as array: OpenAI uses ["string", "null"] for nullable, Gemini uses nullable: true
 */
function stripOpenAISchemaFields(schema) {
    if (!schema || typeof schema !== 'object' || Array.isArray(schema)) {
        return schema;
    }
    // Create a shallow copy to avoid mutating the original
    const cleaned = { ...schema };
    // Remove OpenAI-specific fields
    delete cleaned.additionalProperties;
    delete cleaned.$schema;
    // Handle type as array (e.g., ["string", "null"] for nullable types)
    // Gemini expects type as a single string and uses nullable: true separately
    if (Array.isArray(cleaned.type)) {
        const types = cleaned.type;
        const hasNull = types.includes("null");
        const nonNullTypes = types.filter((t) => t !== "null");
        if (nonNullTypes.length === 1) {
            cleaned.type = nonNullTypes[0];
            if (hasNull) {
                cleaned.nullable = true;
            }
        }
        else if (nonNullTypes.length > 1) {
            // Multiple non-null types - just take the first one as Gemini doesn't support union types
            cleaned.type = nonNullTypes[0];
            if (hasNull) {
                cleaned.nullable = true;
            }
        }
        else if (hasNull && nonNullTypes.length === 0) {
            // Only null type - shouldn't happen but handle gracefully
            cleaned.type = "string";
            cleaned.nullable = true;
        }
    }
    // Recurse into properties
    if (cleaned.properties && typeof cleaned.properties === 'object') {
        cleaned.properties = Object.fromEntries(Object.entries(cleaned.properties).map(([key, value]) => [
            key,
            stripOpenAISchemaFields(value),
        ]));
    }
    // Handle array items (can be a single schema or array of schemas for tuple validation)
    if (cleaned.items) {
        if (Array.isArray(cleaned.items)) {
            cleaned.items = cleaned.items.map((item) => stripOpenAISchemaFields(item));
        }
        else {
            cleaned.items = stripOpenAISchemaFields(cleaned.items);
        }
    }
    // Handle allOf, anyOf, oneOf
    for (const combiner of ['allOf', 'anyOf', 'oneOf']) {
        if (Array.isArray(cleaned[combiner])) {
            cleaned[combiner] = cleaned[combiner].map((subSchema) => stripOpenAISchemaFields(subSchema));
        }
    }
    // Handle $defs / definitions (JSON Schema references)
    for (const defsKey of ['$defs', 'definitions']) {
        if (cleaned[defsKey] && typeof cleaned[defsKey] === 'object') {
            cleaned[defsKey] = Object.fromEntries(Object.entries(cleaned[defsKey]).map(([key, value]) => [
                key,
                stripOpenAISchemaFields(value),
            ]));
        }
    }
    return cleaned;
}
function buildTools(body) {
    if (!body.tools || body.tools.length === 0) {
        return undefined;
    }
    const isFunctionTool = (tool) => tool.type === "function" && Boolean(tool.function);
    const functions = body.tools
        .filter(isFunctionTool)
        .map((tool) => ({
        name: tool.function.name,
        description: tool.function.description,
        parameters: stripOpenAISchemaFields(tool.function.parameters),
    }));
    if (functions.length === 0) {
        return undefined;
    }
    return [
        {
            functionDeclarations: functions,
        },
    ];
}
function buildToolConfig(toolChoice) {
    var _a;
    if (!toolChoice) {
        return undefined;
    }
    if (toolChoice === "none") {
        return {
            function_calling_config: {
                mode: "NONE",
            },
        };
    }
    if (toolChoice === "auto") {
        return {
            function_calling_config: {
                mode: "AUTO",
            },
        };
    }
    if (typeof toolChoice === "object" &&
        toolChoice.type === "function" &&
        ((_a = toolChoice.function) === null || _a === void 0 ? void 0 : _a.name)) {
        return {
            function_calling_config: {
                mode: "ANY",
                allowed_function_names: [toolChoice.function.name],
            },
        };
    }
    return undefined;
}
function mapRole(role) {
    return role === "assistant" ? "model" : "user";
}
function mapContentToGeminiParts(content) {
    var _a, _b;
    if (!content) {
        return [];
    }
    if (typeof content === "string") {
        return content.length > 0 ? [{ text: content }] : [];
    }
    const parts = [];
    for (const part of content) {
        if (!part) {
            continue;
        }
        switch (part.type) {
            case "text":
                if ((_a = part.text) === null || _a === void 0 ? void 0 : _a.length) {
                    parts.push({ text: part.text });
                }
                break;
            case "image_url":
                if ((_b = part.image_url) === null || _b === void 0 ? void 0 : _b.url) {
                    const dataUri = part.image_url.url;
                    if (dataUri.startsWith("data:")) {
                        const [meta, data] = dataUri.split(",");
                        let mimeType = meta.split(";")[0].replace("data:", "");
                        if (!mimeType || mimeType.trim() === "") {
                            mimeType = "application/octet-stream";
                        }
                        parts.push({
                            inlineData: {
                                mimeType,
                                data,
                            },
                        });
                    }
                    else {
                        let mimeType = undefined;
                        try {
                            const urlObj = new URL(dataUri);
                            const pathname = urlObj.pathname.toLowerCase();
                            if (pathname.endsWith(".png"))
                                mimeType = "image/png";
                            else if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg"))
                                mimeType = "image/jpeg";
                            else if (pathname.endsWith(".gif"))
                                mimeType = "image/gif";
                            else if (pathname.endsWith(".webp"))
                                mimeType = "image/webp";
                            else if (pathname.endsWith(".bmp"))
                                mimeType = "image/bmp";
                            else if (pathname.endsWith(".svg"))
                                mimeType = "image/svg+xml";
                        }
                        catch (_c) {
                            // non-URL or extension not detectable
                        }
                        parts.push({
                            fileData: {
                                fileUri: dataUri,
                                ...(mimeType ? { mimeType } : {}),
                            },
                        });
                    }
                }
                break;
            default:
                break;
        }
    }
    return parts;
}
function mapToolCallsToParts(message) {
    var _a, _b;
    const parts = [];
    const toolCalls = message.tool_calls;
    const legacyCall = message.function_call;
    if (Array.isArray(toolCalls)) {
        for (const toolCall of toolCalls) {
            parts.push({
                functionCall: {
                    name: (_a = toolCall.function) === null || _a === void 0 ? void 0 : _a.name,
                    args: parseArguments((_b = toolCall.function) === null || _b === void 0 ? void 0 : _b.arguments),
                },
            });
        }
    }
    else if (legacyCall) {
        parts.push({
            functionCall: {
                name: legacyCall.name,
                args: parseArguments(legacyCall.arguments),
            },
        });
    }
    return parts;
}
function mapToolResponse(message) {
    const response = parseArguments(message.content);
    const name = message.name || message.tool_call_id || "tool";
    if (!response) {
        return null;
    }
    return {
        functionResponse: {
            name,
            response,
        },
    };
}
function parseArguments(value) {
    if (!value) {
        return undefined;
    }
    if (Array.isArray(value)) {
        const textContent = value
            .map((part) => (part.type === "text" ? part.text : undefined))
            .filter((text) => !!(text === null || text === void 0 ? void 0 : text.length))
            .join("\n");
        if (!textContent) {
            return undefined;
        }
        value = textContent;
    }
    if (typeof value !== "string") {
        return undefined;
    }
    try {
        const parsed = JSON.parse(value);
        // If the parsed value is a primitive (number, string, boolean, null), wrap it
        // Google's API requires functionResponse.response to be an object (Struct)
        if (typeof parsed !== 'object' || parsed === null) {
            return { result: parsed };
        }
        return parsed;
    }
    catch (_a) {
        return { raw: value };
    }
}
/**
 * Maps images from assistant messages to Gemini inlineData parts.
 * This handles image outputs that were generated by previous model responses.
 */
function mapImagesToParts(message) {
    var _a;
    const parts = [];
    if (!message.images) {
        return parts;
    }
    for (const image of message.images) {
        if (image.type === "image_url" && ((_a = image.image_url) === null || _a === void 0 ? void 0 : _a.url)) {
            const dataUri = image.image_url.url;
            if (dataUri.startsWith("data:")) {
                const [meta, data] = dataUri.split(",");
                let mimeType = meta.split(";")[0].replace("data:", "");
                if (!mimeType || mimeType.trim() === "") {
                    mimeType = "image/png";
                }
                parts.push({
                    inlineData: { mimeType, data },
                });
            }
        }
    }
    return parts;
}
