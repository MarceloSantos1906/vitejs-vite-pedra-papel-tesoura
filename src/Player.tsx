const Player = ({ choice }) => {
  return <h2>{choice ? `Você escolheu: ${choice}` : 'Escolha sua jogada!'}</h2>;
};

export default Player;
