import { getTheme } from "../../theme";
import { ThemeInterface } from "../../theme/types";
import { darkPalette } from "./dark-theme";
import { lightPalette } from "./light-theme";
import { PaletteTokens } from "./types";

export const buildColor = (token: PaletteTokens) => {
  const theme = getTheme() as ThemeInterface;
  return theme.isDarkTheme ? darkPalette[token] : lightPalette[token];
};
