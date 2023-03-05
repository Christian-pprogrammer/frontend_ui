import React from "react";
import ChessGame from "../components/ChessGame";
import ChessGameIcon from "../components/ChessGameIcon";
import { FiUser } from "react-icons/fi";
import { BiChevronLeft } from "react-icons/bi";
import CryptoStatus from "../components/CryptoStatus";

function Joined_game() {
  return (
    <div className="min-h-screen min-w-full bg-black flex flex-col px-10 md:px-20 py-4">
      <div className="flex flex-row justify-between">
        <ChessGameIcon darkScreen />
        <div className="flex flex-row">
        
         <CryptoStatus />
        </div>
      </div>
      <div className="flex-1 flex flex-cpl md:flex-row mt-3 pt-6  border-t border-white">
        <div className="w-full md:w-[10%] h-20 flex-row flex space-x-3 ">
          <BiChevronLeft className="text-white mt-0.5 text-2xl" />
          <p className="text-white font-semibold text-xs md:text-base">Go Back</p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-fit  flex flex-col space-y-5">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row space-x-2">
                <div className="flex  bg-[#383531] p-0.5">
                  <FiUser className="text-white text-2xl mt-0.5" />
                </div>
                <p className="text-white">Opponent</p>
              </div>
              <p className="flex  bg-[#383531] p-1.5 rounded-md text-white">
                0:00:00
              </p>
            </div>
            <div className="flex border-8 border-[#383531]">
              <ChessGame />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row space-x-2">
                <div className="flex  bg-[#383531] p-0.5">
                  <FiUser className="text-white text-2xl mt-0.5" />
                </div>
                <p className="text-white">Opponent</p>
              </div>
              <p className="flex  bg-[#383531] p-1.5 rounded-md text-white">
                0:00:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joined_game;
