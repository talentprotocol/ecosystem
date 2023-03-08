import { useState } from "react";
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
  return (
    <OutterContainer>
      <Container
        tabIndex={0}
        onFocus={() => setIsOpen(true)}
        onBlur={() => {
          setTimeout(() => setIsOpen(false), 100);
          onBlur();
        }}
      >
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
                key={option}
                onClick={() => {
                  selectValue(option);
                  setIsOpen(false);
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
