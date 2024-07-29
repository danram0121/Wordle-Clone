import { useContext, useState } from "react";
import { GameStateContext } from "../context/GameStateContext";
import BoardRow from "./BoardRow";

const Board = () => {
  const { currentState } = useContext(GameStateContext);
  const guesses = currentState.boardState;
  return (
    <>
      <div className="flex flex-col gap-1.5">
        {guesses.map((guess, index) => (
          <BoardRow guess={guess} index={index} key={index} />
        ))}
      </div>
    </>
  );
};

export default Board;
