import { Spinner } from "../spinner";
import { Typography } from "../typography";
import { ButtonLabel } from "./button-label";
import {
  DISABLED_COLORS_MAP,
  StyledButton,
  ButtonTextContainer,
  TEXT_COLOR_MAP,
  SpinnerContainer,
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
  isLoading = false,
  onClick,
  buttonRef,
  children,
  ariaLabel
}: Props) => {
  return (
    <StyledButton
      ref={buttonRef}
      as={!!href ? "a" : "button"}
      hierarchy={hierarchy}
      size={size}
      isStretched={isStretched}
      isDisabled={isDisabled}
      disabled={!href && isDisabled}
      href={href}
      target={newPage ? "_blank" : "_self"}
      onClick={!isLoading ? onClick : undefined}
      hasNoText={(!!leftIcon || !!rightIcon) && !text}
      aria-label={ariaLabel || text}
    >
      <ButtonLabel
        leftIcon={leftIcon}
        iconColor={isDisabled ? DISABLED_COLORS_MAP[hierarchy] : iconColor}
        rightIcon={rightIcon}
        isLoading={isLoading}
        size={size}
      >
        <>
          {!!text && (
            <ButtonTextContainer isHidden={isLoading}>
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
          )}
          {!!children && (
            <ButtonTextContainer isHidden={isLoading}>{children}</ButtonTextContainer>
          )}
          {isLoading && (
            <SpinnerContainer>
              <Spinner color={TEXT_COLOR_MAP[hierarchy]} size={16} />
            </SpinnerContainer>
          )}
        </>
      </ButtonLabel>
    </StyledButton>
  );
};
