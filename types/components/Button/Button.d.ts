import React from "react";
import { ButtonSizes, ButtonVariants } from "./Button.types";
export interface ButtonProps {
    label: string;
    variant?: ButtonVariants;
    size?: ButtonSizes;
    isDisabled?: boolean;
    isBlockLevel?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
