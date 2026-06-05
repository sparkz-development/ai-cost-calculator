import { Message } from "../../types";
import { MapperFn } from "../types";
export declare const getResponseText: (responseBody: any, statusCode: number | undefined, model: string) => string;
export declare const openAIMessageToHeliconeMessage: (msg: any) => Message;
export declare const getRequestMessages: (request: any) => Message[];
export declare const getLLMSchemaResponse: (response: any) => any;
export declare const mapOpenAIRequest: MapperFn<any, any>;
