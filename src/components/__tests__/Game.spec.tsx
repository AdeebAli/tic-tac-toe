import { render } from "@testing-library/react";
import { Game } from "../Game";

describe("Game", () => {
  it("should render the game", () => {
    const { getAllByRole } = render(<Game />);
    expect(getAllByRole("button").length).toBe(10);
  });
});
