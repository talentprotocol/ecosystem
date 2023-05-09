import styled from "styled-components";
import { buildColor } from "../colors";
import { StyledBannerProps } from "./types";

export const Container = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  width: 311px;
  height: 335px;
  border: 1px solid ${buildColor("surfaceHover02")};
  border-radius: 16px;
  overflow: hidden;

  :hover {
    border: 1px solid ${buildColor("primary04")};
  }
`;

export const Banner = styled.div<StyledBannerProps>`
  width: 100%;
  min-height: 78px;
  background: ${buildColor("primaryTint01")};
  ${({ bannerImage }) =>
    bannerImage && `background-image: url(${bannerImage});`}
  background-position: center;
  background-size: 100% 100%;
  position: relative;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  left: 16px;
  top: 34px;
  border-radius: 50%;
  border: 2px solid ${buildColor("bg01")};
`;

export const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  padding: 0 16px;
`;

export const DataRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 45px;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 40px;
`;
