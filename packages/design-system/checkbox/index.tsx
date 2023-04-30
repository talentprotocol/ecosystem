import { Icon } from "../icon";
import { Typography } from "../typography";
import { CheckSquare, Container, IconContainer } from "./styled";
import { Props } from "./types";

export const Checkbox = ({
  isChecked,
  isDisabled = false,
  ref,
  onChange,
}: Props) => (
  <Container>
    <CheckSquare
      ref={ref}
      type="checkbox"
      defaultChecked={isChecked}
      isDisabled={isDisabled}
      onChange={onChange}
    />
    {isChecked && (
      <IconContainer>
        <Icon name="check-chat" size={8} color="bg01" />
      </IconContainer>
    )}
    <Typography
      specs={{ variant: "p2", type: "regular" }}
      color={isDisabled ? "primaryDisable" : "primary01"}
    >
      Label
    </Typography>
  </Container>
);
