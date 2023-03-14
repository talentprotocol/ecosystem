import { LabelContainer, Slider, StyledInput } from "./styled";
import { Props } from "./types";

export const Switch = ({ isChecked, onChange, state }: Props) => (
  <LabelContainer>
    <StyledInput
      type="checkbox"
      defaultChecked={isChecked}
      onClick={state !== "disabled" ? onChange : undefined}
    />
    <Slider isChecked={isChecked} state={state} />
  </LabelContainer>
);
