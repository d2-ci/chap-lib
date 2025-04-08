export type UserOption = {
    name: string;
    type: UserOption.type;
    description: string;
    default?: (string | null);
};
export declare namespace UserOption {
    enum type {
        STRING = "string",
        INTEGER = "integer",
        FLOAT = "float",
        BOOLEAN = "boolean"
    }
}
