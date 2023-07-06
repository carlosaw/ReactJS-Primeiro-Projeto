import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mb-3">Lista de Estudantes</h1>
      <StudentTable students={students} />       
    </div>
  );
}

export default Page;