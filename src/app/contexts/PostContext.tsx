import { Post } from "@/types/Post";
import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { PostActions, postReducer } from "../reducers/postReducer";

type PostContextType = {
  posts: Post[];
  dispatch: Dispatch<PostActions>;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(postReducer, []);
 
  return (
    <PostContext.Provider value={{ posts, dispatch }}>{children}</PostContext.Provider>
  );
}