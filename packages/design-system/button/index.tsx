import { Typography } from "../typography";
import { DISABLED_COLORS_MAP, StyledButton, TEXT_COLOR_MAP } from "./styled";
import { Props, VariantToTextSizeMapInterface } from "./types";

const VARIANT_TO_TEXT_SIZE_MAP: VariantToTextSizeMapInterface = {
  large: "label1",
  medium: "label1",
  small: "label2",
};

export const Button = ({
  size,
  hierarchy,
  text,
  isDisabled = false,
  isStretched = false,
}: Props) => {
  return (
    <StyledButton
      hierarchy={hierarchy}
      size={size}
      isStretched={isStretched}
      isDisabled={isDisabled}
      disabled={isDisabled}
    >
      <Typography
        specs={{ variant: VARIANT_TO_TEXT_SIZE_MAP[size], type: "medium" }}
        color={
          isDisabled
            ? DISABLED_COLORS_MAP[hierarchy]
            : TEXT_COLOR_MAP[hierarchy]
        }
      >
        {text}
      </Typography>
    </StyledButton>
  );
};
