import { Person } from "@/components/Person";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3> Outro texto </h3>

      <Person
        name="Elon Musk"
        avatar="https://th.bing.com/th/id/R.c6469f1d88e01b82143a7ef55b03c962?rik=l2AxbAszkhOtIQ&pid=ImgRaw&r=0"
        roles={['CEO da Tesla', 'CEO da SpaceX']}
      />

      <Person
        name="Jeff Bezos"
        avatar="https://th.bing.com/th/id/OIP.l6J460k_kWi0PJN1IU9C5AHaE8?pid=ImgDet&rs=1"
        roles={['CEO da Amazon', 'CEO da Blue Origin']}
      />

    </div>
  );
}

export default Page;