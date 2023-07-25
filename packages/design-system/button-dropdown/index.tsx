import { useCallback, useState, useRef, FocusEvent } from "react";
import { Icon } from "../icon";
import { Typography } from "../typography";
import {
  OptionsContainer,
  OutterContainer,
  OptionsInnerContainer,
  Option
} from "./styled";
import { Props } from "./types";

export const ButtonDropdown = ({
  children,
  options,
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
      onBlur={onBlurCallback}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
      ref={outterContainerRef}
    >
      {children}
      {isOpen && (
        <OptionsContainer>
          <OptionsInnerContainer>
            {options.map((option, index) => (
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
