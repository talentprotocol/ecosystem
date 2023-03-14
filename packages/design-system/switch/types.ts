import { MouseEventHandler } from "react";

export type SwitchState = "enabled" | "disabled";

export interface Props {
  isChecked: boolean;
  state: SwitchState;
  onChange?: MouseEventHandler<HTMLInputElement>;
}

export interface SliderProps {
  isChecked: boolean;
  state: SwitchState;
}
