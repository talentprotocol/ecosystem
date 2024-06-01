import styled, { css } from "styled-components";
import { Typography } from "../typography";
import {
  DataColumnProps,
  DataInfoRowProps,
  SizeMapType,
  LinkWrapperProps,
  StyledImageProps,
  StyledNameProps,
  BadgeProps,
  BadgeBorderProps,
} from "./types";
import { mobileStyles } from "../breakpoints";
import { buildColor } from "../colors";

const IMAGE_SIZE_MAP: SizeMapType = {
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

const AVATAR_SIZE_MAP: SizeMapType = {
  xs: css`
    width: 8px;
    height: 8px;
  `,
  sm: css`
    width: 12px;
    height: 12px;
  `,
  md: css`
    width: 20px;
    height: 20px;
  `,
  lg: css`
    width: 30px;
    height: 30px;
  `,
  xl: css`
    width: 42px;
    height: 42px;
  `,
};

const AVATAR_FONT_SIZE_MAP: SizeMapType = {
  xs: css`
  font-size: 0.2rem;
  `,
  sm: css`
  font-size: 0.3rem;
  `,
  md: css`
  font-size: 0.6rem;
  `,
  lg: css`
  font-size: 0.8rem;
  `,
  xl: css`
  font-size: 1rem;
  `,
};

const getBackgroundColorFromScore = (score: number) => {
  if (score < 20) {
      return "#636B74";
  }
  if (score < 40) {
      return "#C38D94";
  }
  if (score < 60) {
      return "#E600E6";
  }
  if (score < 80) {
      return "#1AC8ED";
  }
  return "#826AEE";
};

const getTextColorFromScore = (score: number) => (score > 60 && score < 80) ? "black" : "white";

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
      p,
      label {
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

export const Badge = styled.div<BadgeProps>`
${({ size }) => AVATAR_SIZE_MAP[size]}
${({ size }) => AVATAR_FONT_SIZE_MAP[size]}
background-color: ${({ score }) => getBackgroundColorFromScore(score)};
color: ${({ score }) => getTextColorFromScore(score)};
display: flex;
position: absolute;
bottom: 14%;
left: 14%;
transform: scale(1) translate(-50%, 50%);
align-items: center;
justify-content: center;
align-self: center;
border-radius: 50%;
border: 2px solid white;
letter-spacing: 1px;
z-index: 500;
`

export const BadgeBorder = styled.div<BadgeBorderProps>`
display: flex;
position: relative;
border: 2px solid ${({ score }) => getBackgroundColorFromScore(score)};
border-radius: 50%;
`

export const BadgeBorderTransparent = styled.div`
display: flex;
position: relative;
border: 2px solid transparent;
border-radius: 50%;
`
