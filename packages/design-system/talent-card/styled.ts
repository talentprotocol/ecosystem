import styled from "styled-components";
import { buildColor } from "../colors";
import { StyledBannerProps } from "./types";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  width: 264px;
  height: 255px;
  border: 1px solid ${buildColor("surfaceHover02")};
  border-radius: 16px;
  overflow: hidden;
  transition-duration: 0.25s;

  :hover {
    border: 1px solid ${buildColor("primary04")};
  }
`;

export const Banner = styled.div<StyledBannerProps>`
  width: 100%;
  min-height: 66px;
  background: ${buildColor("primaryTint01")};
  ${({ bannerImage }) =>
    bannerImage && `background-image: url(${bannerImage});`}
  background-position: center;
  background-size: 100% 100%;
  position: relative;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 18px;
  border-radius: 50%;
  border: 2px solid ${buildColor("bg01")};
  transform: translateX(-50%);
`;

export const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 54px;
  padding: 0 16px;
  flex-grow: 1;
`;

export const DataRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
    white-space: nowrap;
  }
`;

export const OccupationContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  gap: 4px;
  height: 45px;
`;

export const CallToActionContainer = styled.div`
  width: 100%;
  padding-top: 16px;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
`;
