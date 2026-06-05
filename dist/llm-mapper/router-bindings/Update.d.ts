import type { AuthData } from "./AuthData";
import type { Config } from "./Config";
import type { Key } from "./Key";
export type Update = {
    AuthData: {
        data: AuthData;
    };
} | {
    Config: {
        data: Config;
    };
} | {
    Keys: {
        data: Array<Key>;
    };
};
