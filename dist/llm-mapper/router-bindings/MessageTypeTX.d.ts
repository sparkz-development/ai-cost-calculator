export type MessageTypeTX = {
    _type: "Heartbeat";
} | {
    _type: "RequestConfig";
} | {
    _type: "SendLog";
    log: string;
};
