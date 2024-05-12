const Result = ({ result }) => {
  return <h3>{result ? `Resultado: ${result}` : 'Aguardando resultado...'}</h3>;
};

export default Result;
