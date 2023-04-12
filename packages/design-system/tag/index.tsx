import { Icon } from "../icon";
import { Typography } from "../typography";
import { Container } from "./styled";
import { Props } from "./types";

// TODO: Refactor DS on Figma and accoomodate changes for an independent component
export const Tag = ({
  leftIcon,
  rightIcon,
  name,
  size,
  backgroundColor,
  textColor,
  borderColor,
}: Props) => (
  <Container
    backgroundColor={backgroundColor}
    size={size}
    borderColor={borderColor}
  >
    {!!leftIcon ? (
      <Icon name={leftIcon} color={textColor} size={12} />
    ) : (
      <div />
    )}
    <Typography
      specs={{
        variant: size === "small" ? "label2" : "label3",
        type: "medium",
      }}
      color={textColor}
    >
      {name}
    </Typography>
    {!!rightIcon ? (
      <Icon name={rightIcon} color={textColor} size={12} />
    ) : (
      <div />
    )}
  </Container>
);
