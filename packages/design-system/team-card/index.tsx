import { Avatar } from "../avatar";
import { Icon } from "../icon";
import { Tag } from "../tag";
import { Typography } from "../typography";
import {
  AvatarContainer,
  AvatarsHorizontalStack,
  Banner,
  Container,
  DataColumn,
  DataRow,
  DescriptionContainer,
  MembersContainer,
  MembersCounterContainer,
  SmallAvatarContainer,
  TagsContainer,
} from "./styled";
import { Props } from "./types";

export const TeamCard = ({
  bannerImage,
  profileImage,
  name,
  description,
  tags = [],
  membersImages,
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
        <Icon name="verified-2" color="primary" />
      </DataRow>
      <DescriptionContainer>
        <Typography
          specs={{ variant: "p2", type: "regular" }}
          color="primary03"
        >
          {description}
        </Typography>
      </DescriptionContainer>
      <TagsContainer>
        {tags.map((tag) => (
          <Tag
            key={tag}
            name={tag}
            size="small"
            backgroundColor="primaryTint02"
            textColor="primary"
          />
        ))}
      </TagsContainer>
      <MembersContainer>
        <AvatarsHorizontalStack>
          {membersImages.slice(0, 3).map((memberImage) => (
            <SmallAvatarContainer key={memberImage}>
              <Avatar size="sm" url={memberImage} />
            </SmallAvatarContainer>
          ))}
        </AvatarsHorizontalStack>
        <MembersCounterContainer>
          <Typography
            specs={{ variant: "p1", type: "medium" }}
            color="primary01"
          >
            {membersImages.length.toString()}
          </Typography>
          <Typography
            specs={{ variant: "p1", type: "regular" }}
            color="primary03"
          >
            members
          </Typography>
        </MembersCounterContainer>
      </MembersContainer>
    </DataColumn>
  </Container>
);
