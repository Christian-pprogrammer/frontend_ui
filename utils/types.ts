export interface game{
    gameId: number;
    limit:number;
    winner:string;
    amountWon:{
        amount:number;
        currency:string;
    }
    dateEnded:string;
    isCompleted:boolean;
    numberOfPlayers:number;
    entryFee:{
        amount:number;
        currency:string;
    }
}
