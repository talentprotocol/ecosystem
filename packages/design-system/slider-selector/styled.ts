import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { StyledSelectorMark, VariantToMaskColorMapType } from "./types";

const VARIANT_TO_ACTIVE_MARK_COLOR_MAP: VariantToMaskColorMapType = {
  primary: css`
    background: ${buildColor("primary")}
  `,
  secondary: css`
    background: ${buildColor("bg01")}
  `,
};
const VARIANT_TO_INACTIVE_MARK_COLOR_MAP: VariantToMaskColorMapType = {
  primary: css`
    opacity: 0.3;
    background: ${buildColor("surfaceHover02")}
  `,
  secondary: css`
    opacity: 0.3;
    background: ${buildColor("bg01")}
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const SelectorMark = styled.div<StyledSelectorMark>`
  min-width: 24px;
  min-height: 2px;
  border-radius: 16px;
  ${({ isActive, variant }) =>
    isActive
      ? VARIANT_TO_ACTIVE_MARK_COLOR_MAP[variant]
      : VARIANT_TO_INACTIVE_MARK_COLOR_MAP[variant]}
`;
