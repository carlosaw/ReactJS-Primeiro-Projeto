import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;

}
export const Container = ({ children }: Props) => {
  const themeCtx = useTheme();  
  return (
    <div
      className={`w-full h-screen
        ${themeCtx?.theme === 'dark' ?
          'bg-black text-white' :
          'bg-white text-black'
        }
      `}
    >
      <div className="p-20">
        TEMA: {themeCtx?.theme}
        {children}
      </div>      
    </div>
  );
}