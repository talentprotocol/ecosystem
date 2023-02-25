import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { Typography } from "../typography";
import { ImageSizeMapType, StyledImageProps, StyledNameProps } from "./types";

const IMAGE_SIZE_MAP: ImageSizeMapType = {
  xs: css`
    width: 24px;
    height: 24px;
    border-radiux: 50%;
  `,
  sm: css`
    width: 32px;
    height: 32px;
    border-radiux: 50%;
  `,
  md: css`
    width: 40px;
    height: 40px;
    border-radiux: 50%;
  `,
  lg: css`
    width: 120px;
    height: 120px;
    border-radiux: 50%;
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const StyledImage = styled.img<StyledImageProps>`
  ${({ size }) => IMAGE_SIZE_MAP[size]}
`;

export const StyledName = styled(Typography)<StyledNameProps>`
  margin-left: 4px;
  ${({ isUnderlined }) =>
    isUnderlined &&
    css`
      text-decoration: underline !important;
    `}
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      text-decoration: none;
    `}
`;
