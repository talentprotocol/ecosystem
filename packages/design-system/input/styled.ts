import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { baseTypographyStyles } from "../typography/styled";
import { StyledInputProps } from "./types";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const InputContainer = styled.div<StyledInputProps>`
  width: 100%;
  color: ${buildColor("primary04")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 6px 4px 0;
  gap: 10px;
  border: 1px solid ${buildColor("surfaceHover02")};
  border-radius: 8px;
  transition-duration: 0.25s;

  ${({ isDisabled, hasError }) =>
    isDisabled
      ? css`
          border: 1px solid ${buildColor("surfaceHover01")};
          color: ${buildColor("primaryDisable")};
        `
      : (hasError &&
          css`
            border: 1px solid ${buildColor("dangerTint01")};
            color: ${buildColor("dangerTint01")};
          `) ||
        css`
          :hover {
            border: 1px solid ${buildColor("primary")};
          }

          :focus {
            border: 1px solid ${buildColor("primary")};
            box-shadow: 0px 0px 0px 3px ${buildColor("primaryTint02")};
          }
        `}
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  ${baseTypographyStyles("primary01")}
  padding: 10px 8px;
  border: none;
  outline: none;
  background: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  ${({ hasError, isDisabled }) =>
    (isDisabled &&
      css`
        color: ${buildColor("primaryDisable")};
      `) ||
    (hasError &&
      css`
        color: ${buildColor("primary01")};
      `)}
`;
