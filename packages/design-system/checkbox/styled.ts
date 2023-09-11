import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { CheckSquareProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const CheckSquare = styled.input<CheckSquareProps>`
  appearance: none;
  color: red;
  width: 16px;
  height: 16px;
  border: 1px solid ${buildColor("primary04")};
  background: ${buildColor("bg01")};
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 0.25s;

  ${({ hasNoAction }) => !!hasNoAction && "cursor: default;"}


  ${({ isChecked, isDisabled }) => isChecked && `
    background-color: ${buildColor("primary")};
    border: 1px solid ${buildColor("primary")};

    ${isDisabled &&
      css`
        pointer-events: none;
        background-color: ${buildColor("primaryTint01")};
        border: 1px solid ${buildColor("primaryTint01")};
      `}
  `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
    `}
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
