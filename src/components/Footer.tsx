import { PostContext } from "@/app/contexts/PostContext";
import { useContext } from "react";

export const Footer = () => {
  const postCtx = useContext(PostContext);

  return (
    <footer className="flex justify-center flex-col items-center mt-6">
      Total de posts: {postCtx?.posts.length}
    </footer>  
  );
}