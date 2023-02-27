import { Typography } from "../typography";
import { Container, InputContainer, LabelBar, StyledTextArea } from "./styled";
import { Props } from "./types";

export const TextArea = ({
  ref,
  onChange,
  defaultValue,
  isDisabled = false,
  label,
  shortDescription,
  caption,
  hasError = false,
}: Props) => (
  <Container>
    <LabelBar>
      {label && (
        <Typography
          specs={{ variant: "p2", type: "bold" }}
          color={
            (isDisabled && "primaryDisable") ||
            (hasError && "dangerTint01") ||
            "primary04"
          }
        >
          {label}
        </Typography>
      )}
      {caption && (
        <Typography specs={{ variant: "p3", type: "bold" }} color={"primary04"}>
          {caption}
        </Typography>
      )}
    </LabelBar>
    <InputContainer isDisabled={isDisabled} hasError={hasError}>
      <StyledTextArea
        placeholder="Input"
        ref={ref}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={isDisabled}
      />
    </InputContainer>
    {shortDescription && (
      <Typography
        specs={{ variant: "p2", type: "regular" }}
        color={
          (isDisabled && "primaryDisable") ||
          (hasError && "dangerTint01") ||
          "primary04"
        }
      >
        {shortDescription}
      </Typography>
    )}
  </Container>
);