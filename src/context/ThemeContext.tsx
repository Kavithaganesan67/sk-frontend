import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ toggleTheme: () => {}, theme: 'system' });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const root = window.document.documentElement;
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => {
      if (theme === 'dark' || (theme === 'system' && darkQuery.matches)) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };
    updateTheme();
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light');
  };

  return <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);