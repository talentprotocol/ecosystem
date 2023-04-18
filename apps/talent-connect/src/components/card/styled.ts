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

export const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${buildColor("bg01")}80;
    background-image: linear-gradient(to top, ${buildColor("bg01")}DD, ${buildColor("bg01")}80);
    z-index: 1;
    display: flex;
    flex-direction: column;
`;
