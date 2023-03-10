import { Icon } from "../icon";
import { Typography } from "../typography";
import { Container, IconContainer, InnerContainer, TitleRow } from "./styled";
import { Props } from "./types";

export const Modal = ({ title, isOpen, children, closeModal }: Props) => {
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

export * from "./hooks/use-modal";
