import React, { ReactNode } from "react";
import ChessBoard from "./ChessBoard";

interface ChessBoardWrapperProps {
  children: ReactNode;
}

function ChessBoardWrapper({ children }: ChessBoardWrapperProps) {
  return (
    <div className="relative">
      <ChessBoard />
      <div className="absolute inset-0">
        <div className="flex min-h-screen flex-col px-10 md:px-20 pt-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ChessBoardWrapper;
