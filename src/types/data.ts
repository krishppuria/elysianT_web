interface FormField {
    value: string;
    error: string;
    focus: boolean | null;
}

export interface SignUpData {
    [key: string]: FormField; // Index signature to allow any string key
}