import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
} from "react";
import { PaletteTokens } from "../colors/palette/types";
import { SVGList } from "../icon/types";

export interface StyledInputProps {
  isDisabled: boolean;
  hasError: boolean;
  forceLowerCase?: boolean;
}

export interface StyledRightIconContainerProps {
  isClickable: boolean;
}

export interface Props {
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  onEnterCallback?: Function;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  label?: string;
  shortDescription?: string;
  caption?: string;
  hasError?: boolean;
  type?: HTMLInputTypeAttribute;
  iconColor?: PaletteTokens;
  rightIcon?: SVGList;
  rightIconCallback?: MouseEventHandler<HTMLDivElement>;
  leftIcon?: SVGList;
  leftIconCallback?: Function;
  forceLowerCase?: boolean;
}
