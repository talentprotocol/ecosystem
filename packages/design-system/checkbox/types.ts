import { ChangeEventHandler, MouseEventHandler } from "react";

export interface CheckSquareProps {
  isDisabled: boolean;
  hasNoAction: boolean;
}

export interface Props {
  isChecked: boolean;
  label?: string;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onCheckboxClick: MouseEventHandler<HTMLInputElement>;
  ref?: React.Ref<HTMLInputElement>;
  hasNoAction?: boolean;
}
