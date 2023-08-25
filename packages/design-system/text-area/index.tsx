import { Typography } from "../typography";
import { Container, InputContainer, LabelBar, StyledTextArea } from "./styled";
import { Props } from "./types";

export const TextArea = ({
  textAreaRef,
  onChange,
  onFocus,
  onBlur,
  defaultValue,
  isDisabled = false,
  label,
  shortDescription,
  caption,
  hasError = false,
  placeholder = "",
}: Props) => (
  <Container>
    <LabelBar>
      {label && (
        <Typography
          specs={{ variant: "p2", type: "bold" }}
          color={
            (isDisabled && "primaryDisable") ||
            (hasError && "dangerTint01") ||
            "primary01"
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
        placeholder={placeholder}
        ref={textAreaRef}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
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
