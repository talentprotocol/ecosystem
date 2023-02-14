import { css, FlattenSimpleInterpolation } from "styled-components";

export const desktopStyles = (styles: FlattenSimpleInterpolation) =>
  css`
    @media (min-width: 1240px) {
      ${styles}
    }
  `;

export const mobileStyles = (styles: FlattenSimpleInterpolation) =>
  css`
    @media (max-width: 1240px) {
      ${styles}
    }
  `;
