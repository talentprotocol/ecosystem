import { MouseEventHandler, SyntheticEvent, useCallback, useState } from "react";
import { Icon } from "../icon";
import { Typography } from "../typography";
import { CheckSquare, Container, IconContainer } from "./styled";
import { Props } from "./types";

export const Checkbox = ({
  isChecked,
  isDisabled = false,
  checkboxRef,
  label,
  onChange,
  onCheckboxClick,
  hasNoAction = false,
}: Props) => {
  const [updatedState, setUpdatedState] = useState(isChecked);
  const dummyEventClogger = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      setUpdatedState(!updatedState);
      e.preventDefault();
      e.stopPropagation();
    },
    [setUpdatedState, updatedState]
  );
  const callbackWrapper = useCallback<MouseEventHandler<HTMLInputElement>>((e) => { 
    e.preventDefault();
    e.stopPropagation();
    setUpdatedState(!updatedState);
    onCheckboxClick(e);
  }, [setUpdatedState, updatedState, onCheckboxClick]);

  console.log(hasNoAction)
  return (
    <Container>
      <CheckSquare
        ref={checkboxRef}
        type="checkbox"
        isChecked={updatedState}
        isDisabled={isDisabled}
        onChange={onChange}
        onClick={hasNoAction ? dummyEventClogger : callbackWrapper}
        hasNoAction={hasNoAction}
      />
      {updatedState && (
        <IconContainer onClick={hasNoAction ? dummyEventClogger : callbackWrapper}>
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
