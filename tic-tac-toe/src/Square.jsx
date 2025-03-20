import React from 'react'
import './App.css'

function Square({ value, onSquareClick }) {
  // Choose a color based on the value
  let style = { color: '#333' }
  if (value === 'X') style.color = '#e74c3c' // red for X
  if (value === 'O') style.color = '#3498db' // blue for O

  return (
    <button className="square" onClick={onSquareClick} style={style}>
      {value}
    </button>
  )
}

export default Square
