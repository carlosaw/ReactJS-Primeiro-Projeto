import { usePosts } from "@/contexts/PostContext";

export const Footer = () => {
  const postCtx = usePosts();

  return (
    <footer className="flex justify-center flex-col items-center mt-6">
      <p className="text-2xl">Total de posts: {postCtx?.posts.length}</p>
    </footer>  
  );
}