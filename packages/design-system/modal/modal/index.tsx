import { useEffect } from "react";
import { Icon } from "../../icon";
import { Typography } from "../../typography";
import { ChildrenContainer, Container, IconContainer, InnerContainer, TitleRow } from "./styled";
import { Props } from "./types";

export const Modal = ({ title, isOpen, children, closeModal, footer }: Props) => {
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
          <IconContainer onClick={closeModal}>
            <Icon name="arrow" color="primary01" />
          </IconContainer>
          <Typography specs={{ variant: "h5", type: "bold" }} color="primary01">
            {title}
          </Typography>
        </TitleRow>
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
        {footer}
      </InnerContainer>
    </Container>
  ) : (
    <></>
  );
};
