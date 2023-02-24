export type PillVariant = "primary" | "secondary";

export interface StyledPill {
  isSelected: boolean;
  isDisabled?: boolean;
}

export interface Pill {
  content: string;
  isSelected: boolean;
  isDisabled?: boolean;
}

export interface Props {
  pillList: Pill[];
  onClick: (N: number, P: Pill) => void;
}
