import { MapperFn } from "../types";
interface BlackForestLabsRequestBody {
    model: string;
    prompt?: string;
    width?: number;
    height?: number;
    steps?: number;
    response_format?: string;
}
export declare const mapBlackForestLabsImage: MapperFn<BlackForestLabsRequestBody, any>;
export {};
