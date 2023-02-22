import { Typography } from "../typography";
import { Props } from "./types";
import { StyledButton } from "./styled";

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
      <Typography specs={{ variant: "label2", type: "medium" }} color="bg01">
        {text}
      </Typography>
    </StyledButton>
  );
};
