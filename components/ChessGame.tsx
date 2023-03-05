import React, { useState } from "react";
import Chessboard from "chessboardjsx";
import "tailwindcss/tailwind.css";

const ChessGame: React.FC = () => {

  return (
      <div className="flex ">
      {/* <Chessboard position="start"/> */}
      <img src="chess.png" alt="chess" className="" />
      </div>
  );
};

export default ChessGame;
