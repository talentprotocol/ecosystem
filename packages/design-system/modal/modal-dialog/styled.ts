import styled from "styled-components";
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
  padding: 16px;
  z-index: 1000;
`;

export const InnerContainer = styled.section`
  width: 100%;
  max-width: 500px;
  max-height: 80%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-radius: 24px;
  background: ${buildColor("bg01")};
  border: 1px solid ${buildColor("surfaceHover02")};
  overflow: hidden;
`;

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;
