import { ChangeEventHandler, MouseEventHandler } from "react";

export interface CheckSquareProps {
  isDisabled: boolean;
  hasNoAction: boolean;
  isChecked: boolean;
}

export interface Props {
  isChecked: boolean;
  label?: string;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onCheckboxClick?: MouseEventHandler<HTMLInputElement>;
  checkboxRef: React.Ref<HTMLInputElement>;
  hasNoAction?: boolean;
  children?: React.ReactNode;
}
