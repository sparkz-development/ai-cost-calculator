import type { Ack } from "./Ack";
import type { ControlPlaneError } from "./ControlPlaneError";
import type { Update } from "./Update";
export type MessageTypeRX = ({
    _type: "Ack";
} & Ack) | ({
    _type: "Update";
} & Update) | ({
    _type: "Error";
} & ControlPlaneError);
