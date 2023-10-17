import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { getTheme } from "../theme";
import { OptionProps, StyledContainerProps } from "./types";

export const OutterContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const Container = styled.div<StyledContainerProps>`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid ${buildColor("surfaceHover02")};
  border-radius: 8px;
  cursor: pointer;

  label {
    flex-grow: 1;
  }

 ${({ isDisabled }) => !isDisabled ? css`
  :hover {
    border: 1px solid ${buildColor("primary")};
  }

  :focus {
    border: 1px solid ${buildColor("primary")};
    box-shadow: 0px 0px 0px 3px ${buildColor("primaryTint02")};
  }
 ` : `
    border: 1px solid ${buildColor("surfaceHover01")};
 `}
`;

export const SelectedOptionContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 16px;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -4px;
  transform: translate(0, 100%);
  background: ${buildColor("bg01")};
  border: 1px solid ${buildColor("surfaceHover02")};
  border-radius: 8px;
  z-index: 1;

  ${() =>
    getTheme().isDarkTheme
      ? css`
          box-shadow: 0px 8px 24px rgba(0, 0, 0, 1);
        `
      : css`
          box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
        `}
`;

export const OptionsInnerContainer = styled.div`
  max-height: 336px;
  padding: 8px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div<OptionProps>`
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  label {
    cursor: pointer;
  }

  :hover {
    background: ${buildColor("surface02")};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;

      label {
        cursor: not-allowed;
        color: ${buildColor("primaryDisable")};
      }

      :hover {
        background: transparent;
      }
    `}
`;

export const Label = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 10px;
`;
