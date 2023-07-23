import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = 'themeContextKey';

//CONTEXTO
type ThemeContext = {
  theme: string;
  setTheme: (newTheme: string) => void;
}
export const ThemeContext = createContext<ThemeContext | null>(null);

// PROVIDER
export const ThemeProvider = ({ children }: {children: ReactNode}) => {
  const [theme, setTheme] = useState(// Pega do localStorage
    localStorage.getItem(STORAGE_KEY) || 'dark'
  );
  // Seta a modificação no localStorage. Persistir
  useEffect(() => {// Muda no localStorage
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
}

// HOOK
export const useTheme = () => useContext(ThemeContext);