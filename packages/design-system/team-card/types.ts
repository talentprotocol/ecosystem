export interface StyledBannerProps {
  bannerImage?: string;
}

export interface Props {
  profileImage?: string;
  bannerImage?: string;
  name: string;
  description: string;
  tags?: string[];
  membersImages: string[];
  totalMembers: number;
  to: string;
}
