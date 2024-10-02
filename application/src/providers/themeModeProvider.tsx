import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme: ThemeMode;
  isDarkMode: boolean;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const THEME_KEY = 'noginogi-theme';

export const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.LIGHT);
  const [isMounted, setIsMounted] = useState(false);
  const isDarkMode = useMemo(() => theme === ThemeMode.DARK, [theme]);

  useEffect(() => {
    setIsMounted(true); // 클라이언트에서만 실행
    const storedTheme = Cookies.get(THEME_KEY) as ThemeMode;
    if (storedTheme && [ThemeMode.LIGHT, ThemeMode.DARK].includes(storedTheme)) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      Cookies.set(THEME_KEY, theme);
    }
  }, [theme, isMounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT));
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
