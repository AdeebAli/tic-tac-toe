import { render } from "@testing-library/react";
import { Tile } from "../Tile";

describe("Tile", () => {
  it("should render", () => {
    const { getByRole } = render(
      <Tile value={"X"} handleClick={vitest.fn()} />
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("should show x when value is X", () => {
    const { queryByTestId } = render(
      <Tile value={"X"} handleClick={vitest.fn()} />
    );

    expect(queryByTestId("x-tile")).toBeInTheDocument();
    expect(queryByTestId("o-tile")).not.toBeInTheDocument();
  });

  it("should show o when value is O", () => {
    const { queryByTestId } = render(
      <Tile value={"O"} handleClick={vitest.fn()} />
    );

    expect(queryByTestId("o-tile")).toBeInTheDocument();
    expect(queryByTestId("x-tile")).not.toBeInTheDocument();
  });

  it("should not show x or o when value is null", () => {
    const { queryByTestId } = render(
      <Tile value={null} handleClick={vitest.fn()} />
    );

    expect(queryByTestId("x-tile")).not.toBeInTheDocument();
    expect(queryByTestId("o-tile")).not.toBeInTheDocument();
  });
});
