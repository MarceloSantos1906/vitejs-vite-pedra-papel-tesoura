const Computer = ({ choice }) => {
  return (
    <h2>{choice ? `Computer escolheu: ${choice}` : 'Escolha sua jogada!'}</h2>
  );
};

export default Computer;
