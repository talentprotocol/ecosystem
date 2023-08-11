import { PaletteTokens } from "../colors/palette/types";
import { SVGList } from "../icon/types";

export interface OptionContainerProps {
  opensOnRight: boolean;
}

export interface OptionProps {
  value: string;
  iconName?: SVGList;
  iconColor?: PaletteTokens;
}

export interface Props {
  options: OptionProps[];
  selectOption: (value: OptionProps) => void;
  onBlur?: () => void;
  opensOnRight?: boolean;
  children: React.ReactNode;
}
