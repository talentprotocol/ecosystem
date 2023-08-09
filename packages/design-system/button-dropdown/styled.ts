import styled, { css } from "styled-components";
import { buildColor } from "../colors";
import { getTheme } from "../theme";
import { OptionContainerProps } from "./types";
import { Typography } from "../typography";

export const OutterContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const OptionsContainer = styled.div<OptionContainerProps>`
  width: auto;
  position: absolute;
  bottom: -4px;
  transform: translate(
    ${({ opensOnRight }) => (opensOnRight ? "-80%" : "0")},
    100%
  );
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

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Option = styled.div`
  cursor: pointer;
  padding: 8px 32px 8px 8px;
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
`;

export const OptionLabel = styled(Typography)`
  white-space: nowrap;
`;
