import styled from "styled-components";
import { buildColor } from "../colors";

export const OutterContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid ${buildColor("surfaceHover02")};
  border-radius: 8px;
  cursor: pointer;

  label {
    flex-grow: 1;
  }

  :hover {
    border: 1px solid ${buildColor("primary")};
  }

  :focus {
    border: 1px solid ${buildColor("primary")};
    box-shadow: 0px 0px 0px 3px ${buildColor("primaryTint02")};
  }
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
`;

export const OptionsInnerContainer = styled.div`
  max-height: 336px;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;

  label {
    cursor: pointer;
  }

  :hover {
    background: ${buildColor("surface02")};
  }
`;
