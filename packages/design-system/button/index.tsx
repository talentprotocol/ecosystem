import { Typography } from "../typography";
import { ButtonLabel } from "./button-label";
import {
  DISABLED_COLORS_MAP,
  StyledButton,
  ButtonTextContainer,
  TEXT_COLOR_MAP,
} from "./styled";
import { Props, VariantToTextSizeMapInterface } from "./types";

const VARIANT_TO_TEXT_SIZE_MAP: VariantToTextSizeMapInterface = {
  large: "label1",
  medium: "label1",
  small: "label2",
};

export const Button = ({
  size,
  hierarchy,
  text = "",
  isDisabled = false,
  isStretched = false,
  iconColor = "bg01",
  leftIcon,
  rightIcon,
  newPage,
  href,
  onClick,
}: Props) => {
  return (
    <StyledButton
      as={!!href ? "a" : "button"}
      hierarchy={hierarchy}
      size={size}
      isStretched={isStretched}
      isDisabled={isDisabled}
      disabled={!href && isDisabled}
      href={href}
      target={newPage ? "_blank" : "_self"}
      onClick={onClick}
      hasNoText={(!!leftIcon || !!rightIcon) && !text}
    >
      <ButtonLabel
        leftIcon={leftIcon}
        iconColor={iconColor}
        rightIcon={rightIcon}
      >
        {!!text ? (
          <ButtonTextContainer>
            <Typography
              specs={{
                variant: VARIANT_TO_TEXT_SIZE_MAP[size],
                type: "medium",
              }}
              color={
                isDisabled
                  ? DISABLED_COLORS_MAP[hierarchy]
                  : TEXT_COLOR_MAP[hierarchy]
              }
            >
              {text}
            </Typography>
          </ButtonTextContainer>
        ) : (
          <></>
        )}
      </ButtonLabel>
    </StyledButton>
  );
};
