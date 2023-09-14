import { PaletteTokens } from "../colors/palette/types";
import { SVGList } from "../icon/types";

export interface StyledContainerProps {
  isDisabled: boolean;
}

export interface OptionProps {
  value: string;
  iconName?: SVGList;
  iconColor?: PaletteTokens;
  isDisabled?: boolean;
}

export interface Props {
  options: OptionProps[];
  placeholder?: string;
  selectedOption?: OptionProps;
  selectOption: (value: OptionProps) => void;
  onBlur?: () => void;
  isDisabled?: boolean;
  label?: string;
  required?: boolean;
}
