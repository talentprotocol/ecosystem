import { ReactElement } from "react";

export interface Props {
  children: ReactElement | ReactElement[];
  forceDarktheme?: boolean;
}

export interface ThemeInterface {
  isDarkTheme: boolean;
}
