import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonSizes, ButtonVariants } from './Button.types';

export interface ButtonProps {
  label: string;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isDisabled?: boolean;
}

const getVariantStyles = (props: Partial<ButtonProps>) => {
  switch (props.variant) {
    case ButtonVariants.PRIMARY:
      return css`
        background: #1677ff;
        color: #fff;

        &:hover {
          background: #1677ffeb;
        }
      `;
    case ButtonVariants.SECONDARY:
      return css`
        background: #fff;
        border: 1px solid #73828c3b;

        &:hover {
          border: 1px solid #1677ffeb;
          color: #1677ffeb;
        }
      `;
    case ButtonVariants.GHOST:
      return css`
        background: #fff;

        &:hover {
          background: #73828c3b;
        }
      `;
    case ButtonVariants.DASHED:
      return css`
        background: #fff;
        border: 1px dashed #73828c3b;

        &:hover {
          border: 1px dashed #1677ffeb;
          color: #1677ffeb;
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
  opacity: ${props => (props.isDisabled ? '0.5' : '1')};
  cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};

  ${getVariantStyles}
  ${getButtonSize}
`;

const Button: React.FC<ButtonProps> = ({
  label,
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.NORMAL,
  ...props
}) => {
  return (
    <BaseButton variant={variant} size={size} {...props}>
      {label}
    </BaseButton>
  );
};

export default Button;
