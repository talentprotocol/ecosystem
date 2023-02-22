import { createContext, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Props, ThemeInterface } from "./types";

let inMemoryTheme: ThemeInterface = {
  isDarkTheme: false,
};

let memoizedToggleThemeCallback = () => {};

export const getTheme = () => inMemoryTheme;

export const TalentThemeUpdateContext = createContext(() => {
  console.error("Attempting to update theme outside provider");
});

export const TalentThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeInterface>(() => {
    // @ts-ignore
    if (typeof window !== "undefined") {
      if (
        // @ts-ignore
        document.body.className
          .split(" ")
          // @ts-ignore
          .find((name) => name.includes("body")) === "light"
      )
        return inMemoryTheme;
      inMemoryTheme.isDarkTheme = false;
      return inMemoryTheme;
    } else {
      return inMemoryTheme;
    }
  });
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
