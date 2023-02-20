import { PaletteTokens } from "../colors/palette/types";

export type HeaderTypes = "bold" | "regular";
export type ParagraphTypes = "bold" | "medium" | "regular";
export type LabelTypes = "medium" | "regular";

export interface HeaderProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5";
  type: HeaderTypes;
}

export interface StyledHeaderProps {
  type: HeaderTypes;
  color: PaletteTokens;
}

export interface ParagraphProps {
  variant: "p1" | "p2" | "p3";
  type: ParagraphTypes;
}

export interface StyledParagraphProps {
  type: ParagraphTypes;
  color: PaletteTokens;
}

export interface LabelProps {
  variant: "label1" | "label2" | "label3";
  type: LabelTypes;
}

export interface StyledLabelProps {
  type: LabelTypes;
  color: PaletteTokens;
}

export interface CaptionProps {
  variant: "caption";
  color: PaletteTokens;
}

export interface StyledCaptionProps {
  color: PaletteTokens;
}

export interface Props {
  specs: HeaderProps | ParagraphProps | LabelProps | CaptionProps;
  color: PaletteTokens;
  children: string;
}
