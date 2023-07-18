"use client";

const Subtitle = ({ label }: { label: string}) => {
  return (
    <p>{label}</p>
  );
}

const Title = () => {
  const ctx = 'Título';
  return (
    <h1 className="text-4xl font-bold my-4">{ctx}</h1>
  );
}

const Header = () => {
  return (
    <header>
      <Title />
      <Subtitle />
    </header>
  );
}

const Page = () => {
  const pageInfo = {
    title: 'Título maroto',
    subtitle: 'Subtitulo muito legal e bem feito'
  }
  
  return (    
    <div className="container mx-auto">
      <Contexto pageInfo={pageInfo}>
        <Header />
      </Contexto>
      
    </div>  
  );   
}

export default Page;