"use client";

import { listReducer } from "./reducers/listReducer";
import { Item } from '@/types/Item';
import { useReducer, useState } from "react";

const Page = () => {
  
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');

  const handleAddButton = () => {
    if(addField.trim() === '') return false;
    // Adionar um item
    dispatch({
      type:'add',
      payload: {
        text: addField.trim()
      }
    });
    setAddField('');// Limpa o input após adição.
  }
  
  return (    
    <div className="container mx-auto">      
      <h1 className="text-center text-4xl mt-4">Lista de Tarefas</h1>
      <div className="bg-gray-900 max-w-2xl mx-auto flex rounded-md border border-gray-400 p-4 my-4">
        <input
          type="text" 
          className="flex-1 rounded-md border border-white bg-transparent p-3 text-white outline-none"
          placeholder="Digite um item"
          value={addField}
          onChange={e => setAddField(e.target.value)}
        />
        <button
          className="p-4"
          onClick={handleAddButton}
        >ADICIONAR</button>
      </div>
      <ul className="max-w-2xl m-auto">
        {list.map(item => (
          <li 
            key={item.id}
            className="flex p-3 my-3 border border-gray-700"
          >
            <input 
              type="checkbox"
              className="w-10 h-10"
            />
            <p className="flex-1 text-lg">{item.text}</p>
            <button className="mx-4 text-white hover:text-gray-500">Editar</button>
            <button className="mx-4 text-white hover:text-gray-500">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );   
}

export default Page;