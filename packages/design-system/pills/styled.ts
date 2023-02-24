import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { StyledPill } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`;

export const PillContainer = styled.div<StyledPill>`
  padding: 4px 16px;
  border-radius: 200px;
  border: 1px solid ${buildColor("surfaceHover02")};
  background: transparent;
  cursor: pointer;
  transition-duration: 0.25s;

  label {
    cursor: pointer;
  }

  :hover {
    border: 1px solid ${buildColor("primary01")};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${buildColor("primary01")};
    `}
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background: ${buildColor("surfaceDisable")};
      border: none;

      :hover {
        border: none;
      }
    `}
`;
