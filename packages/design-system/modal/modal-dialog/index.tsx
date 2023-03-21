import { useEffect } from "react";
import { Icon } from "../../icon";
import { Typography } from "../../typography";
import { Container, IconContainer, InnerContainer, TitleRow } from "./styled";
import { Props } from "./types";

export const ModalDialog = ({ title, isOpen, children, closeModal }: Props) => {
  useEffect(() => {
    if (typeof window !== "undefined" && isOpen) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [isOpen]);
  return isOpen ? (
    <Container>
      <InnerContainer>
        <TitleRow>
          <Typography specs={{ variant: "h5", type: "bold" }} color="primary01">
            {title}
          </Typography>
          <IconContainer onClick={closeModal}>
            <Icon name="remove" color="primary01" />
          </IconContainer>
        </TitleRow>
        {children}
      </InnerContainer>
    </Container>
  ) : (
    <></>
  );
};
