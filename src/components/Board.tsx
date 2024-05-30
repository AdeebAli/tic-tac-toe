import { Dispatch, SetStateAction } from "react";
import { Piece } from "../types/piece";
import { Flex, Grid, GridItem } from "../../styled-system/jsx";
import { Tile } from "./Tile";
import { css } from "../../styled-system/css";
import { FaO, FaX } from "react-icons/fa6";
import {
  checkIfGameDraw,
  checkIfGameWon,
  translateBoardStateOnMove,
} from "../util/util";

export const WinnerDisplay = ({
  board,
  xTurn,
}: {
  board: (Piece | null)[][];
  xTurn: boolean;
}) => {
  const currentPiece = xTurn ? "O" : "X";
  const translatedBoard = translateBoardStateOnMove({ board, currentPiece });
  const gameWon = checkIfGameWon({ currentBoard: translatedBoard });
  return (
    <div className={css({ fontSize: "3xl" })}>
      {gameWon ? `${currentPiece} Wins!` : null}
    </div>
  );
};

export const DrawDisplay = ({
  board,
  xTurn,
}: {
  board: (Piece | null)[][];
  xTurn: boolean;
}) => {
  const currentPiece = xTurn ? "X" : "O";
  const gameIsDraw = checkIfGameDraw({
    currentBoard: board,
    currentPiece,
  });

  return (
    <div>
      {gameIsDraw ? <div className={css({ fontSize: "3xl" })}>Draw</div> : null}
    </div>
  );
};

export const Board = ({
  boardState,
  setBoardState,
  xTurn,
  setXTurn,
}: {
  xTurn: boolean;
  setXTurn: Dispatch<SetStateAction<boolean>>;
  boardState: (Piece | null)[][];
  setBoardState: Dispatch<SetStateAction<(Piece | null)[][]>>;
}) => {
  const handleClick = ({
    rowPosition,
    columnPosition,
  }: {
    rowPosition: number;
    columnPosition: number;
  }) => {
    if (boardState[rowPosition][columnPosition]) {
      //already a value here, do nothing
      return;
    }
    const newBoardState = boardState.map((boardRow, rowIndex) => {
      return boardRow.map((_, columnIndex) => {
        if (rowPosition === rowIndex && columnPosition === columnIndex) {
          return xTurn ? "X" : "O";
        } else {
          return boardState[rowIndex][columnIndex];
        }
      });
    });
    console.log(newBoardState);
    setBoardState(newBoardState);
    setXTurn(!xTurn);
  };

  return (
    <Flex flexDir={"column"} align={"center"}>
      <DrawDisplay board={boardState} xTurn={xTurn} />
      <WinnerDisplay board={boardState} xTurn={xTurn} />
      <Grid marginTop={5} gap={0}>
        {boardState.map((boardRow, rowIndex) => {
          return (
            <Flex flexDir="row" key={rowIndex}>
              {boardRow.map((boardColumnItem, columnIndex) => {
                return (
                  <GridItem
                    border={"solid"}
                    minWidth={100}
                    minHeight={100}
                    textAlign={"center"}
                    alignContent={"center"}
                    key={columnIndex}
                  >
                    <Tile
                      handleClick={() => {
                        handleClick({
                          rowPosition: rowIndex,
                          columnPosition: columnIndex,
                        });
                      }}
                      value={boardColumnItem}
                    />
                  </GridItem>
                );
              })}
            </Flex>
          );
        })}
      </Grid>
      <Flex flexDir="row" align="center" marginTop={5}>
        <div className={css({ paddingRight: 3, fontSize: 20 })}>
          Current Turn:
        </div>
        {xTurn ? <FaX size={20} color="red" /> : <FaO size={20} color="blue" />}
      </Flex>
      <button
        className={css({
          background: "blue.600",
          shadow: "md",
          borderRadius: "4px",
          marginTop: 10,
          paddingY: 2,
          paddingX: 7,
          color: "white",
          _hover: {
            background: "blue.500",
          },
          _active: {
            background: "blue.700",
          },
        })}
        onClick={() => {
          setBoardState(Array(3).fill(Array(3).fill(null)));
          setXTurn(true);
        }}
      >
        New Game
      </button>
    </Flex>
  );
};
