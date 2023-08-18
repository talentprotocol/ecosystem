import styled, { css } from "styled-components";
import { Typography } from "../typography";
import {
  DataColumnProps,
  DataInfoRowProps,
  ImageSizeMapType,
  LinkWrapperProps,
  StyledImageProps,
  StyledNameProps,
} from "./types";
import { mobileStyles } from "../breakpoints";
import { buildColor } from "../colors";

const IMAGE_SIZE_MAP: ImageSizeMapType = {
  xs: css`
    width: 24px;
    height: 24px;
  `,
  sm: css`
    width: 32px;
    height: 32px;
  `,
  md: css`
    width: 40px;
    height: 40px;
  `,
  lg: css`
    width: 88px;
    height: 88px;
  `,
  xl: css`
    width: 120px;
    height: 120px;
  `,
};

export const Container = styled.div<{ square: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  ${({ square }) =>
    square &&
    css`
      border-radius: 8px;
      background: ${buildColor("bg01")};
    `}
`;

export const DataColumn = styled.div<DataColumnProps>`
  display: flex;
  flex-direction: column;

  ${({ size }) =>
    size === "md"
      ? css`
          margin-left: 12px;
        `
      : css`
          margin-left: 4px;
        `}
`;

export const DetailedInfoRow = styled.div<DataInfoRowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  ${({ ellipsisAt }) =>
    !!ellipsisAt &&
    css`
      p, label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: ${ellipsisAt}px;
      }
    `}
`;

export const LinkWrapper = styled.a<LinkWrapperProps>`
  text-decoration: none;
  cursor: pointer;
  display: flex;

  ${({ profileURL }) =>
    !profileURL &&
    css`
      pointer-events: none;
      cursor: default;
    `}
`;

export const StyledImage = styled.img<StyledImageProps>`
  ${({ size }) => IMAGE_SIZE_MAP[size]}
  ${({ square }) =>
    square
      ? css`
          border-radius: 8px;
        `
      : css`
          border-radius: 50%;
        `}
  overflow: hidden;
  object-fit: cover;
`;

export const StyledName = styled(Typography)<StyledNameProps>`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      :hover {
        text-decoration: none;
      }
    `}

  :hover {
    text-decoration: underline;
  }
`;
