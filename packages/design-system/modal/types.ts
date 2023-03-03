export interface Props {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children: JSX.Element | JSX.Element[];
}
