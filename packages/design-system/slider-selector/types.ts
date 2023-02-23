import { FlattenSimpleInterpolation } from "styled-components";

export type SliderSelectorVariant = "primary" | "secondary";

export type VariantToMaskColorMapType = Record<
  SliderSelectorVariant,
  FlattenSimpleInterpolation
>;

export interface Props {
  variant: SliderSelectorVariant;
  size: number;
  selectedIndex: number;
  selectElement: (T: number) => void;
}

export interface StyledSelectorMark {
  isActive: boolean;
  variant: SliderSelectorVariant;
}
