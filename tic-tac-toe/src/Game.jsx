import React, { useState } from 'react'
import Square from './Square'
import './App.css'

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const winner = calculateWinner(board)

  function handleClick(index) {
    // If square is already taken or there's a winner, do nothing
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    setBoard(newBoard)
    setIsXNext(!isXNext)
  }

  function resetGame() {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
  }

  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXNext ? 'X' : 'O'}`

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button onClick={resetGame}>Reset</button>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],  // rows
    [0,3,6], [1,4,7], [2,5,8],  // cols
    [0,4,8], [2,4,6]            // diagonals
  ]
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Game
