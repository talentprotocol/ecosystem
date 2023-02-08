import styled, { css } from "styled-components";
import { SliderProps, SwitchState } from "./types";

const buildSliderStyles = (
  isChecked: boolean,
  isDarkTheme: boolean,
  state: SwitchState
) => {
  switch (state) {
    case "disabled":
      if (isDarkTheme) {
        return css`
          background-color: #27282b;
        `;
      }
      return css`
        background-color: #f2f3f5;
      `;
    case "enabled":
    default:
      if (isDarkTheme) {
        return css`
          background-color: ${isChecked ? "#BBED55" : "#56595F"};
        `;
      }
      return css`
        background-color: ${isChecked ? "#7857ED" : "#AEBBC5"};
      `;
  }
};

export const buildPosition = (isChecked: boolean) =>
  isChecked
    ? css`
        right: 2px;
        top: 2px;
      `
    : css`
        left: 2px;
        top: 2px;
      `;

export const buildCircleStyles = (isDisabled: boolean, isDarkTheme: boolean) =>
  isDisabled
    ? css`
        background-color: ${isDarkTheme ? "#56595F" : "#AEBBC5"};
      `
    : css`
        background-color: #ffffff;
      `;

export const LabelContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Slider = styled.span<SliderProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  outline: none;
  ${({ isChecked, isDarkTheme, state }) =>
    buildSliderStyles(isChecked, isDarkTheme, state)}

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    ${({ isChecked }) => buildPosition(isChecked)}
    ${({ state, isDarkTheme }) =>
      buildCircleStyles(state === "disabled", isDarkTheme)}
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
