import { TemplateVariable, SubstitutionResult, PromptPartialVariable } from './types';
export declare const TEMPLATE_REGEX: RegExp;
export declare const PROMPT_PARTIAL_REGEX: RegExp;
export declare const BOOLEAN_VALUES: string[];
export declare class HeliconeTemplateManager {
    /**
     * Extract all distinct prompt partial variables from a template string.
     * @param template - The template string containing {{hcp:prompt_id:index:environment}} patterns
     * @returns Array of unique prompt partial variables with their prompt_id, index, and optional environment
     */
    static extractPromptPartialVariables(template: string): PromptPartialVariable[];
    /**
     * Extract all distinct variables and their types from a template string
     * @param template - The template string containing {{hc:NAME:type}} patterns
     * @returns Array of unique variables with their names and types
     */
    static extractVariables(template: string): TemplateVariable[];
    /**
     * Check if actual type is compatible with expected type
     * @param value - The actual value to check
     * @param expectedType - The expected type from template
     * @returns True if types are compatible
     */
    private static isTypeCompatible;
    /**
     * Substitute variables in template with provided inputs after type validation
     * @param template - The template string containing {{hc:NAME:type}} patterns
     * @param inputs - Hash map of input values
     * @param promptPartialInputs - Hash map of prompt partial replacement values (keyed by raw template string)
     * @returns Result object with success status and either result string or errors
     */
    static substituteVariables(template: string, inputs: Record<string, any>, promptPartialInputs: Record<string, any>): SubstitutionResult;
    private static isWholeMatch;
    private static getVariableName;
    private static performRegexReplacement;
    private static processObjectKV;
    /**
     * Substitute variables in JSON format object with provided inputs
     * @param json - The JSON object containing "{{hc:NAME:type}}" patterns
     * @param inputs - Hash map of input values
     * @returns Result object with success status and either result object or errors
     */
    static substituteVariablesJSON(json: Record<string, any>, inputs: Record<string, any>): SubstitutionResult;
    /**
     * Get a list of all variable names from a template (convenience method)
     * @param template - The template string
     * @returns Array of variable names
     */
    static getVariableNames(template: string): string[];
}
