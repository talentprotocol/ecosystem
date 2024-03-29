import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { baseTypographyStyles } from "../typography/styled";
import { StyledInputProps, StyledRightIconContainerProps } from "./types";

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

export const Label = styled.div`
  display: flex;
  gap: 4px;
`;

export const InputContainer = styled.div<StyledInputProps>`
  color: ${buildColor("primary04")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
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

export const RightIconContainer = styled.div<StyledRightIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;

  ${({ isClickable }) => isClickable && "cursor: pointer;"}
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  ${baseTypographyStyles("primary01")}
  border: none;
  outline: none;
  background: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${buildColor("primary01")};

  ::placeholder {
    color: ${buildColor("primary04")};
  }

  ${({ hasError, isDisabled }) =>
    (isDisabled &&
      css`
        color: ${buildColor("primaryDisable")};
      `) ||
    (hasError &&
      css`
        color: ${buildColor("primary01")};
      `)}
  ${({ forceLowerCase }) =>
    forceLowerCase &&
    css`
      text-transform: lowercase;
    `}
`;
