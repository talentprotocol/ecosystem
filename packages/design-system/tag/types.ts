import { PaletteTokens } from "../colors/palette/types";
import { SVGList } from "../icon/types";

export type TagSize = "small" | "medium";

export interface StyledContainerProps {
  backgroundColor: PaletteTokens;
  borderColor?: PaletteTokens;
  size: TagSize;
}

export interface Props {
  leftIcon?: SVGList;
  rightIcon?: SVGList;
  label: string;
  size: TagSize;
  backgroundColor: PaletteTokens;
  textColor: PaletteTokens;
  borderColor?: PaletteTokens;
}
