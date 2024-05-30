import { render } from "@testing-library/react";
import { Board, DrawDisplay, WinnerDisplay } from "../Board";
import { Board as BoardType } from "../../types/board";

describe("Board", () => {
  it("should render the board", () => {
    const boardState = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const { getAllByRole } = render(
      <Board
        boardState={boardState}
        xTurn={true}
        setBoardState={vitest.fn()}
        setXTurn={vitest.fn()}
      />
    );
    expect(getAllByRole("button").length).toBe(10);
  });
  it("should render x turn if it's x's turn", () => {
    const boardState = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    const { getByTestId } = render(
      <Board
        boardState={boardState}
        xTurn={true}
        setBoardState={vitest.fn()}
        setXTurn={vitest.fn()}
      />
    );

    expect(getByTestId("current-turn-x")).toBeInTheDocument();
  });

  it("should render o turn if it's o's turn", () => {
    const boardState = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    const { getByTestId } = render(
      <Board
        boardState={boardState}
        xTurn={false}
        setBoardState={vitest.fn()}
        setXTurn={vitest.fn()}
      />
    );

    expect(getByTestId("current-turn-o")).toBeInTheDocument();
  });
});

describe("Winner Display", () => {
  it("should render X Wins! if X wins", () => {
    const boardState: BoardType = [
      ["X", "O", null],
      ["X", "O", null],
      ["X", null, null],
    ];
    const { getByText } = render(
      <WinnerDisplay board={boardState} xTurn={false} />
    );

    expect(getByText("X Wins!")).toBeInTheDocument();
  });

  it("should render O Wins! if O wins", () => {
    const boardState: BoardType = [
      ["X", "O", "X"],
      ["X", "O", null],
      [null, "O", null],
    ];
    const { getByText } = render(
      <WinnerDisplay board={boardState} xTurn={true} />
    );

    expect(getByText("O Wins!")).toBeInTheDocument();
  });

  it("should not render a winner message if no one has won", () => {
    const boardState: BoardType = [
      ["X", "O", "X"],
      ["X", "O", null],
      [null, null, null],
    ];
    const { queryByText } = render(
      <WinnerDisplay board={boardState} xTurn={false} />
    );

    expect(queryByText("Wins!")).not.toBeInTheDocument();
  });
});

describe("DrawDisplay", () => {
  it("should display Draw if game ends in a draw", () => {
    const boardState: BoardType = [
      ["O", "O", "X"],
      ["X", "X", "O"],
      ["O", "X", "X"],
    ];
    const { getByText } = render(
      <DrawDisplay board={boardState} xTurn={false} />
    );
    expect(getByText("Draw")).toBeInTheDocument();
  });

  it("should not display Draw if game does not end in a draw", () => {
    const boardState: BoardType = [
      ["O", "O", "X"],
      ["X", "X", "X"],
      ["O", "O", "X"],
    ];
    const { queryByText } = render(
      <DrawDisplay board={boardState} xTurn={false} />
    );
    expect(queryByText("Draw")).not.toBeInTheDocument();
  });
});
