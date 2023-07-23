import { useTheme } from "@/contexts/ThemeContext";

type Props = {
  label: string;
  onClick: () => void;
}
export const Button = ({ label, onClick }: Props) => {
  const themeCtx = useTheme();
    
  const handleThemeToggle = () => {
    if(themeCtx) {
      themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark');
    }
  }

  return (
    <button
      className={`border px-4 py-3 rounded-md 
        ${themeCtx?.theme === 'dark' ? 
          'bg-white text-black' :
          'bg-black text-white'
        }
      `}
      onClick={handleThemeToggle}
    >
      {themeCtx?.theme === 'dark' && 'Light Mode'}
      {themeCtx?.theme === 'light' && 'Dark Mode'}
    </button>
  );
}