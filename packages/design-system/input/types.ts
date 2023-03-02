import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";

export interface StyledInputProps {
  isDisabled: boolean;
  hasError: boolean;
}

export interface Props {
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  label?: string;
  shortDescription?: string;
  caption?: string;
  hasError?: boolean;
  type?: HTMLInputTypeAttribute;
}
