import { SyntheticEvent, useCallback } from "react";
import { Icon } from "../icon";
import { Typography } from "../typography";
import { CheckSquare, Container, IconContainer } from "./styled";
import { Props } from "./types";

export const Checkbox = ({
  isChecked,
  isDisabled = false,
  ref,
  label,
  onChange,
  onCheckboxClick,
  hasNoAction = false,
}: Props) => {
  const dummyEventClogger = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );
  return (
    <Container>
      <CheckSquare
        ref={ref}
        type="checkbox"
        defaultChecked={isChecked}
        isDisabled={isDisabled}
        onChange={onChange}
        onClick={hasNoAction ? dummyEventClogger : onCheckboxClick}
        hasNoAction={hasNoAction}
      />
      {isChecked && (
        <IconContainer>
          <Icon name="check-chat" size={8} color="bg01" />
        </IconContainer>
      )}
      {label && (
        <Typography
          specs={{ variant: "p2", type: "regular" }}
          color={isDisabled ? "primaryDisable" : "primary01"}
        >
          {label}
        </Typography>
      )}
    </Container>
  );
};
