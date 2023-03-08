import { Icon } from "../icon";
import { Container } from "./styled";
import { Props } from "./types";

export const Spinner = ({ color = "primary", size }: Props) => (
  <Container>
    <Icon name="progress" color={color} size={size} />
  </Container>
);
