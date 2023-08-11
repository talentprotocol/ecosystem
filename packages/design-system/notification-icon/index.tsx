import { Icon } from "../icon";
import { Container } from "./styled";
import { Props } from "./types";

export const NotificationIcon = ({ size = 6 }: Props) => (
  <Container>
    <Icon name="notification" color="danger" size={size} />
  </Container>
);
