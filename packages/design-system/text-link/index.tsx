import { Icon } from "../icon";
import { Typography } from "../typography";
import { Container, InnerContainer } from "./styled";
import { Props } from "./types";

export const TextLink = ({
  leftIcon,
  rightIcon,
  color,
  text,
  size,
  href,
}: Props) => (
  <Container>
    <InnerContainer href={href} color={color}>
      {!!leftIcon && <Icon name={leftIcon} color={color} />}
      <Typography
        specs={{
          variant: size === "small" ? "label2" : "label1",
          type: "medium",
        }}
        color={color}
      >
        {text}
      </Typography>
      {!!rightIcon && <Icon name={rightIcon} color={color} />}
    </InnerContainer>
  </Container>
);
