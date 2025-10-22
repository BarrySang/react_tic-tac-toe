// import { useState } from 'react'

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState<(string | null)[][]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);

  const renderGameBoard = () => {
    console.log("rendering game board");
    const newBoard = Array(3)
      .fill(null)
      .map(() => Array(3).fill(null));
    // const newBoard = [
    //  [null, null, null],
    //  [null, null, null],
    //  [null, null, null]
    // ];
    setBoard(newBoard);

    // reset winner
    setWinner(null);
    // reset starting player
    setCurrentPlayer("X");
  };

  // check for win
  const checkWinner = (board: (string | null)[][]): string | null => {
    // Rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        return board[i][0];
      }
    }

    // Columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        return board[0][i];
      }
    }

    // Diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return board[0][0];
    }

    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return board[0][2];
    }

    // No winner
    return null;
  };

  // full board(draw)
  const isBoardFull = (board: (string | null)[][]): boolean => {
    return board.every((row) => row.every((cell) => cell !== null));
  };

  // Called when a cell is clicked
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    // console.log(`Cell ${rowIndex}, ${colIndex}`);
    // end game if winner is found
    if (winner) return;

    // display 'X' in cell when clicked
    // check for filled cell
    if (board[rowIndex][colIndex]) return;

    /**
     * update cell
     */
    // variable with updated cell
    const updatedBoard = board.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? currentPlayer : cell
      )
    );

    setBoard(updatedBoard);

    // Check if this move wins
    const result = checkWinner(updatedBoard);
    if (result) {
      setWinner(result);
      return;
    }

    // Check if draw
    if (isBoardFull(updatedBoard)) {
      setWinner("Draw");
      return;
    }

    // switch turn
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  // display game board when the component loads
  useEffect(() => {
    // render game board
    renderGameBoard();
  }, []);

  return (
    <>
      <div className="app-container">
        <header>TIC TAC TOE</header>

        {!winner && <p>Current Turn: {currentPlayer}</p>}
        {winner && (
          <p>{winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`} 🎉</p>
        )}

        <div className="game-board-container">
          {/* map board to rows and columns */}
          {board.map((row, rowIndex) => (
            // rows

            <div className="row" key={rowIndex}>
              {/* cells */}
              {row.map((cell, colIndex) => (
                <div
                  className="cell"
                  key={colIndex}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {/* {rowIndex}, {colIndex} */}
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>

        {(winner || isBoardFull(board)) && (
          <button onClick={renderGameBoard} className="reset-btn">
            Reset Game
          </button>
        )}
      </div>
    </>
  );
}

export default App;
