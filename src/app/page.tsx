import { Card } from "@/components/Card";
import { Circle } from "@/components/Circle";
import { Person } from "@/components/Person";
import { Square } from "@/components/Square";

const Page = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3> Outro texto </h3>

      <Card phrase="Alguma frase TOP" author="Coach de milhões" />
        
    </div>
  );
}

export default Page;