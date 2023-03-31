import { createContext, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Props, ThemeInterface } from "./types";

let inMemoryTheme: ThemeInterface = {
  isDarkTheme: false,
};

let memoizedToggleThemeCallback = () => {};
let didCheckThemeRun = false;

const checkTheme = (forceDarktheme = false) => {
  didCheckThemeRun = true;
  if (forceDarktheme) {
    inMemoryTheme.isDarkTheme = true;
    return inMemoryTheme;
  }
  // @ts-ignore
  if (typeof window !== "undefined") {
    // @ts-ignore
    const hasBodyDarkClassname = document.body.className
      .split(" ")
      // @ts-ignore
      .some((name) => name === "dark-body");
    if (!hasBodyDarkClassname) {
      return inMemoryTheme;
    }
    inMemoryTheme.isDarkTheme = true;
    return inMemoryTheme;
  } else {
    return inMemoryTheme;
  }
};

export const getTheme = () => (didCheckThemeRun ? inMemoryTheme : checkTheme());

export const TalentThemeUpdateContext = createContext(() => {
  console.error("Attempting to update theme outside provider");
});

export const TalentThemeProvider = ({ children, forceDarktheme }: Props) => {
  const [theme, setTheme] = useState<ThemeInterface>(() =>
    checkTheme(forceDarktheme)
  );
  const toggleTheme = useCallback(() => {
    const updatedTheme: ThemeInterface = {
      ...theme,
      isDarkTheme: !theme.isDarkTheme,
    };
    inMemoryTheme = updatedTheme;
    setTheme(updatedTheme);
  }, [theme]);
  useEffect(() => {
    memoizedToggleThemeCallback = toggleTheme;
  }, [toggleTheme]);
  return (
    <TalentThemeUpdateContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TalentThemeUpdateContext.Provider>
  );
};
