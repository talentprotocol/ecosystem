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
  ${({ size }) => (size === "small" ? "padding: 0 0;" : "padding: 2px 0;")};
`;

export const LeftIconContainer = styled.div`
  margin-left: 8px;
`;

export const RightIconContainer = styled.div`
  margin-right: 8px;
`;
