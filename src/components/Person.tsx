// Função para mostrar o dia da semana.
const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat('pt-BR', { weekday: 'long'}).format(today);
}

type Props = {
  name:string;
  avatar?: string;
  roles: string[];
}

export const Person = ({
  name,
  avatar = 'https://png.pngtree.com/png-clipart/20210310/original/pngtree-mens-default-avatar-png-image_5944574.jpg',
  roles
}: Props) => {
  
  const today: Date = new Date();

  return (
    <div className="p-3">    
      <h1>{name} - {getWeekday(today)}</h1>
      <img
        src={avatar}
        alt={name}
        className="w-40"
      />
      <ul>
        <li>{roles[0]}</li>
        <li>{roles[1]}</li>
      </ul>
    </div>
  );
}