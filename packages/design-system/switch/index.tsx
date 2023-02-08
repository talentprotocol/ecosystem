import { LabelContainer, Slider } from "./styled";
import { Props } from "./types";

export const Switch = ({ isChecked, onChange, state }: Props) => (
  <LabelContainer>
    <input type="checkbox" defaultChecked={isChecked} onClick={onChange}/>
    <Slider isChecked={isChecked} state={state} />
  </LabelContainer>
);
