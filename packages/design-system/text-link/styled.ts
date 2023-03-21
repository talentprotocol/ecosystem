import styled from "styled-components";
import { buildColor } from "../colors";
import { StyledTextLinkProps } from "./types";

export const Container = styled.span`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const InnerContainer = styled.a<StyledTextLinkProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;

  label {
    cursor: pointer;
    text-decoration: none;
  }

  :hover {
    border-bottom: 1px solid ${({ color }) => buildColor(color)};
  }

  :active {
    border-bottom: 1px solid ${({ color }) => buildColor(color)};
  }

  :focus {
    border-bottom: 1px solid ${({ color }) => buildColor(color)};
  }
`;
