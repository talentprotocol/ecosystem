import styled from "styled-components";
import { buildColor } from "../colors";

export const MembersContainer = styled.div`
  display: flex;
  height: 36px;
  gap: 8px;
  align-items: center;
  position: relative;
  align-items: center;
`;

export const AvatarsHorizontalStack = styled.div`
  align-items: center;
  display: flex;
  margin-left: 10px;
`;

export const SmallAvatarContainer = styled.div`
  border: 2px solid ${buildColor("bg01")};
  border-radius: 50%;
  margin-left: -10px;
`;

export const MembersCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
