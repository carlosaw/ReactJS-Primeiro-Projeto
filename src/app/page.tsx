"use client";

import { useEffect, useState } from "react";

const Page = () => {
  /*
  1. Definição da FUNÇÃO que vai rodar.
  2. Definição de QUANDO vai rodar.
  3. Definição do que fazer quando o componente sumir/unload.
  */
  const [name, setName] = useState('Carlos');
  const [age, setAge] = useState(90);

  useEffect(() => {
    console.log('Rodou o Effect')
  }, [name,age]);

  // const handlePedroClick = () => {
  //   setName('Pedro');
  // }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <p>Meu nome é: {name} e eu tenho {age} anos.</p>
    <hr/>
      <button className="border border-bg-400 m-3 p-3" onClick={()=>setName('Pedro')}>Mudar para Pedro</button>
      <button className="border border-bg-400 m-3 p-3" onClick={()=>setName('João')}>Mudar para João</button>
      <button className="border border-bg-400 m-3 p-3" onClick={()=>setAge(10)}>Mudar para 10 anos</button>
      <button className="border border-bg-400 m-3 p-3" onClick={()=>setAge(90)}>Mudar para 90 anos</button>     
    </div>
  );    
}

<script src="http://localhost:3000"></script>
export default Page;