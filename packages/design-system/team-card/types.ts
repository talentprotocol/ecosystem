import { Props as TagProps } from "../tag/types";

export interface StyledBannerProps {
  bannerImage?: string;
}

export interface Props {
  profileImage?: string;
  bannerImage?: string;
  name: string;
  description: string;
  tags: TagProps[];
  membersImages: string[];
  totalMembers: number;
  to: string;
}
