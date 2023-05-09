import { Avatar } from "../avatar";
import { Icon } from "../icon";
import { MembersList } from "../members-list";
import { Tag } from "../tag";
import { Typography } from "../typography";
import {
  AvatarContainer,
  Banner,
  Container,
  DataColumn,
  DataRow,
  DescriptionContainer,
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
  totalMembers,
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
            label={tag}
            size="small"
            backgroundColor="primaryTint02"
            textColor="primary"
          />
        ))}
      </TagsContainer>
      <MembersList membersImages={membersImages} totalMembers={totalMembers} />
    </DataColumn>
  </Container>
);
