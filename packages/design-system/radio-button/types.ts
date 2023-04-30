import { ChangeEventHandler } from "react";

export interface CheckSquareProps {
  isDisabled: boolean;
}

export interface Props {
  isChecked: boolean;
  label?: string;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: React.Ref<HTMLInputElement>;
}
