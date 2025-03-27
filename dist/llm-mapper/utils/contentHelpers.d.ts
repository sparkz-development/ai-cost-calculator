import { Message } from "../types";
export declare const isJSON: (str: string) => boolean;
export declare const hasFunctionCall: (message: any) => boolean;
export declare const hasImage: (message: Message) => boolean;
export declare function getContentType(message: any): Message["_type"];
