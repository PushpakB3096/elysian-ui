import React, { ChangeEventHandler, KeyboardEvent } from "react";
import styled from "styled-components";

export interface InputProps {
  value: string;
  placeholder?: string;
  padding?: string;
  // TODO: add types
  onChange: (e: any) => void;
}

const StyledInput = styled.input<Partial<InputProps>>`
  outline: 1px solid #1677ff;
  border: 1px solid #1677ff;
  border-radius: 6px;
  color: gray;
  padding: ${(props) => props.padding ?? "0.5rem"};

  &::placeholder {
    color: gray;
  }
`;

const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
