export interface StyledTabContainerProps {
  isDisabled: boolean;
}

export interface StyledBottomBarProps {
  isActive: boolean;
}

export interface Props {
  tabList: string[];
  selectedIndex: number;
  noBottomBar?: boolean;
  disabledList?: boolean[];
  onClick?: (I: number) => void;
}
