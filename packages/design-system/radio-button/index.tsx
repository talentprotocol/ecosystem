import { Typography } from "../typography";
import { CheckSquare, Container, InnerRadiContainer } from "./styled";
import { Props } from "./types";

export const RadioButton = ({
  isChecked,
  isDisabled = false,
  ref,
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
    {isChecked && <InnerRadiContainer isDisabled={isDisabled} />}
    <Typography
      specs={{ variant: "p2", type: "regular" }}
      color={isDisabled ? "primaryDisable" : "primary01"}
    >
      Label
    </Typography>
  </Container>
);
