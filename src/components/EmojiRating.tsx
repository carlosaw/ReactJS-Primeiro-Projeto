type Props = {
  rate: number;
}

export const EmojiRating = ({ rate }: Props) => {
  // Limita entre 0 e 5.
  if(rate > 5) rate = 5;
  if(rate < 0) rate = 0;

// Array de emojis
  const emojis = [ '', '😞', '🙁', '😐', '🙂', '😀' ];

// Arredonda para baixo
  const rateInt = Math.floor(rate);

// Repete a quantidade de estrelas
  const stars = `${emojis[rateInt]}`.repeat(rateInt) + '😶'.repeat(5 - rateInt);

  return (
    <div className="flex items-center text-6xl border-2">
      {/* // Um decimal depois do ponto. */}
      <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
      {/* Exibe as estrelas */}
      <div className="bg-green-700 h-full flex items-center justify-center">{stars}</div>
    </div>
  );
}