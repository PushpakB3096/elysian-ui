import React from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { ButtonSizes, ButtonVariants } from "./Button.types";
import theme from "../../theme";

export interface ButtonProps {
  label: string;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isDisabled?: boolean;
  isBlockLevel?: boolean;
}

const getVariantStyles = (props: Partial<ButtonProps>) => {
  switch (props.variant) {
    case ButtonVariants.PRIMARY:
      return css`
        background: ${(props) => props.theme.color.primary1};
        color: ${(props) => props.theme.color.white};

        &:hover {
          background: ${(props) => props.theme.color.primary2};
        }
      `;
    case ButtonVariants.SECONDARY:
      return css`
        background: ${(props) => props.theme.color.white};
        border: ${(props) => `1px solid ${props.theme.color.secondary1}`};

        &:hover {
          border: ${(props) => `1px solid ${props.theme.color.primary2}`};
          color: ${(props) => props.theme.color.primary2};
        }
      `;
    case ButtonVariants.GHOST:
      return css`
        background: transparent;

        &:hover {
          background: ${(props) => props.theme.color.secondary1};
        }
      `;
    case ButtonVariants.DASHED:
      return css`
        background: ${(props) => props.theme.color.white};
        border: ${(props) => `1px dashed ${props.theme.color.secondary1}`};

        &:hover {
          border: ${(props) => `1px dashed ${props.theme.color.primary2}`};
          color: ${(props) => props.theme.color.primary2};
        }
      `;
  }
};

const getButtonSize = (props: Partial<ButtonProps>) => {
  switch (props.size) {
    case ButtonSizes.SMALL:
      return css`
        padding: 0.3rem;
        font-size: 0.65rem;
      `;
    case ButtonSizes.LARGE:
      return css`
        padding: 0.75rem;
        font-size: 1.25rem;
      `;
    case ButtonSizes.XL:
      return css`
        padding: 1rem;
        font-size: 1.5rem;
      `;
  }
};

const BaseButton = styled.button<Partial<ButtonProps>>`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  width: ${(props) => props.isBlockLevel && "100%"};
  opacity: ${(props) => (props.isDisabled ? "0.5" : "1")};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  ${getVariantStyles};
  ${getButtonSize};
`;

const Button: React.FC<ButtonProps> = ({
  label,
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.NORMAL,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <BaseButton variant={variant} size={size} {...props}>
        {label}
      </BaseButton>
    </ThemeProvider>
  );
};

export default Button;
