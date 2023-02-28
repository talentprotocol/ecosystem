import { PaletteTokens } from "../colors/palette/types";
import { SVGList } from "../icon/types";

export type TextLinkSizes = "small" | "medium";

export interface StyledTextLinkProps {
  color: PaletteTokens;
}

export interface Props {
  leftIcon?: SVGList;
  rightIcon?: SVGList;
  color: PaletteTokens;
  text: string;
  size: TextLinkSizes;
  href: string;
  newPage?: boolean;
}
