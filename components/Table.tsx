import { useRouter } from 'next/router';
import React from 'react';
import games from '../pages/games';
import { game } from '../utils/types';

interface TableProps{
    games:game[],
    tableHead:string[]
}
const Table = ({games,tableHead}:TableProps) => {
  const router=useRouter()

  return (
    <div className="overflow-x-auto bg-white p-5 rounded-md ">
      <table className="w-full ">
        <thead>
          <tr className="" >
            {
                tableHead.map((th,i)=>(
                    <th id={ `${th}+${i}`} className="px-5 py-2 text-left text-gray-500">{th}</th>
                ))
            }

          </tr>
        </thead>
        <tbody>
            {
                games.map(game=>(
                    <tr id={`${game.gameId}${game.winner}${game.dateEnded}`} className="border-b border-gray-100 ">
                    <td className="px-5 py-2">{game.gameId}</td>
                    <td className="px-5 py-2">{game.limit}</td>
                    <td className="px-5 py-2">{game.isCompleted? game.winner:game.entryFee.amount} {!game.isCompleted && game.entryFee.currency}</td>
                    <td className="px-5 py-2">{game.isCompleted? game.amountWon.amount: game.numberOfPlayers} {game.isCompleted && game.amountWon.currency}</td>
                    <td className="px-5 py-2">{game.dateEnded}</td>
                    <td className="px-5 py-2 flex justify-end space-x-2">
                      <button onClick={()=>router.push("/joined_game")} className="mr-2 bg-[#BFBFBF] hover:bg-gray-600 text-white text-sm  min-w-[120px] items-center justify-center py-2 px-5 rounded">Request to join</button>
                      <button className="border-[#438FFE] border min-w-[120px] items-center justify-center flex hover:bg-[#438FFE] text-[#438FFE] hover:text-white text-sm  py-2 px-5 rounded">Spectate</button>
                    </td>
                  </tr>
                ))
            }
      
     
     
        </tbody>
      </table>
    </div>
  );
};

export default Table;
