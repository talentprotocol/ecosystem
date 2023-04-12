import { ReactElement } from "react";

export interface Props {
  children: ReactElement | ReactElement[];
  forceDarktheme?: boolean;
  forceWhiteTheme?: boolean;
}

export interface ThemeInterface {
  isDarkTheme: boolean;
}
