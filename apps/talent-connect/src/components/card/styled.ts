import { buildColor } from "@talentprotocol/design-system";
import styled from "styled-components";


export const Container = styled.section`
  height: 100%;
  background: ${buildColor("bg01")};
`;

export const BackgroundImage = styled.div<{img: string}>`
    position: absolute;
    width: 100%;
    height: 80%;
    background-image: url('${({ img }) => img}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 16px ${buildColor("bg01")};
`;

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 80%;
    background: linear-gradient(180deg, rgba(19, 20, 21, 0.9) 0%, rgba(19, 20, 21, 0) 29.33%), linear-gradient(180deg, rgba(19, 20, 21, 0) 0%, ${buildColor("bg01")} 100%);
    z-index: 1;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
`;

export const ContentRow = styled.div`
  display: flex;
  gap: 8px;
`

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 2;
  gap: 16px;
`;

export const DescriptionContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;