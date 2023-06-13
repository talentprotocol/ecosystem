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

const IMAGE_SIZE_MAP: ImageSizeMapType = {
  xs: css`
    width: 24px;
    height: 24px;
    border-radiux: 50%;
  `,
  sm: css`
    width: 32px;
    height: 32px;
    border-radius: 50%;
  `,
  md: css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `,
  lg: css`
    width: 88px;
    height: 88px;
    border-radius: 50%;
  `,
  xl: css`
    width: 120px;
    height: 120px;
    border-radius: 50%;
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
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
      p {
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
  overflow: hidden;
  object-fit: cover;
`;

export const StyledName = styled(Typography)<StyledNameProps>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 140px;

  ${mobileStyles(css`
    max-width: 110px;
  `)}

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
