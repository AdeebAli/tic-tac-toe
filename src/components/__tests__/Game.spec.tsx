import { render } from "@testing-library/react";
import { Game } from "../Game";
import userEvent from "@testing-library/user-event";

describe("Game", () => {
  it("should render the game", () => {
    const { getAllByRole } = render(<Game />);
    expect(getAllByRole("button").length).toBe(10);
  });

  it("should allow the game to be played until a winner is declared", async () => {
    const { getAllByRole, queryByTestId, getByText } = render(<Game />);

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [
      tile1,
      tile2,
      tile3,
      tile4,
      _tile5,
      _tile6,
      tile7,
      _tile8,
      _tile9,
      _reset,
    ] = getAllByRole("button");

    expect(queryByTestId("current-turn-x")).toBeInTheDocument();
    expect(queryByTestId("current-turn-o")).not.toBeInTheDocument();
    await userEvent.click(tile1); // x taking turn
    expect(queryByTestId("current-turn-x")).not.toBeInTheDocument();
    expect(queryByTestId("current-turn-o")).toBeInTheDocument();
    await userEvent.click(tile2); // o taking turn
    expect(queryByTestId("current-turn-x")).toBeInTheDocument();
    expect(queryByTestId("current-turn-o")).not.toBeInTheDocument();
    await userEvent.click(tile4); // x taking turn
    expect(queryByTestId("current-turn-x")).not.toBeInTheDocument();
    expect(queryByTestId("current-turn-o")).toBeInTheDocument();
    await userEvent.click(tile3); // o taking turn
    expect(queryByTestId("current-turn-x")).toBeInTheDocument();
    expect(queryByTestId("current-turn-o")).not.toBeInTheDocument();
    await userEvent.click(tile7); //x taking turn, wins
    expect(queryByTestId("current-turn-x")).not.toBeInTheDocument();
    expect(queryByTestId("current-turn-o")).toBeInTheDocument();
    expect(getByText("X Wins!")).toBeInTheDocument();
  });

  it("should let you reset the game", async () => {
    const { getAllByRole, queryByTestId } = render(<Game />);

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [
      tile1,
      _tile2,
      _tile3,
      _tile4,
      _tile5,
      _tile6,
      _tile7,
      _tile8,
      _tile9,
      reset,
    ] = getAllByRole("button");

    await userEvent.click(tile1); // x taking turn
    expect(queryByTestId("x-tile")).toBeInTheDocument();
    await userEvent.click(reset);
    expect(queryByTestId("x-tile")).not.toBeInTheDocument();
  });
});
