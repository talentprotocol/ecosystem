import styled from "styled-components";
import { buildColor } from "../colors";

export const Container = styled.div`
  max-width: 494px;
  min-width: 494px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid ${buildColor("surfaceHover02")};
  background: ${buildColor("bg01")};
  box-shadow: 0px 8px 24px 0px ${buildColor("surfaceOverlay")};
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    flex-grow: 1;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    min-width: 16px;
  }

  p {
    flex-grow: 1;
  }
`;

export const CrossIconBox = styled.div``;

export const FollowLinkContainer = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    min-width: 16px;
  }
`;
