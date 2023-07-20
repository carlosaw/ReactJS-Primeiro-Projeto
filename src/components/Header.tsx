import { usePosts } from "@/contexts/PostContext";
import { useState } from "react";

export const Header = () => {
  const postCtx = usePosts();

  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');

  const handleAddButton = () => {
    if (titleInput && bodyInput) {
      postCtx?.dispatch({
        type: 'add',
        payload: { title: titleInput, body: bodyInput }
      });
      setTitleInput('');// Limpa o titulo
      setBodyInput('');// Limpa o body
    }
  }
  
  return (
    <header className="container mx-auto flex justify-center flex-col items-center">
      <h1 className="text-3xl mt-4 mb-4">Título da página</h1>

      <div className="w-96 bg-gray-800 flex flex-col gap-3 border border-dotted border-gray-400 p-4">
        <input 
          type="text"
          placeholder="Digite um título"
          className="border border-gray-300 p-2 text-black text-xl"
          value={titleInput}
          onChange={e => setTitleInput(e.target.value)}
        />

        <textarea
          placeholder="Digite um título"
          className="h-24 border border-gray-300 p-2 text-black text-xl"
          value={bodyInput}
          onChange={e => setBodyInput(e.target.value)}
        ></textarea>

        <button 
          className="bg-blue-500 p-3 text-white rounded-md"
          onClick={handleAddButton}
        >Adicionar Post</button>
      </div>
    </header>  
  );
}