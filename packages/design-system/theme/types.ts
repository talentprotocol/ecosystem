import { ReactElement } from "react";

export interface Props {
  children: ReactElement | ReactElement[];
}

export interface ThemeInterface {
  isDarkTheme: boolean;
}
