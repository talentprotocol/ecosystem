import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { mobileStyles } from "../breakpoints";
import { buildColor } from "../colors/palette";
import { PaletteTokens } from "../colors/palette/types";
import {
  StyledHeaderProps,
  HeaderTypes,
  StyledParagraphProps,
  ParagraphTypes,
  LabelTypes,
  StyledLabelProps,
  StyledCaptionProps,
} from "./types";

const baseStyles = (color: PaletteTokens) => css`
  font-family: "Acid Grotesk TP";
  font-style: normal;
  color: ${buildColor(true, color)};
`;

const buildHeaderStyles = (type: HeaderTypes): FlattenSimpleInterpolation => {
  switch (type) {
    case "bold":
      return css`
        font-weight: 500;
      `;
    case "regular":
    default:
      return css`
        font-weight: 400;
      `;
  }
};

const buildParagraphStyles = (
  type: ParagraphTypes
): FlattenSimpleInterpolation => {
  switch (type) {
    case "bold":
      return css`
        font-weight: 700;
      `;
    case "medium":
      return css`
        font-weight: 500;
      `;
    case "regular":
    default:
      return css`
        font-weight: 400;
      `;
  }
};

const buildLabelStyles = (type: LabelTypes): FlattenSimpleInterpolation => {
  switch (type) {
    case "medium":
      return css`
        font-weight: 500;
      `;
    case "regular":
    default:
      return css`
        font-weight: 400;
      `;
  }
};

export const H1 = styled.h1<StyledHeaderProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildHeaderStyles(props.type)}
  font-size: 48px;
  line-height: 120%;
`;

export const H2 = styled.h2<StyledHeaderProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildHeaderStyles(props.type)}
  font-size: 40px;
  line-height: 120%;
`;

export const H3 = styled.h3<StyledHeaderProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildHeaderStyles(props.type)}
  font-size: 32px;
  line-height: 120%;

  ${mobileStyles(css`
    font-size: 25px;
  `)}
`;

export const H4 = styled.h4<StyledHeaderProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildHeaderStyles(props.type)}
  font-size: 25px;
  line-height: 120%;

  ${mobileStyles(css`
    font-size: 20px;
    line-height: 140%;
  `)}
`;

export const H5 = styled.h5<StyledHeaderProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildHeaderStyles(props.type)}
  font-size: 20px;
  line-height: 140%;

  ${mobileStyles(css`
    font-size: 20px;
  `)}
`;

export const P1 = styled.p<StyledParagraphProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildParagraphStyles(props.type)}
  font-size: 16px;
  line-height: 165%;

  ${mobileStyles(css`
    font-size: 16px;
  `)}
`;

export const P2 = styled.p<StyledParagraphProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildParagraphStyles(props.type)}
  font-size: 14px;
  line-height: 165%;

  ${mobileStyles(css`
    font-size: 14px;
    line-height: 165%;
  `)}
`;

export const P3 = styled.p<StyledParagraphProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildParagraphStyles(props.type)}
  font-size: 12px;
  line-height: 165%;

  ${mobileStyles(css`
    font-size: 12px;
    line-height: 165%;
  `)}
`;

export const Label1 = styled.label<StyledLabelProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildLabelStyles(props.type)}
  font-size: 16px;
  line-height: 24px;
`;

export const Label2 = styled.label<StyledLabelProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildLabelStyles(props.type)}
  font-size: 14px;
  line-height: 24px;
`;

export const Label3 = styled.label<StyledLabelProps>`
  ${(props) => baseStyles(props.color)}
  ${(props) => buildLabelStyles(props.type)}
  font-size: 12px;
  line-height: 24px;
`;

export const Caption = styled.caption<StyledCaptionProps>`
  ${(props) => baseStyles(props.color)}
  font-weight: 500;
  font-size: 10px;
  line-height: 185%;

  ${mobileStyles(css`
    font-size: 10px;
  `)}
`;
