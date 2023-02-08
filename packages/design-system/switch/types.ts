import { MouseEventHandler } from "react";

export type SwitchState = "enabled" | "disabled";

export interface Props {
  isChecked: boolean;
  isDarkTheme: boolean;
  state: SwitchState;
  onChange?: MouseEventHandler<HTMLInputElement>;
}

export interface SliderProps {
  isChecked: boolean;
  isDarkTheme: boolean;
  state: SwitchState;
}
