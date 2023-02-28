import { Icon } from "../../icon";
import { Container } from "./styled";
import { Props } from "./types";

export const ButtonLabel = ({
  leftIcon,
  rightIcon,
  children,
  iconColor,
}: Props) => (
  <Container>
    {!!leftIcon && <Icon name={leftIcon} color={iconColor} />}
    {children}
    {!!rightIcon && <Icon name={rightIcon} color={iconColor} />}
  </Container>
);
