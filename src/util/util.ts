import { Board } from "../types/board";
import { Piece } from "../types/piece";

const allSolutions = [
  [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ],
];

export const translateBoardStateOnMove = ({
  board,
  currentPiece,
}: {
  board: Board;
  currentPiece: Piece;
}): number[][] => {
  return board.map((row) => {
    return row.map((cell) => {
      return cell == currentPiece ? 1 : 0;
    });
  });
};

export const checkIfGameWon = ({
  currentBoard,
}: {
  currentBoard: number[][];
}) => {
  const matchesSolution = allSolutions.map((solution) => {
    for (let i = 0; i < solution.length; i++) {
      for (let j = 0; j < solution[i].length; j++) {
        if (solution[i][j] === 1 && currentBoard[i][j] !== 1) {
          return false; //break here because we know there's no way it can match this solution set. still check the other solutions
        }
      }
    }
    return true;
  });

  return matchesSolution.includes(true);
};

export const checkIfGameDraw = ({
  currentBoard,
  currentPiece,
}: {
  currentBoard: Board;
  currentPiece: Piece;
}) => {
  const flattenedBoard = currentBoard.flat();
  const translatedBoard = translateBoardStateOnMove({
    board: currentBoard,
    currentPiece,
  });
  const isWinningBoard = checkIfGameWon({ currentBoard: translatedBoard });
  if (isWinningBoard) {
    return false;
  } else {
    return !flattenedBoard.includes(null);
  }
};
