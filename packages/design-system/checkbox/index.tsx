import { MouseEventHandler, SyntheticEvent, createRef, useCallback, useRef, useState } from "react";
import { Icon } from "../icon";
import { Typography } from "../typography";
import { CheckSquare, Container, IconContainer } from "./styled";
import { Props } from "./types";

// TODO: Fix issues on the checkbox component ref (not working)

export const Checkbox = ({
  isChecked,
  isDisabled = false,
  checkboxRef,
  label,
  children,
  onChange,
  onCheckboxClick = () =>{},
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
    // @ts-ignore
    if (!checkboxRef.current) return;
    // @ts-ignore
    checkboxRef.current.checked = !updatedState;
    setUpdatedState(!updatedState);
    onCheckboxClick(e);
  }, [setUpdatedState, updatedState, onCheckboxClick, checkboxRef]);

  return (
    <Container>
      <CheckSquare
        ref={checkboxRef}
        type="checkbox"
        isChecked={updatedState}
        defaultChecked={updatedState}
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
      {children}
    </Container>
  );
};
