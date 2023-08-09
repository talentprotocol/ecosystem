import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import {
  ButtonHierarchy,
  HierarchyToTextColorMapInterface,
  StyledButtonTextContainerProps,
  StyledProps,
  StyledSizeButtonMap,
} from "./types";

export const TEXT_COLOR_MAP: HierarchyToTextColorMapInterface = {
  primary: "bg01",
  secondary: "primary01",
  tertiary: "primary01",
  danger: "dangerText",
};

export const DISABLED_COLORS_MAP: HierarchyToTextColorMapInterface = {
  primary: "primaryDisable",
  secondary: "primaryDisable",
  tertiary: "primaryDisable",
  danger: "dangerTextDisable",
};

const SIZE_BUTTONS_MAP: StyledSizeButtonMap = {
  large: css`
    padding: 14px 32px;
  `,
  medium: css`
    padding: 8px 32px;
  `,
  small: css`
    padding: 4px 16px;
  `,
};

const NO_TEXT_BUTTON_SIZE: StyledSizeButtonMap = {
  small: css`
    padding: 8px;
    width: 32px;
    height: 32px;
  `,
  medium: css`
    padding: 12px;
    width: 40px;
    height: 40px;
  `,
  large: css`
    padding: 16px;
    width: 52px;
    height: 52px;
  `,
};

const buildHierarchyButtons = (
  hierarchy: ButtonHierarchy,
  isDisabled: boolean
) => {
  switch (hierarchy) {
    case "primary":
      return css`
        background: ${buildColor("primary")};
        border-radius: 200px;

        ${isDisabled
          ? css`
              border: none;
              background: ${buildColor("surfaceDisable")};
            `
          : css`
              :hover {
                background: ${buildColor("primaryHover")};
              }

              :active {
                background: ${buildColor("primaryText")};
                box-shadow: 0px 0px 0px 3px ${buildColor("primaryTint02")};
              }
            `}
      `;
    case "secondary":
      return css`
        background: transparent;
        border: 1px solid ${buildColor("surfaceHover02")};
        border-radius: 200px;

        ${isDisabled
          ? css`
              border: none;
              background: ${buildColor("surfaceDisable")};
            `
          : css`
              :hover {
                border-color: ${buildColor("primary01")};
              }

              :active {
                background: ${buildColor("surface01")};
                box-shadow: 0px 0px 0px 3px ${buildColor("primaryTint02")};
              }
            `}
      `;
    case "tertiary":
      return css`
        background: transparent;
        border-radius: 200px;

        ${isDisabled
          ? css`
              border: none;
                
                label {
                  color: ${buildColor("primaryDisable")}};
                }
            `
          : css`
              :hover {
                
                label {
                  color: ${buildColor("primary03")}};
                }
              }

              :active {
                box-shadow: 0px 0px 0px 3px ${buildColor("primaryTint02")};

                label {
                  color: ${buildColor("primary04")}};
                }
              }
            `}
      `;
    case "danger":
    default:
      return css`
        background: ${buildColor("danger")};
        border-radius: 200px;

        ${isDisabled
          ? css`
              background: ${buildColor("dangerDisable")};

              label {
                color: ${buildColor("dangerTextDisable")};
              }
            `
          : css`
              :hover {
                background: ${buildColor("dangerTint01")};
              }

              :active {
                background: ${buildColor("dangerShade01")};
                box-shadow: 0px 0px 0px 3px ${buildColor("dangerTint01")};
              }
            `}
      `;
  }
};

const buildIsStretched = (isStretched: boolean) =>
  isStretched &&
  css`
    width: 100%;
  `;

export const StyledButton = styled.button<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.25s;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  background-color: ${buildColor("primary")};
  position: relative;
  ${({ size }) => SIZE_BUTTONS_MAP[size]}
  ${({ hierarchy, isDisabled }) => buildHierarchyButtons(hierarchy, isDisabled)}
    ${({ isStretched }) => buildIsStretched(isStretched)}
    ${({ hasNoText, size }) =>
    hasNoText &&
    css`
      padding: 12px;
      border-radius: 50%;

      ${NO_TEXT_BUTTON_SIZE[size]}
    `}
  
  label {
    cursor: pointer;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      label {
        cursor: not-allowed;
      }
    `}
`;

export const ButtonTextContainer = styled.div<StyledButtonTextContainerProps>`
  flex-grow: 1;
  ${({ isHidden }) => isHidden && `visibility: hidden;`}
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
