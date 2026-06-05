export type Status = "Success" | {
    Error: {
        message: string;
    };
};
