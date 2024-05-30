import { Piece } from "../../types/piece";
import {
  checkIfGameDraw,
  checkIfGameWon,
  translateBoardStateOnMove,
} from "../util";

describe("checkIfGameDraw", () => {
  it("should return true if all spots filled and game not won", () => {
    const currentBoard: (Piece | null)[][] = [
      ["O", "O", "X"],
      ["X", "X", "O"],
      ["O", "X", "X"],
    ];
    expect(checkIfGameDraw({ currentBoard, currentPiece: "O" })).toEqual(true);
  });
  it("should return false if there are empty spaces", () => {
    const currentBoard: (Piece | null)[][] = [
      ["X", null, "O"],
      [null, null, null],
      [null, null, null],
    ];
    expect(checkIfGameDraw({ currentBoard, currentPiece: "O" })).toEqual(false);
  });
  it("should return false if the game has been won", () => {
    const board: (Piece | null)[][] = [
      ["O", "O", "X"],
      ["X", "O", "X"],
      ["X", "X", "O"],
    ];
    expect(checkIfGameDraw({ currentBoard: board, currentPiece: "O" })).toBe(
      false
    );
  });
});

describe("checkIfGameWon", () => {
  it("should be true if current board has winning set", () => {
    const currentBoard = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(checkIfGameWon({ currentBoard })).toBe(true);
  });

  it("should be false if current board has no winning set", () => {
    const currentBoard = [
      [1, 0, 1],
      [0, 0, 0],
      [0, 1, 0],
    ];
    expect(checkIfGameWon({ currentBoard })).toEqual(false);
  });
});

describe("translateBoardStateOnMove", () => {
  it("should return translated board state from pieces", () => {
    const translatedBoard = translateBoardStateOnMove({
      board: [
        ["X", null, "O"],
        [null, null, null],
        [null, "X", null],
      ],
      currentPiece: "X",
    });
    expect(translatedBoard).toEqual([
      [1, 0, 0],
      [0, 0, 0],
      [0, 1, 0],
    ]);
  });
});
