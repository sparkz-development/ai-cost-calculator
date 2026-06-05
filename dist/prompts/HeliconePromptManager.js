"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeliconePromptManager = void 0;
const templates_1 = require("@helicone-package/prompts/templates");
class HeliconePromptManager {
    constructor(options) {
        this.apiKey = options.apiKey;
        this.baseUrl = options.baseUrl || "https://api.helicone.ai";
    }
    /**
     * Finds the prompt version dynamically based on prompt params
     * @param params - The chat completion parameters containing prompt_id, optional version_id, inputs, and other OpenAI parameters
     * @returns Object containing the compiled prompt body and any validation/substitution errors
     */
    async pullPromptVersion(params) {
        const { prompt_id, version_id, environment } = params;
        if (!prompt_id) {
            throw new Error("No prompt ID provided");
        }
        if (environment) {
            return await this.getEnvironmentVersion(prompt_id, environment);
        }
        if (version_id) {
            return await this.getPromptVersion(version_id);
        }
        return await this.getProductionVersion(prompt_id);
    }
    /**
     * Pulls a prompt body from Helicone storage by prompt ID and optional version ID
     * @param promptId - The unique identifier of the prompt
     * @param versionId - Optional version ID, if not provided uses production version
     * @returns The raw prompt body from storage
     */
    async pullPromptBody(params) {
        try {
            const promptVersion = await this.pullPromptVersion(params);
            const promptBody = await this.fetchPromptBodyFromS3(promptVersion === null || promptVersion === void 0 ? void 0 : promptVersion.s3_url);
            return promptBody;
        }
        catch (error) {
            console.error("Error pulling prompt body:", error);
            throw error;
        }
    }
    /**
     * Pulls a prompt body from Helicone storage by version ID
     * @param versionId - The unique identifier of the prompt version
     * @returns The raw prompt body from storage
     */
    async pullPromptBodyByVersionId(versionId) {
        try {
            const promptVersion = await this.getPromptVersion(versionId);
            const promptBody = await this.fetchPromptBodyFromS3(promptVersion === null || promptVersion === void 0 ? void 0 : promptVersion.s3_url);
            return promptBody;
        }
        catch (error) {
            console.error("Error pulling prompt body:", error);
            throw error;
        }
    }
    /**
     * Extracts all prompt partial variables from a source prompt body.
     * @param sourcePromptBody - The source prompt body to extract prompt partial variables from
     * @returns Array of unique prompt partial variables found in the body
     */
    extractPromptPartials(sourcePromptBody) {
        const allPartialVariables = [];
        const seenPartials = new Set();
        // extract prompt partial variables from all messages
        const messages = sourcePromptBody.messages || [];
        for (const message of messages) {
            if (typeof message.content === "string") {
                const partialVars = templates_1.HeliconeTemplateManager.extractPromptPartialVariables(message.content);
                for (const partialVar of partialVars) {
                    if (!seenPartials.has(partialVar.raw)) {
                        seenPartials.add(partialVar.raw);
                        allPartialVariables.push(partialVar);
                    }
                }
            }
            else if (Array.isArray(message.content)) {
                // extract prompt partial variables from text parts in content arrays
                for (const contentPart of message.content) {
                    if (contentPart.type === "text") {
                        const partialVars = templates_1.HeliconeTemplateManager.extractPromptPartialVariables(contentPart.text);
                        for (const partialVar of partialVars) {
                            if (!seenPartials.has(partialVar.raw)) {
                                seenPartials.add(partialVar.raw);
                                allPartialVariables.push(partialVar);
                            }
                        }
                    }
                }
            }
        }
        return allPartialVariables;
    }
    getPromptPartialSubstitutionValue(promptPartial, sourceBody) {
        if (!sourceBody.messages || promptPartial.index < 0) {
            return "";
        }
        const chosenMessage = sourceBody.messages[promptPartial.index];
        if (!chosenMessage) {
            return "";
        }
        if (typeof chosenMessage.content === "string") {
            return chosenMessage.content;
        }
        else if (Array.isArray(chosenMessage.content)) {
            return chosenMessage.content
                .map((contentPart) => {
                if (contentPart.type === "text" && contentPart.text) {
                    return contentPart.text;
                }
                return "";
            })
                .filter((text) => text.length > 0)
                .join(" ");
        }
        return "";
    }
    /**
     * Merge
     * @param params - The chat completion parameters containing prompt_id, optional version_id, inputs, and other OpenAI parameters
     * @param sourcePromptBody - The source prompt body to merge with
     * @param promptPartialInputs - Optional map of prompt partial inputs for substitution (if not provided, prompt partials will not be substituted)
     * @returns Object containing the compiled prompt body and any validation/substitution errors
     */
    async mergePromptBody(params, sourcePromptBody, promptPartialInputs) {
        var _a, _b, _c;
        const errors = [];
        const substitutionValues = params.inputs || {};
        const partialInputs = promptPartialInputs || {};
        const mergedMessages = [
            ...(sourcePromptBody.messages || []),
            ...(params.messages || []),
        ];
        const substitutedMessages = mergedMessages.map((message) => {
            if (typeof message.content === "string") {
                const substituted = templates_1.HeliconeTemplateManager.substituteVariables(message.content, substitutionValues, partialInputs);
                if (!substituted.success) {
                    errors.push(...(substituted.errors || []));
                }
                return {
                    ...message,
                    content: substituted.success ? substituted.result : message.content,
                };
            }
            else if (Array.isArray(message.content)) {
                // for content arrays, iterate and substitute each text part
                const substitutedContentParts = [];
                for (const contentPart of message.content) {
                    if (contentPart.type === "text") {
                        const substituted = templates_1.HeliconeTemplateManager.substituteVariables(contentPart.text, substitutionValues, partialInputs);
                        if (!substituted.success) {
                            errors.push(...(substituted.errors || []));
                        }
                        substitutedContentParts.push({
                            ...contentPart,
                            text: substituted.success ? substituted.result : contentPart.text,
                        });
                    }
                    else {
                        substitutedContentParts.push(contentPart);
                    }
                }
                return {
                    ...message,
                    content: substitutedContentParts,
                };
            }
            return message;
        });
        let finalResponseFormat = (_a = params.response_format) !== null && _a !== void 0 ? _a : sourcePromptBody.response_format;
        if (finalResponseFormat) {
            const substitutedResponseFormat = templates_1.HeliconeTemplateManager.substituteVariablesJSON(finalResponseFormat, substitutionValues);
            if (!substitutedResponseFormat.success) {
                errors.push(...(substitutedResponseFormat.errors || []));
            }
            finalResponseFormat = substitutedResponseFormat.success
                ? substitutedResponseFormat.result
                : finalResponseFormat;
        }
        let finalTools = [...((_b = sourcePromptBody.tools) !== null && _b !== void 0 ? _b : []), ...((_c = params.tools) !== null && _c !== void 0 ? _c : [])];
        if (finalTools) {
            const substitutedTools = templates_1.HeliconeTemplateManager.substituteVariablesJSON(finalTools, substitutionValues);
            if (!substitutedTools.success) {
                errors.push(...(substitutedTools.errors || []));
            }
            finalTools = substitutedTools.success
                ? substitutedTools.result
                : finalTools;
        }
        const { prompt_id, version_id, inputs, environment, ...inputOpenaiParams } = params;
        const mergedBody = {
            ...sourcePromptBody,
            ...inputOpenaiParams,
            messages: substitutedMessages,
            response_format: finalResponseFormat,
            tools: finalTools,
        };
        return { body: mergedBody, errors };
    }
    /**
     * Retrieves and merges prompt body with input parameters and variable substitution
     * @param params - The chat completion parameters containing prompt_id, optional version_id, inputs, and other OpenAI parameters
     * @returns Object containing the compiled prompt body and any validation/substitution errors
     */
    async getPromptBody(params) {
        if (!params.prompt_id) {
            const { prompt_id, version_id, inputs, environment, ...openaiParams } = params;
            return { body: openaiParams, errors: [] };
        }
        try {
            const pulledPromptBody = await this.pullPromptBody({
                prompt_id: params.prompt_id,
                version_id: params.version_id,
                environment: params.environment,
                inputs: params.inputs,
            });
            return await this.mergePromptBody(params, pulledPromptBody);
        }
        catch (error) {
            console.error("Error getting prompt body:", error);
            throw error;
        }
    }
    async getPromptVersion(versionId) {
        const response = await fetch(`${this.baseUrl}/v1/prompt-2025/query/version`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                promptVersionId: versionId,
            }),
        });
        if (!response.ok) {
            throw new Error(`Failed to get prompt version: ${response.statusText}`);
        }
        const result = (await response.json());
        if (result.error) {
            throw new Error(`API error: ${result.error}`);
        }
        return result.data;
    }
    async getProductionVersion(promptId) {
        const response = await fetch(`${this.baseUrl}/v1/prompt-2025/query/production-version`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                promptId: promptId,
            }),
        });
        if (!response.ok) {
            throw new Error(`Failed to get production version: ${response.statusText}`);
        }
        const result = (await response.json());
        if (result.error) {
            throw new Error(`API error: ${result.error}`);
        }
        return result.data;
    }
    async getEnvironmentVersion(promptId, environment) {
        const response = await fetch(`${this.baseUrl}/v1/prompt-2025/query/environment-version`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                promptId: promptId,
                environment: environment,
            }),
        });
        if (!response.ok) {
            throw new Error(`Failed to get environment version: ${response.statusText}`);
        }
        const result = (await response.json());
        if (result.error) {
            throw new Error(`API error: ${result.error}`);
        }
        return result.data;
    }
    async fetchPromptBodyFromS3(s3Url) {
        if (!s3Url) {
            throw new Error("No S3 URL provided for prompt body");
        }
        const response = await fetch(s3Url);
        if (!response.ok) {
            throw new Error(`Failed to fetch prompt body from S3: ${response.statusText}`);
        }
        return await response.json();
    }
}
exports.HeliconePromptManager = HeliconePromptManager;
