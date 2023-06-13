import { PaletteTokens } from "../colors/palette/types";

export type HeaderVariants = "h1" | "h2" | "h3" | "h4" | "h5";
export type HeaderTypes = "bold" | "regular";
export type ParagraphVariants = "p1" | "p2" | "p3";
export type ParagraphTypes = "bold" | "medium" | "regular";
export type LabelVariants = "label1" | "label2" | "label3";
export type LabelTypes = "medium" | "regular";

export interface HeaderProps {
  variant: HeaderVariants;
  type: HeaderTypes;
}

export interface StyledHeaderProps {
  type: HeaderTypes;
  color: PaletteTokens;
}

export interface ParagraphProps {
  variant: ParagraphVariants;
  type: ParagraphTypes;
}

export interface StyledParagraphProps {
  type: ParagraphTypes;
  color: PaletteTokens;
}

export interface LabelProps {
  variant: LabelVariants;
  type: LabelTypes;
}

export interface StyledLabelProps {
  type: LabelTypes;
  color: PaletteTokens;
}

export interface CaptionProps {
  variant: "caption";
}

export interface StyledCaptionProps {
  color: PaletteTokens;
}

export interface Props {
  specs: HeaderProps | ParagraphProps | LabelProps | CaptionProps;
  color: PaletteTokens;
  children: string | React.ReactNode;
  className?: string;
  typographyRef?: React.RefObject<any>;
}
