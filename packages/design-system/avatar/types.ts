import { FlattenSimpleInterpolation } from "styled-components";

export type SizeTypes = "xs" | "sm" | "md" | "lg";
export type UndefinedImageTypes = "0" | "1" | "2" | "3" | "4";
export type ImageSizeMapType = Record<SizeTypes, FlattenSimpleInterpolation>;
export type UndefinedImageMapType = Record<UndefinedImageTypes, string>;

export interface StyledImageProps {
  size: SizeTypes;
}

export interface StyledNameProps {
  isUnderlined: boolean;
  isDisabled: boolean;
}

export interface Props {
  size: SizeTypes;
  url?: string;
  userId?: number;
  name?: string;
  isNameUnderlined?: boolean;
  ticker?: string;
  isDisabled?: boolean;
}
