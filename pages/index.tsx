import React, { useState, useEffect } from "react";
import ChessBoardWrapper from "../components/ChessBoardWrapper";
import ChessGameIcon from "../components/ChessGameIcon";
import Table from "../components/Table";
import { game } from "../utils/types";
import { MdAdd, MdDateRange } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import type { NextPage } from "next";
import CreateNewRoom from "../components/CreateNewRoom";
import withAuth from "../components/WithAuth";
import { getCookie } from "../utils/manage_cookies";
import CryptoStatus from "../components/CryptoStatus";

function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const [shownGaames, setShownGames] = useState("availableGames");

  const games: game[] = [
    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103429",
      amountWon: {
        amount: 0.003,
        currency: "ETH",
      },
      dateEnded: "04/04/2022",
      isCompleted: true,
      entryFee: {
        amount: 0.003,
        currency: "ETH",
      },
      numberOfPlayers: 20,
    },
    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103429",
      amountWon: {
        amount: 0.003,
        currency: "ETH",
      },
      dateEnded: "04/04/2022",
      isCompleted: false,
      entryFee: {
        amount: 0.003,
        currency: "ETH",
      },
      numberOfPlayers: 20,
    },
    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103429",
      amountWon: {
        amount: 0.003,
        currency: "ETH",
      },
      dateEnded: "04/04/2022",
      isCompleted: true,
      entryFee: {
        amount: 0.003,
        currency: "ETH",
      },
      numberOfPlayers: 20,
    },
    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103429",
      amountWon: {
        amount: 0.003,
        currency: "ETH",
      },
      dateEnded: "04/04/2022",
      isCompleted: true,
      entryFee: {
        amount: 0.003,
        currency: "ETH",
      },
      numberOfPlayers: 20,
    },

    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103429",
      amountWon: {
        amount: 0.003,
        currency: "ETH",
      },
      dateEnded: "04/04/2022",
      isCompleted: false,
      entryFee: {
        amount: 0.003,
        currency: "ETH",
      },
      numberOfPlayers: 20,
    },
  ];
  const tableHead: string[] = [
    "GAME ID",
    "LIMIT",
    "ENTRY FEE",
    "NO. OF PLAYERS",
    "DATE CREATED",
    "",
  ];
 
  return (
    <ChessBoardWrapper>
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-row justify-between">
          <ChessGameIcon />
       <CryptoStatus />
        </div>
        <div className="flex-row-reverse space-x-reverse space-x-2 flex w-full mt-10 h-fit ">
          <CreateNewRoom isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="flex flex-row px-4 py-2 text-sm md:text-xl  border border-gray-400 space-x-1.5 rounded-md">
            <MdDateRange className="text-gray-700 mt-1" />
            <p className="w-fit text-black ">MAY 18 - MAY 24</p>
            <BsChevronDown className="text-gray-700 mt-1" />
          </div>
        </div>
        <div className="flex flex-row mt-10 mb-2 space-x-4">
          <button
            onClick={() => setShownGames("availableGames")}
            className={` flex pb-1.5 ${
              shownGaames === "availableGames" &&
              "border-black  border-x-0 border-t-0 border-b-2 "
            }`}
          >
            Available Games
          </button>
          <button
            onClick={() => setShownGames("completedGames")}
            className={`flex pb-1.5 ${
              shownGaames !== "availableGames" &&
              "border-black  border-x-0 border-t-0 border-b-2 "
            }`}
          >
            Completed Games
          </button>
        </div>
        <Table
          tableHead={tableHead}
          games={
            shownGaames === "availableGames"
              ? games.filter((game) => game.isCompleted)
              : games.filter((game) => !game.isCompleted)
          }
        />
      </div>
    </ChessBoardWrapper>
  );
}

export default withAuth(Home);
