import { CountContext } from "@/contexts/CountContext";
import { useContext } from "react";

export const OnLineUsers = () => {
  const countCtx = useContext(CountContext);

  const handleBanAll = () => {
    countCtx?.setOnlineCount(0);
  }

  return (
    <>
      <p>Online: {countCtx?.onlineCount}</p>
      <button
        className="p-3 border border-white rounded bg-blue-700"
        onClick={handleBanAll}
      >Banir todo mundo</button>
    </>
      
  );
}