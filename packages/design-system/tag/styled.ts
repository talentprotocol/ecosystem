import styled from "styled-components";
import { buildColor } from "../colors";
import { StyledContainerProps } from "./types";

export const Container = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  ${({ borderColor }) =>
    borderColor && `border: 1px solid ${buildColor(borderColor)};`}
  background-color: ${({ backgroundColor }) => buildColor(backgroundColor)};
  ${({ size }) => (size === "small" ? "padding: 0 8px;" : "padding: 2px 8px;")};
`;

export const TagLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;
