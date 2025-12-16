/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./constans";
import { checkEndWinner, checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { Turn } from "./components/Turn";

function App() {
  //estados para la manipulacion del juego
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurnt] = useState(TURNS.X);
  const [winner, setWinnner] = useState(null); // null es empate

  //funciones flecha dependiendo de la accion

  const updateBoard = (index) => {
    //valdiacion para actualizar el board
    if (board[index] || winner) return; //si hay algo en la posision del board o si hay un ganador
    //no deja jugar

    const newBoard = [...board]; //hace cipa
    newBoard[index] = turn; //actulizala posicion con el simbolo
    setBoard(newBoard); //renderiza el nuevo board

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; //cambia de turno
    setTurnt(newTurn); //actuliza el turno

    const newWinner = checkWinnerFrom(newBoard); //verifica si hay un ganador

    if (newWinner) {
      confetti();
      setWinnner(newWinner);
    } else if (checkEndWinner(newBoard)) {
      setWinnner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurnt(TURNS.X);
    setWinnner(null);
  };

  return (
    <main className="board">
      <h1>Tres En Raya</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>

      <section className="game">
        {board.map((squere, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {squere}
            </Square>
          );
        })}
      </section>

      <Turn turn={turn}></Turn>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  );
}

export default App;
