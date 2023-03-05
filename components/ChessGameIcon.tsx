import React from "react";
import Image from "next/image";
interface ChessGameIconProps {
  darkScreen?: boolean
}
function ChessGameIcon({darkScreen}:ChessGameIconProps) {
  return (
    <div className={`flex flex-row space-x-2 ${darkScreen && "text-white"}`}>
      <h4 className="text-lg md:text-xl mt-1.5 font-bold">CHESS</h4>
      <Image src="/chessIcon.png" alt="ChessIcon" width={35} height={35} />
      <h4 className="text-lg md:text-xl mt-1.5 font-bold">GAMES</h4>
    </div>
  );
}

export default ChessGameIcon;
