import { MouseEventHandler } from "react";

export type SwitchState = "enabled" | "disabled";

export interface Props {
  isChecked: boolean;
  state: SwitchState;
  onChange?: MouseEventHandler<HTMLLabelElement>;
}

export interface SliderProps {
  isChecked: boolean;
  state: SwitchState;
}
