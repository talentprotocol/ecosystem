import { Icon } from "../icon";
import { Typography } from "../typography";
import {
  Container,
  InputContainer,
  LabelBar,
  RightIconContainer,
  StyledInput,
} from "./styled";
import { Props } from "./types";

export const Input = ({
  inputRef,
  onChange,
  onBlur,
  onFocus,
  onEnterCallback,
  defaultValue,
  placeholder,
  isDisabled = false,
  label,
  shortDescription,
  caption,
  hasError = false,
  type,
  iconColor,
  leftIcon,
  leftIconCallback,
  rightIcon,
  rightIconCallback,
  forceLowerCase = false,
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
        <Typography
          specs={{ variant: "p3", type: "bold" }}
          color={(isDisabled && "primaryDisable") || "primary04"}
        >
          {caption}
        </Typography>
      )}
    </LabelBar>
    <InputContainer
      isDisabled={isDisabled}
      hasError={hasError}
      onClick={() => {
        inputRef?.current?.focus();
        if (leftIconCallback) leftIconCallback();
      }}
    >
      {leftIcon && (
        <Icon
          name={leftIcon}
          color={isDisabled ? "primaryDisable" : iconColor}
        />
      )}
      <StyledInput
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter" && onEnterCallback) {
            onEnterCallback(event);
          }
        }}
        placeholder={placeholder}
        ref={inputRef}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        defaultValue={defaultValue}
        disabled={isDisabled}
        isDisabled={isDisabled}
        hasError={hasError}
        type={type}
        forceLowerCase={forceLowerCase}
      />
      {rightIcon && (
        <RightIconContainer
          isClickable={!!rightIconCallback}
          onClick={rightIconCallback}
        >
          <Icon
            name={rightIcon}
            color={isDisabled ? "primaryDisable" : iconColor}
          />
        </RightIconContainer>
      )}
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
