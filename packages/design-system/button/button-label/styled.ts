import styled from "styled-components";
import { IconContainerProps } from "./types";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isHidden }) => isHidden && "visibility: hidden;"}
`;
