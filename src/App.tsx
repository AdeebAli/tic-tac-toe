import { css } from "../styled-system/css";
import { flex } from "../styled-system/patterns";
import { Game } from "./components/Game";

function App() {
  return (
    <div className={flex({ align: "center", direction: "column" })}>
      <h1 className={css({ fontSize: "6xl", marginBottom: 10 })}>
        Tic Tac Toe
      </h1>
      <Game />
    </div>
  );
}

export default App;
