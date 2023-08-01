import React from "react";
import styled, { css } from "styled-components";
import { InputSizes } from "./Input.types";
import theme from "../../theme";
import type { ChangeEventHandler } from "react";

export interface InputProps {
  value: string;
  placeholder?: string;
  boxSize?: InputSizes;
  name?: string;
  disabled?: boolean;
  type?: "number" | "text" | "email"; // TODO: add all
  onChange: ChangeEventHandler<HTMLInputElement>;
  helperText?: string;
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
  outline: ${(props) =>
    props.disabled
      ? `1px solid ${theme.color.primary2}`
      : `1px solid ${theme.color.primary1}`};
  border: ${(props) =>
    props.disabled
      ? `1px solid ${theme.color.primary2}`
      : `1px solid ${theme.color.primary1}`};
  border-radius: 6px;
  color: ${theme.color.secondary1};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "inherit")};

  :disabled::placeholder {
    color: ${theme.color.secondary2};
  }

  ::placeholder {
    /* For Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${theme.color.secondary1};
  }

  ${getInputPadding};
`;

const Input: React.FC<InputProps> = ({
  boxSize = InputSizes.NORMAL,
  type = "text",
  disabled = false,
  helperText,
  ...restProps
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "8px" }}>
      <StyledInput
        boxSize={boxSize}
        disabled={disabled}
        type={type}
        maxLength={10}
        {...restProps}
      />
      <em
        style={{
          fontSize: "small",
          color: theme.color.secondary1
        }}
      >
        {helperText}
      </em>
    </div>
  );
};

export default Input;
