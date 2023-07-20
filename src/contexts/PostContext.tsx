import { Post } from "@/types/Post";
import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { PostActions, postReducer } from "../app/reducers/postReducer";
import { stringify } from "querystring";

const STORAGE_KEY = 'postContextContent';
type PostContextType = {
  posts: Post[];
  dispatch: Dispatch<PostActions>;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(// Processo de persistência.
    postReducer,
      JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );
  // Para salvar a mudança de posts
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts) );
  }, [posts]);
 
  return (
    <PostContext.Provider value={{ posts, dispatch }}>{children}</PostContext.Provider>
  );
}

// Cria o HOOK
export const usePosts = () => useContext(PostContext);