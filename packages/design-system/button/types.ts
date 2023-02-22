export type ButtonSize = "small" | "medium" | "large";

export type ButtonHierarchy = "primary" | "secondary" | "tertiary" | "danger";

export interface StyledProps {
  size: ButtonSize;
  hierarchy: ButtonHierarchy;
  isDisabled: boolean;
  isStretched: boolean;
}
export interface Props {
  size: ButtonSize;
  hierarchy: ButtonHierarchy;
  text: string;
  isDisabled?: boolean;
  isStretched?: boolean;
}
