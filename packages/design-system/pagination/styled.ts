import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { PaginationItemProps } from "./types";
import { Icon } from "../icon";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PaginationItem = styled.div<PaginationItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 34px;
  height: 34px;
  padding: 5px;
  cursor: pointer;

  ${({ selected }) =>
    selected
      ? css`
          background: ${buildColor("primary")};
          color: ${buildColor("bg01")};
        `
      : css`
          :hover {
            background: ${buildColor("surfaceHover01")};
          }
        `}

  * {
    cursor: pointer;
  }
`;

export const MirroredIconContainer = styled.div`
  transform: scaleX(-1);
`;
