import { PaletteTokens } from "../colors/palette/types";
import { SVGList } from "../icon/types";

export interface OptionProps {
  value: string;
  iconName?: SVGList;
  iconColor?: PaletteTokens;
}

export interface Props {
  options: OptionProps[];
  placeholder?: string;
  selectedOption?: OptionProps;
  selectOption: (value: OptionProps) => void;
  onBlur?: () => void;
}
