import { PaletteTokens } from "../../colors/palette/types";
import { SVGList } from "../../icon/types";
import { ButtonSize } from "../types";

export type ButtonSizeToIconSizeMapType = Record<ButtonSize, number>;

export interface IconContainerProps {
  isHidden: boolean;
}

export interface Props {
  leftIcon?: SVGList;
  rightIcon?: SVGList;
  iconColor?: PaletteTokens;
  children?: JSX.Element;
  isLoading: boolean;
  size: ButtonSize;
}
