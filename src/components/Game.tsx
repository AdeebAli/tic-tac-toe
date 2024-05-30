import { useState } from "react";
import { Board } from "./Board";
import { Piece } from "../types/piece";

export const Game = () => {
  const [xTurn, setXTurn] = useState<boolean>(true);

  const [boardState, setBoardState] = useState<(Piece | null)[][]>(
    Array(3).fill(Array(3).fill(null))
  );

  return (
    <Board
      boardState={boardState}
      setBoardState={setBoardState}
      xTurn={xTurn}
      setXTurn={setXTurn}
    />
  );
};
