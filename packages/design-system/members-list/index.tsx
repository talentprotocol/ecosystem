import { Avatar } from "../avatar";
import { Typography } from "../typography";
import {
  AvatarsHorizontalStack,
  MembersContainer,
  MembersCounterContainer,
  SmallAvatarContainer,
} from "./styled";
import { Props } from "./types";

export const MembersList = ({ membersImages, totalMembers }: Props) => (
  <MembersContainer>
    <AvatarsHorizontalStack>
      {membersImages.slice(0, 4).map((memberImage) => (
        <SmallAvatarContainer key={memberImage}>
          <Avatar size="sm" url={memberImage} />
        </SmallAvatarContainer>
      ))}
    </AvatarsHorizontalStack>
    <MembersCounterContainer>
      <Typography specs={{ variant: "p1", type: "medium" }} color="primary01">
        {totalMembers.toLocaleString()}
      </Typography>
      <Typography specs={{ variant: "p1", type: "regular" }} color="primary04">
        members
      </Typography>
    </MembersCounterContainer>
  </MembersContainer>
);
