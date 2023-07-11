import { FlattenSimpleInterpolation } from "styled-components";

export type SizeTypes = "xs" | "sm" | "md" | "lg" | "xl";
export type UndefinedImageTypes = "0" | "1" | "2" | "3" | "4";
export type ImageSizeMapType = Record<SizeTypes, FlattenSimpleInterpolation>;
export type UndefinedImageMapType = Record<UndefinedImageTypes, any>;

export interface StyledImageProps {
  size: SizeTypes;
  square?: boolean;
}

export interface StyledNameProps {
  isDisabled: boolean;
}

export interface DataColumnProps {
  size: SizeTypes;
}

export interface DataInfoRowProps {
  ellipsisAt?: number;
}

export interface LinkWrapperProps {
  profileURL: string;
}

export interface Props {
  size: SizeTypes;
  url?: string;
  occupation?: string;
  userId?: number;
  name?: string;
  ticker?: string;
  isDisabled?: boolean;
  isVerified?: boolean;
  ellipsisAt?: number;
  profileURL?: string;
  square?: boolean;
}
