import { ChangeEventHandler } from "react";

export interface StyledInputProps {
  isDisabled: boolean;
  hasError: boolean;
}

export interface Props {
  ref: React.RefObject<HTMLInputElement>;
  onChange: ChangeEventHandler;
  defaultValue: string;
  isDisabled?: boolean;
  label?: string;
  shortDescription?: string;
  caption?: string;
  hasError?: boolean;
}
