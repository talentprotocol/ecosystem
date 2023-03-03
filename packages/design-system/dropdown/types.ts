export interface Props {
  options: string[];
  placeholder?: string;
  value?: string;
  selectValue: (value: string) => void;
  onBlur?: () => void;
}
