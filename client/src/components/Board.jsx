import { useState } from "react";
import BoardRow from "./BoardRow";

const Board = () => {
  const guesses = [
    ["Q", "U", "E", "E", "N"],
    ["S", "O", "R", "R", "Y"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  return (
    <>
      <div className="flex flex-col gap-1.5">
        {guesses.map((guess, index) => (
          <BoardRow guess={guess} key={index} />
        ))}
      </div>
    </>
  );
};

export default Board;
