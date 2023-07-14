"use client";

import { listReducer } from "./reducers/listReducer";
import { Item } from "@/types/Item";
import { useReducer, useState } from "react";

const Page = () => {
  
  const [list, dispatch] = useReducer(listReducer, []);
  

  return (    
    <div className="">      
      
    </div>
  );    
}

export default Page;