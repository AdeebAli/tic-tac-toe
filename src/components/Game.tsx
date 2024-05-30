import { useState } from "react";
import { Board } from "./Board";
import { Board as BoardType } from "../types/board";

export const Game = () => {
  const [xTurn, setXTurn] = useState<boolean>(true);

  const [boardState, setBoardState] = useState<BoardType>(
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
