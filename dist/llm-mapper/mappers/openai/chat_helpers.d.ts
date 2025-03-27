import { Message, FunctionCall } from "../../types";
export interface ToolCall {
    function: {
        name: string;
        arguments: string;
    };
    type: string;
    id: string;
}
export declare const isImageContent: (content: any) => boolean;
export declare const parseFunctionArguments: (args: string | undefined) => Record<string, any>;
export declare const mapToolCallToFunction: (tool: ToolCall) => FunctionCall;
export declare const handleArrayContent: (content: any[]) => string;
export declare const handleObjectContent: (content: any) => string;
export declare const handleToolCalls: (message: any) => Message;
export declare const handleImageMessage: (msg: any, imageContent: any) => Message;
export declare const handleToolResponse: (msg: any) => Message;
export declare const formatStreamingToolCalls: (toolCalls: ToolCall[]) => string;
export declare const handleClaudeResponse: (responseBody: any) => string | undefined;
