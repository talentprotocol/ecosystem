import { LabelContainer, Slider } from "./styled";
import { Props } from "./types";

// TODO: Refactor this component to be according the DS standards
export const Switch = ({ isChecked, onChange, state, isDarkTheme }: Props) => (
  <LabelContainer>
    <input
      type="checkbox"
      defaultChecked={isChecked}
      onClick={state !== "disabled" ? onChange : undefined}
    />
    <Slider isChecked={isChecked} state={state} isDarkTheme={isDarkTheme} />
  </LabelContainer>
);
