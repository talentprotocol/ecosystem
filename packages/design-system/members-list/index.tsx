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
          <Avatar size="xs" url={memberImage} />
        </SmallAvatarContainer>
      ))}
    </AvatarsHorizontalStack>
    {!!totalMembers && (
      <MembersCounterContainer>
        <Typography
          specs={{ variant: "label3", type: "medium" }}
          color="primary02"
        >
          {totalMembers.toLocaleString()}
        </Typography>
        <Typography
          specs={{ variant: "label3", type: "medium" }}
          color="primary02"
        >
          members
        </Typography>
      </MembersCounterContainer>
    )}
  </MembersContainer>
);
