import { MapperFn } from "../types";
interface DalleRequestBody {
    model: string;
    prompt?: string;
    size?: string;
    quality?: string;
    response_format?: string;
}
export declare const mapDalleRequest: MapperFn<DalleRequestBody, any>;
export {};
