import styled, { css } from "styled-components";
import { desktopStyles, mobileStyles } from "../../breakpoints";
import { buildColor } from "../../colors";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${buildColor("surfaceHover01")}80;
  z-index: 1000;
`;

export const InnerContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background: ${buildColor("bg01")};
  margin-top: 8px;

  ${mobileStyles(css`
    height: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  `)}

  ${desktopStyles(css`
    max-width: 600px;
    max-height: 670px;
    margin: auto;
    border-radius: 24px;
  `)}
`;

export const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid ${buildColor("surfaceHover01")};
`;

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    transform: scale(-1, 1);
  }
`;

export const ChildrenContainer = styled.section`
  padding: 16px;
  overflow-y: auto;
  padding: 24px 16px;
  height: 500px;
  flex-grow: 1;
`;
