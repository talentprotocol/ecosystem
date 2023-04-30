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
  width: 20px;
  height: 20px;
  background: transparent;
  border: 1px solid ${buildColor("primary04")};
  border-radius: 50%;
  cursor: pointer;
  transition-duration: 0.25s;

  :checked {
    border: 1px solid ${buildColor("primary")};

    ${({ isDisabled }) =>
      isDisabled &&
      css`
        pointer-events: none;
        border: 1px solid ${buildColor("primaryTint01")};
      `}
  }

  :hover {
    border: 1px solid ${buildColor("primaryHover")};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
    `}
`;

export const InnerRadiContainer = styled.div<CheckSquareProps>`
  position: absolute;
  top: 8px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${buildColor("primary")};
  transition-duration: 0.25s;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: ${buildColor("primaryDisable")};
    `}

  :hover {
    background-color: ${buildColor("primaryHover")};
  }
`;
