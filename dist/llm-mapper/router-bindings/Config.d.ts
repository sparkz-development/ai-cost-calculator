import type { AuthData } from "./AuthData";
import type { Key } from "./Key";
export type Config = {
    auth: AuthData;
    keys: Array<Key>;
    routerId: string;
    routerConfig: string;
};
