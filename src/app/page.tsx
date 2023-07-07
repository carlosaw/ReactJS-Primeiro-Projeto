"use client";

const Page = () => {

  let count = 0;

  const handleClickButton = () => {
    count++;
    console.log(count);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center mt-8">
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-blue-700 p-3">+1</button>
    </div>
  );
}

export default Page;
