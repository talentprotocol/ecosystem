import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { StyledBottomBarProps, StyledTabContainerProps } from "./types";
import { Typography } from "../typography";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabContainer = styled.div<StyledTabContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  label {
    cursor: pointer;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
      cursor: auto;
    `}
`;

export const BottomBar = styled.div<StyledBottomBarProps>`
  width: 24px;
  height: 2px;
  transition-duration: 0.25s;
  background-color: transparent;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${buildColor("primary")};
    `}
`;

export const StyledTypography = styled(Typography)`
  text-wrap: nowrap;
`;
