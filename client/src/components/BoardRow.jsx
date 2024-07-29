import { useContext } from "react";
import { GameStateContext } from "../context/GameStateContext";
import Tile from "./Tile";

const BoardRow = (data) => {
  const guess = data.guess.padEnd(5, " ");
  const { currentState } = useContext(GameStateContext);

  return (
    <>
      <div className="flex flex-row gap-1.5">
        {guess.split("").map((letter, index) => {
          return (
            <Tile
              value={letter}
              state={
                currentState.currentRowIndex === data.index ? "pending" : ""
              }
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default BoardRow;
