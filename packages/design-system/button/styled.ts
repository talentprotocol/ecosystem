import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { ButtonHierarchy, ButtonSize, StyledProps } from "./types";

const buildSizeButtons = (size: ButtonSize) => {
  switch (size) {
    case "large":
      return css`
        padding: 14px 32px;
      `;
    case "medium":
      return css`
        padding: 8px 32px;
      `;
    case "small":
    default:
      return css`
        padding: 4px 16px;
      `;
  }
};

const buildHierarchyButtons = (
  hierarchy: ButtonHierarchy,
  isDisabled: boolean
) => {
  switch (hierarchy) {
    case "primary":
      return css`
        background: ${buildColor("primary")};
        color: ${buildColor("bg01")};
        border-radius: 200px;
        ${isDisabled &&
        css`
          background: ${buildColor("surfaceDisable")};
          color: ${buildColor("primaryDisable")};
        `}

        :hover {
          background: ${buildColor("primaryHover")};
        }

        :active {
          background: ${buildColor("primaryText")};
        }

        :focus {
          border: 3px solid ${buildColor("primaryTint02")};
        }
      `;
    case "secondary":
      return css`
        background: transparent;
        color: ${buildColor("primary01")};
        border: 1px solid ${buildColor("surfaceHover02")};
        border-radius: 200px;
        ${isDisabled &&
        css`
          background: ${buildColor("surfaceDisable")};
          color: ${buildColor("primaryDisable")};
        `}

        :hover {
          border-color: ${buildColor("primary01")};
        }

        :active {
          background: ${buildColor("surface01")};
        }

        :focus {
          border-color: ${buildColor("surfaceHover02")};
          box-shadow: 0px 0px 0px 3px ${buildColor("primaryTint02")};
        }
      `;
    case "tertiary":
      return css`
        background: transparent;
        color: ${buildColor("primary01")};
        ${isDisabled &&
        css`
          background: ${buildColor("surfaceDisable")};
          color: ${buildColor("dangerTint03")};
        `}

        :hover {
          background: ${buildColor("surfaceHover01")};
        }

        :active {
          background: ${buildColor("surfaceHover02")};
        }

        :focus {
          border: 3px solid ${buildColor("primaryTint02")};
        }
      `;
    case "danger":
    default:
      return css`
        background: transparent;
        color: ${buildColor("bg01")};
        border: 1px solid ${buildColor("dangerTint01")};
        border-radius: 200px;
        ${isDisabled &&
        css`
          background: ${buildColor("dangerDisable")};
          color: ${buildColor("primaryDisable")};
        `}

        :hover {
          background: ${buildColor("danger")};
        }

        :active {
          background: ${buildColor("dangerShade01")};
        }

        :focus {
          background: ${buildColor("dangerTint01")};
          border: 3px solid ${buildColor("dangerTint02")};
        }
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
  background-color: ${buildColor("primary")};
  ${({ size }) => buildSizeButtons(size)}
  ${({ hierarchy, isDisabled }) => buildHierarchyButtons(hierarchy, isDisabled)}
  ${({ isStretched }) => buildIsStretched(isStretched)}
`;
