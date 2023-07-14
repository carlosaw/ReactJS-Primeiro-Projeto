import { useEffect } from "react";

export const Square = () => {

  useEffect(() => {
    // Roda quando o componente aparece na tela. (Conecta)
       console.log("CONECTADO");

    // Roda quando o componente some da tela. (Desconecta)
    return () => {
      console.log("desconectado");
    }
  });

  return (
    <div className="
      w-52 h-52
      bg-orange-700
      text-white
    ">
      Texto
    </div>
  );
}
