import React, { ChangeEventHandler, KeyboardEvent } from "react";
import styled, { css } from "styled-components";
import { InputSizes } from "./Input.types";

export interface InputProps {
  value: string;
  placeholder?: string;
  boxSize?: InputSizes;
  name?: string;
  type?: "number" | "text" | "email"; // TODO: add all
  // TODO: need better styling for disabled state
  isDisabled?: boolean;

  // TODO: add types
  onChange: (e: any) => void;
}

const getInputPadding = (props: Partial<InputProps>) => {
  switch (props.boxSize) {
    case InputSizes.SMALL:
      return css`
        padding: 0.3rem;
      `;
    case InputSizes.NORMAL:
      return css`
        padding: 0.6rem;
      `;
    case InputSizes.LARGE:
      return css`
        padding: 0.875rem;
      `;
  }
};

const StyledInput = styled.input<Partial<InputProps>>`
  outline: 1px solid #1677ff;
  border: 1px solid #1677ff;
  border-radius: 6px;
  color: gray;

  ${getInputPadding};
`;

const Input: React.FC<InputProps> = ({
  boxSize = InputSizes.NORMAL,
  type = "text",
  isDisabled = false,
  ...restProps
}) => {
  return (
    <StyledInput
      boxSize={boxSize}
      disabled={isDisabled}
      type={type}
      {...restProps}
    />
  );
};

export default Input;
