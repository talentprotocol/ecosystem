export type HeaderTypes = "bold" | "regular";
export type ParagraphTypes = "bold" | "medium" | "regular";
export type LabelTypes = "medium" | "regular";

export interface HeaderProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5";
  type: HeaderTypes;
}

export interface StyledHeaderProps {
  type: HeaderTypes;
}

export interface ParagraphProps {
  variant: "p1" | "p2" | "p3";
  type: ParagraphTypes;
}

export interface StyledParagraphProps {
  type: ParagraphTypes;
}

export interface LabelProps {
  variant: "label1" | "label2" | "label3";
  type: LabelTypes;
}

export interface StyledLabelProps {
  type: LabelTypes;
}

export interface CaptionProps {
  variant: "caption";
}

export interface Props {
  specs: HeaderProps | ParagraphProps | LabelProps | CaptionProps;
  children: string;
}
