export interface StyledBannerProps {
  bannerImage?: string;
}

export interface Props {
  profileImage?: string;
  bannerImage?: string;
  name: string;
  isVerified?: boolean;
  occupation: string;
  ticker?: string;
  children: React.ReactNode;
  to: string;
}
