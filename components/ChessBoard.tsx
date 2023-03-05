import React from 'react';

interface ChessBoardProps {}

function ChessBoard({}: ChessBoardProps) {
  const squareSize = 200;
  const columns = 15;
  const rows = 15;

  

  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${squareSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${squareSize}px)`,
    backgroundColor: 'transparent',
    border: '1px solid black',
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    overflow: 'hidden',
  };

  const squareStyle = {
    width: `${squareSize}px`,
    height: `${squareSize}px`,
  };

  const squares = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const isEvenRow = row % 2 === 0;
      const isEvenCol = col % 2 === 0;
      const isEvenSquare = isEvenRow ? !isEvenCol : isEvenCol;
      const colorClass = isEvenSquare ? 'bg-gray-50' : 'bg-gray-100';

      squares.push(
        <div key={`${row}-${col}`} className={`${colorClass} rounded-sm`} style={squareStyle} />
      );
    }
  }

  return <div style={boardStyle}>{squares}</div>;
}

export default ChessBoard;
