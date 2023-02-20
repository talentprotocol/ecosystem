import { darkPalette } from "./dark-theme";
import { lightPalette } from "./light-theme";
import { PaletteTokens } from "./types";

export const buildColor = (isDarkTheme = true, token: PaletteTokens) =>
  isDarkTheme ? darkPalette[token] : lightPalette[token];
