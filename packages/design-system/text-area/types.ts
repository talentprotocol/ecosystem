import { ChangeEventHandler, FocusEventHandler } from "react";

export interface StyledTextAreaProps {
  isDisabled: boolean;
  hasError: boolean;
}

export interface Props {
  textAreaRef?: React.RefObject<HTMLInputElement>;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  defaultValue: string;
  isDisabled?: boolean;
  label?: string;
  shortDescription?: string;
  caption?: string;
  hasError?: boolean;
}
