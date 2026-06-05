import type { Status } from "./Status";
export type Ack = {
    Heartbeat: Status;
} | {
    SendLog: Status;
};
