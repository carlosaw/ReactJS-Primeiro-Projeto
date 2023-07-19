import { Post } from "@/types/Post";
import { ReactNode, createContext, useReducer } from "react";
import { postReducer } from "../reducers/postReducer";

type PostContextType = {
  posts: Post[];
  addPost: (title: string, body: string) => void; 
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(postReducer, []);
 
  // Função adicionar post
  const addPost = (title: string, body: string) => {
    dispatch({ type: 'add', payload: { title, body }});
    //setPosts([ ...posts, { id: posts.length, title, body } ]);
  }

  return (
    <PostContext.Provider value={{ posts, addPost }}>{children}</PostContext.Provider>
  );
}