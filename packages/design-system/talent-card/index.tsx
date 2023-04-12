import { Children } from "react";
import { Avatar } from "../avatar";
import { Icon } from "../icon";
import { Tag } from "../tag";
import { Typography } from "../typography";
import {
  AvatarContainer,
  Banner,
  CallToActionContainer,
  Container,
  DataColumn,
  DataRow,
  OccupationContainer,
} from "./styled";
import { Props } from "./types";

export const TalentCard = ({
  bannerImage,
  profileImage,
  name,
  isVerified = false,
  ticker = "",
  occupation,
  children,
  to,
}: Props) => (
  <Container href={to}>
    <Banner bannerImage={bannerImage}>
      <AvatarContainer>
        <Avatar size="lg" url={profileImage} />
      </AvatarContainer>
    </Banner>
    <DataColumn>
      <DataRow>
        <Typography specs={{ variant: "p1", type: "medium" }} color="primary01">
          {name}
        </Typography>
        {isVerified && <Icon name="verified-2" color="primary" />}
      </DataRow>
      <OccupationContainer>
        <Typography
          specs={{ variant: "p2", type: "regular" }}
          color="primary03"
        >
          {!!ticker && <b>{`$${ticker}`}</b>} {occupation}
        </Typography>
      </OccupationContainer>
      <CallToActionContainer>{children}</CallToActionContainer>
    </DataColumn>
  </Container>
);
