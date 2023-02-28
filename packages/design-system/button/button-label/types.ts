import { PaletteTokens } from "../../colors/palette/types";
import { SVGList } from "../../icon/types";

export interface Props {
  leftIcon?: SVGList;
  rightIcon?: SVGList;
  iconColor?: PaletteTokens;
  children?: JSX.Element;
}
