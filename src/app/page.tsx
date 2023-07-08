"use client";

import { useState } from "react";

const Page = () => {
  
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {    
    setCount(count + 2);
    const newCount = count;
    console.log('o número novo é: ', newCount);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center mt-8">      
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-700 rounded p-3">+2</button>
    </div>
  );
}

export default Page;
