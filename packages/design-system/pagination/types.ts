export interface PaginationItemObject {
  value: string;
  disabled: boolean;
}

export interface PaginationItemProps {
  selected: boolean;
}

export interface Props {
  totalPages: number;
  selectedPage: number;
  onSelectPage: (page: number) => void;
}
