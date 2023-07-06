import { ReactNode } from "react";

type Props = {
  phrase: string;
  author?: string;
}

export const Card = ({ phrase, author }: Props) => {
  
    return (
      <div className="bg-blue-100 w-1/2 border-2 border-red-600 p-3 text-3xl italic">
        <h3 className="text-red-800 text-3xl font-bold italic">"{ phrase }"</h3>
        <p className="text-blue-600 text-right text-sm">* {author ?? 'Autor Desconhecido'}</p>
      </div>
    );
  
  
}