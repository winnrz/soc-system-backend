import { OptionsDto } from "./index";
export declare enum FormType {
    RADIO = "radio",
    TEXTAREA = "textarea",
    INPUT = "input",
    TEXT = "text",
    DATE = "date"
}
export declare class FieldConfig {
    type: FormType;
    name: string;
    label: string;
    required?: boolean;
    placeholder?: string;
    rows?: number;
    options?: OptionsDto[];
    showOtherText?: boolean;
    otherTextLabel?: string;
}
