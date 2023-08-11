export interface PaginationItemObject {
  value: string;
  disabled: boolean;
  index: number;
}

export interface PaginationItemProps {
  selected: boolean;
  disabled: boolean;
}

export interface Props {
  totalPages: number;
  initialSelectedPage: number;
  onSelectPage: (page: PaginationItemObject) => void;
}
