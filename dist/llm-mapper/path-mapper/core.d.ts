import { LLMRequestBody } from "../types";
import { PathMapping } from "./builder";
export interface PathPair {
    external: string;
    internal: string;
}
export interface ValueTransformer {
    toInternal: (value: any, internal: any) => any;
    toExternal: (value: any, external: any) => any;
}
export interface EnhancedPathPair extends PathPair {
    transform?: ValueTransformer;
    description?: string;
}
/**
 * Core PathMapper class that handles transforming between external and internal formats
 */
export declare class PathMapper<ExternalType, InternalType = LLMRequestBody> {
    private name;
    private mappings;
    constructor(name: string, mappings: PathMapping[]);
    /**
     * Maps an external request to the provider's format
     * This is a convenience method that's equivalent to toExternal
     */
    map(internal: InternalType): ExternalType;
    /**
     * Transforms from external API format to internal Helicone format
     */
    toInternal(external: ExternalType): InternalType;
    /**
     * Transforms from internal Helicone format to external API format
     */
    toExternal(internal: InternalType): ExternalType;
    /**
     * Gets a value from an object by a path string
     * e.g. "user.name" -> obj.user.name
     */
    private getValueByPath;
    /**
     * Sets a value in an object by a path string
     * e.g. "user.name" -> obj.user.name = value
     */
    private setValueByPath;
    /**
     * Parse a path string into parts
     * e.g. "users[0].name" -> [{type: "property", name: "users"}, {type: "array", name: "0", index: "0"}, {type: "property", name: "name"}]
     */
    private parsePath;
    /**
     * Get the name of this mapper
     */
    get mapperName(): string;
    /**
     * Get the path pairs defined in this mapper
     */
    get pathPairs(): PathMapping[];
}
