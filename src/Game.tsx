import React, { useState } from 'react';
import Player from './Player';
import Computer from './Computer';
import Result from './Result';

const choices = ['pedra', 'papel', 'tesoura'];

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handlePlayerChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult('Empate!');
    } else if (
      (player === 'pedra' && computer === 'tesoura') ||
      (player === 'papel' && computer === 'pedra') ||
      (player === 'tesoura' && computer === 'papel')
    ) {
      setResult('Você ganhou!');
    } else {
      setResult('Você perdeu!');
    }
  };

  return (
    <div>
      <Player choice={playerChoice} />
      <p>VS</p>
      <Computer choice={computerChoice} />
      <Result result={result} />
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;
