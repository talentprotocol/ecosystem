import { useCallback, useState, useRef, FocusEvent } from "react";
import { Icon } from "../icon";
import {
  OptionsContainer,
  OutterContainer,
  OptionsInnerContainer,
  Option,
  OptionLabel,
} from "./styled";
import { Props } from "./types";

export const ButtonDropdown = ({
  children,
  options,
  onBlur = () => {},
  selectOption,
  opensOnRight = false,
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
      onBlur={onBlurCallback}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
      ref={outterContainerRef}
    >
      {children}
      {isOpen && (
        <OptionsContainer opensOnRight={opensOnRight}>
          <OptionsInnerContainer>
            {options.map((option) => (
              <Option
                tabIndex={0}
                key={option.value}
                onClick={() => {
                  setIsOpen(false);
                  selectOption(option);
                }}
              >
                {option.iconName && (
                  <Icon name={option.iconName} color={option.iconColor} />
                )}
                <OptionLabel
                  specs={{ variant: "label2", type: "medium" }}
                  color="primary01"
                >
                  {option.value}
                </OptionLabel>
              </Option>
            ))}
          </OptionsInnerContainer>
        </OptionsContainer>
      )}
    </OutterContainer>
  );
};
