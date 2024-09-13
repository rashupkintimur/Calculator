import React, {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import { TTheme } from "../types/TTheme";

interface IThemeContext {
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>;
  theme: TTheme;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

interface IThemeProvider {
  children: ReactNode;
}

const themeStorage = (localStorage.getItem("theme") || "light") as TTheme;

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>(themeStorage);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
