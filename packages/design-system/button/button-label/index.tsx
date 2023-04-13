import { Icon } from "../../icon";
import { Container, IconContainer } from "./styled";
import { ButtonSizeToIconSizeMapType, Props } from "./types";

const BUTTON_SIZE_TO_ICON_SIZE_MAP: ButtonSizeToIconSizeMapType = {
  small: 16,
  medium: 16,
  large: 20,
}  

export const ButtonLabel = ({
  leftIcon,
  rightIcon,
  children,
  iconColor,
  isLoading,
  size
}: Props) => (
  <Container>
    {!!leftIcon && (
      <IconContainer isHidden={isLoading}>
        <Icon name={leftIcon} color={iconColor} size={BUTTON_SIZE_TO_ICON_SIZE_MAP[size]} />
      </IconContainer>
    )}
    {children}
    {!!rightIcon && (
      <IconContainer isHidden={isLoading}>
        <Icon name={rightIcon} color={iconColor} size={BUTTON_SIZE_TO_ICON_SIZE_MAP[size]} />
      </IconContainer>
    )}
  </Container>
);