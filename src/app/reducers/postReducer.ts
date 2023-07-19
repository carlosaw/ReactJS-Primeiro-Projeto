import { Post } from "@/types/Post";

type AddAction = {
  type: 'add';
  payload: {
    title: string;
    body: string;
  };
}
type EditTextAction = {
  type: 'editText';
  payload: {
    id: number;
    newTitle: string;
    newBody: string;
  }
}
type RemoveAction = {
  type: 'remove';
  payload: {
    id: number;
  }
}

export type PostActions = AddAction | EditTextAction | RemoveAction;

export const postReducer = (posts: Post[], action: PostActions) => {
  switch (action.type) {
    case 'add':
      return [...posts, {
        id: posts.length,
        title: action.payload.title,
        body: action.payload.body
      }]
    case 'editText':
      return posts.map(p => {
        if (p.id === action.payload.id) {
          p.title = action.payload.newTitle;
          p.body = action.payload.newBody;
        }
        return p;
      });
    case 'remove':
      return posts.filter(p => p.id !== action.payload.id);
    default:
      return posts;
  }
}