import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
   from {
      transform: rotate3d(0, 0, 1, 0deg);
   }
   to {
      transform: rotate3d(0, 0, 1, 360deg);
   }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation-name: ${rotateAnimation};
    animation-duration: 1.25s;
    animation-iteration-count: infinite;
  }
`;
