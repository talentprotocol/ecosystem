import { Typography } from "../typography";
import { CheckSquare, Container, InnerRadioContainer } from "./styled";
import { Props } from "./types";

export const RadioButton = ({
  isChecked,
  isDisabled = false,
  ref,
  label,
  onChange,
}: Props) => (
  <Container>
    <CheckSquare
      ref={ref}
      type="radio"
      defaultChecked={isChecked}
      isDisabled={isDisabled}
      checked={isChecked}
      onChange={onChange}
    />
    {isChecked && <InnerRadioContainer isDisabled={isDisabled} />}
    {label && (
      <Typography
        specs={{ variant: "p2", type: "regular" }}
        color={isDisabled ? "primaryDisable" : "primary01"}
      >
        {label}
      </Typography>
    )}
  </Container>
);
