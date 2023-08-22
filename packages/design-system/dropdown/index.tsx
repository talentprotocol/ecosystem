import { useCallback, useState, useRef, FocusEvent } from "react";
import { Icon } from "../icon";
import { Typography } from "../typography";
import {
  Container,
  OptionsContainer,
  OutterContainer,
  OptionsInnerContainer,
  Option,
  SelectedOptionContainer,
} from "./styled";
import { Props } from "./types";

export const Dropdown = ({
  options,
  placeholder = "Dropdown",
  selectedOption = {
    value: "",
  },
  onBlur = () => {},
  selectOption,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const outterContainerRef = useRef<HTMLDivElement>(null);
  const onBlurCallback = useCallback(
    (e: FocusEvent<HTMLDivElement>) => {
      if (outterContainerRef.current) {
        if (!outterContainerRef.current.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
          onBlur();
        }
      }
    },
    [onBlur, outterContainerRef]
  );
  return (
    <OutterContainer
      onFocus={() => setIsOpen(true)}
      onBlur={onBlurCallback}
      tabIndex={0}
      ref={outterContainerRef}
    >
      <Container>
        {!selectedOption.value && (
          <Typography
            specs={{ variant: "label2", type: "regular" }}
            color="primary04"
          >
            {placeholder}
          </Typography>
        )}
        {!!selectedOption.value && (
          <SelectedOptionContainer>
            {selectedOption.iconName && (
              <Icon
                name={selectedOption.iconName}
                color={selectedOption.iconColor}
                size={16}
              />
            )}
            <Typography
              specs={{ variant: "label2", type: "regular" }}
              color="primary01"
            >
              {selectedOption.value}
            </Typography>
          </SelectedOptionContainer>
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
                key={option.value}
                onClick={() => {
                  setIsOpen(false);
                  selectOption(option);
                }}
                {...option}
              >
                {option.iconName && (
                  <Icon name={option.iconName} color={option.isDisabled ? "primaryDisable" : option.iconColor} />
                )}
                <Typography
                  specs={{ variant: "label2", type: "medium" }}
                  color="primary01"
                >
                  {option.value}
                </Typography>
              </Option>
            ))}
          </OptionsInnerContainer>
        </OptionsContainer>
      )}
    </OutterContainer>
  );
};
