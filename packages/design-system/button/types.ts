import { MouseEventHandler } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import { PaletteTokens } from "../colors/palette/types";
import { SVGList } from "../icon/types";
import { LabelVariants } from "../typography/types";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonHierarchy = "primary" | "secondary" | "tertiary" | "danger";

export type VariantToTextSizeMapInterface = Record<ButtonSize, LabelVariants>;
export type HierarchyToTextColorMapInterface = Record<
  ButtonHierarchy,
  PaletteTokens
>;

export type StyledSizeButtonMap = Record<
  ButtonSize,
  FlattenSimpleInterpolation
>;

export interface StyledProps {
  size: ButtonSize;
  hierarchy: ButtonHierarchy;
  isDisabled: boolean;
  isStretched: boolean;
  hasNoText: boolean;
}

export interface StyledButtonTypography {
  hierarchy: ButtonHierarchy;
  isDisabled: boolean;
}

export interface Props {
  size: ButtonSize;
  hierarchy: ButtonHierarchy;
  isLink?: boolean;
  newPage?: boolean;
  text?: string;
  href?: string;
  iconColor?: PaletteTokens;
  isDisabled?: boolean;
  isStretched?: boolean;
  leftIcon?: SVGList;
  rightIcon?: SVGList;
  onClick?: MouseEventHandler;
}
