type Props = {
  label: string;
  onClick: () => void;
}

export const CustomButton = ({ label, onClick }: Props) => {
  const handleButtonClick = () => {
    // alguma coisa
    onClick();
    // depois alguma
  }
  return (
    <button onClick={handleButtonClick} className="p-3 text-white bg-blue-700 rounded-md mr-8">{ label }</button>
  );
}

// type Props = {
//   label: string;
//   onClick: () => void;
// }

// export const CustomButton = ({ label, onClick }: Props) => {
//   return (
//     <button onClick={onClick} className="p-3 text-white bg-blue-700 rounded-md mr-8">{ label }</button>
//   );
// }