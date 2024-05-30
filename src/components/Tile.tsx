import { FaX, FaO } from "react-icons/fa6";
import { css } from "../../styled-system/css";
import { Center } from "../../styled-system/jsx";
import { Piece } from "../types/piece";
export const Tile = ({
  value,
  handleClick,
}: {
  value: Piece | null;
  handleClick: () => void;
}) => {
  return (
    <button
      className={css({ height: "100%", width: "100%", alignItems: "center" })}
      onClick={handleClick}
    >
      <Center>
        {value ? (
          value === "X" ? (
            <FaX color="red" size={90} />
          ) : (
            <FaO color="blue" size={90} />
          )
        ) : null}
      </Center>
    </button>
  );
};
