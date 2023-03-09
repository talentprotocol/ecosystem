import { useCallback, useState, useRef, FocusEvent } from "react";
import { Icon } from "../icon";
import { Typography } from "../typography";
import {
  Container,
  OptionsContainer,
  OutterContainer,
  OptionsInnerContainer,
  Option,
} from "./styled";
import { Props } from "./types";

export const Dropdown = ({
  options,
  placeholder = "Dropdown",
  value = "",
  onBlur = () => {},
  selectValue,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const outterContainerRef = useRef<HTMLDivElement>(null);
  const onBlurCallback = useCallback((e: FocusEvent<HTMLDivElement>) => {
    if (outterContainerRef.current) {
      if (!outterContainerRef.current.contains(e.relatedTarget as Node)) {
        setIsOpen(false);
        onBlur();
      }
    }
  }, [onBlur, outterContainerRef]);
  return (
    <OutterContainer
      onFocus={() => setIsOpen(true)}
      onBlur={onBlurCallback}
      tabIndex={0}
      ref={outterContainerRef}
    >
      <Container>
        {!value && (
          <Typography
            specs={{ variant: "label2", type: "regular" }}
            color="primary04"
          >
            {placeholder}
          </Typography>
        )}
        {!!value && (
          <Typography
            specs={{ variant: "label2", type: "regular" }}
            color="primary01"
          >
            {value}
          </Typography>
        )}
        <Icon
          name={isOpen ? "order-by-active" : "order-by"}
          color="primary03"
        />
      </Container>
      {isOpen && (
        <OptionsContainer>
          <OptionsInnerContainer>
            {options.map((option) => (
              <Option
                tabIndex={0}
                key={option}
                onClick={() => {
                  setIsOpen(false);
                  selectValue(option);
                }}
              >
                <Typography
                  specs={{ variant: "label2", type: "medium" }}
                  color="primary01"
                >
                  {option}
                </Typography>
              </Option>
            ))}
          </OptionsInnerContainer>
        </OptionsContainer>
      )}
    </OutterContainer>
  );
};
