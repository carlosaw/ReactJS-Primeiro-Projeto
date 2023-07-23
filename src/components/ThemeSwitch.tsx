import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "./Button";

export const ThemeSwitch = () => {
  const themeCtx = useTheme();

  const handleThemeToggle = () => {
    if(themeCtx) {
      themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark');
    }
  }

  return (
    <div
      className="text-2xl fixed top-0 left-0 right-0 p-20 text-right cursor-pointer"
      onClick={handleThemeToggle}
    >
      {themeCtx?.theme === 'dark' && 'Mudar para Light'}
      {themeCtx?.theme === 'light' && 'Mudar para Dark'}
    </div>
  );
}