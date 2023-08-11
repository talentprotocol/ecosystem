import { Icon } from "../icon";
import { TextLink } from "../text-link";
import { Typography } from "../typography";
import {
  BodyContainer,
  Container,
  CrossIconBox,
  FollowLinkContainer,
  TitleRow,
} from "./styled";
import { Props } from "./types";

export const Alert = ({ heading, body, followUpLink }: Props) => {
  return (
    <Container>
      <TitleRow>
        <Icon name="alert-positive" size={16} color="positive" />
        <Typography specs={{ type: "medium", variant: "p1" }} color="primary01">
          {heading}
        </Typography>
        <CrossIconBox onClick={undefined}>
          <Icon name="remove" size={16} color="primary03" />
        </CrossIconBox>
      </TitleRow>
      <BodyContainer>
        <span />
        <Typography
          specs={{ type: "regular", variant: "p2" }}
          color="primary03"
        >
          {body}
        </Typography>
        <span />
      </BodyContainer>
      {followUpLink && (
        <FollowLinkContainer>
          <span />
          <TextLink
            color="primary"
            size="small"
            href={followUpLink}
            text="Go to link page"
          />
          <span />
        </FollowLinkContainer>
      )}
    </Container>
  );
};
