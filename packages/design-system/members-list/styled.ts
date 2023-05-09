import styled from "styled-components";
import { buildColor } from "../colors";

export const MembersContainer = styled.div`
  display: flex;
  height: 36px;
  gap: 8px;
  align-items: center;
  position: relative;
  align-items: center;
  padding-left: 120px;
`;

export const AvatarsHorizontalStack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;

  & :nth-child(n + 2) {
    margin-left: -12px;
  }
`;

export const SmallAvatarContainer = styled.div`
  border-radius: 50%;
  border: 2px solid ${buildColor("bg01")};
  overflow: hidden;
`;

export const MembersCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
