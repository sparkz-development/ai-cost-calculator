import { HeliconeChatCreateParams, HeliconeChatCreateParamsStreaming, HeliconePromptParams } from "./types";
import { Prompt2025Version, ValidationError, PromptPartialVariable } from "./types";
import { ChatCompletionCreateParams } from "openai/resources/chat/completions";
interface HeliconePromptManagerOptions {
    apiKey: string;
    baseUrl?: string;
}
export declare class HeliconePromptManager {
    private apiKey;
    private baseUrl;
    constructor(options: HeliconePromptManagerOptions);
    /**
     * Finds the prompt version dynamically based on prompt params
     * @param params - The chat completion parameters containing prompt_id, optional version_id, inputs, and other OpenAI parameters
     * @returns Object containing the compiled prompt body and any validation/substitution errors
     */
    pullPromptVersion(params: HeliconePromptParams): Promise<Prompt2025Version>;
    /**
     * Pulls a prompt body from Helicone storage by prompt ID and optional version ID
     * @param promptId - The unique identifier of the prompt
     * @param versionId - Optional version ID, if not provided uses production version
     * @returns The raw prompt body from storage
     */
    pullPromptBody(params: HeliconePromptParams): Promise<ChatCompletionCreateParams>;
    /**
     * Pulls a prompt body from Helicone storage by version ID
     * @param versionId - The unique identifier of the prompt version
     * @returns The raw prompt body from storage
     */
    pullPromptBodyByVersionId(versionId: string): Promise<ChatCompletionCreateParams>;
    /**
     * Extracts all prompt partial variables from a source prompt body.
     * @param sourcePromptBody - The source prompt body to extract prompt partial variables from
     * @returns Array of unique prompt partial variables found in the body
     */
    extractPromptPartials(sourcePromptBody: ChatCompletionCreateParams): PromptPartialVariable[];
    getPromptPartialSubstitutionValue(promptPartial: PromptPartialVariable, sourceBody: ChatCompletionCreateParams): string;
    /**
     * Merge
     * @param params - The chat completion parameters containing prompt_id, optional version_id, inputs, and other OpenAI parameters
     * @param sourcePromptBody - The source prompt body to merge with
     * @param promptPartialInputs - Optional map of prompt partial inputs for substitution (if not provided, prompt partials will not be substituted)
     * @returns Object containing the compiled prompt body and any validation/substitution errors
     */
    mergePromptBody(params: HeliconeChatCreateParams | HeliconeChatCreateParamsStreaming, sourcePromptBody: ChatCompletionCreateParams, promptPartialInputs?: Record<string, any>): Promise<{
        body: ChatCompletionCreateParams;
        errors: ValidationError[];
    }>;
    /**
     * Retrieves and merges prompt body with input parameters and variable substitution
     * @param params - The chat completion parameters containing prompt_id, optional version_id, inputs, and other OpenAI parameters
     * @returns Object containing the compiled prompt body and any validation/substitution errors
     */
    getPromptBody(params: HeliconeChatCreateParams | HeliconeChatCreateParamsStreaming): Promise<{
        body: ChatCompletionCreateParams;
        errors: ValidationError[];
    }>;
    private getPromptVersion;
    private getProductionVersion;
    private getEnvironmentVersion;
    private fetchPromptBodyFromS3;
}
export {};
