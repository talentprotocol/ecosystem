import { LabelContainer, Slider } from "./styled";
import { Props } from "./types";

export const Switch = ({ isChecked, onChange, state, isDarkTheme }: Props) => (
  <LabelContainer>
    <input type="checkbox" defaultChecked={isChecked} onClick={onChange} />
    <Slider isChecked={isChecked} state={state} isDarkTheme={isDarkTheme} />
  </LabelContainer>
);
