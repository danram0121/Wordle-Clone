import { useState } from "react";
import BoardRow from "./BoardRow";

const Board = () => {
  const guess1 = ["q", "u", "e", "e", "n"];
  const guess2 = ["s", "o", "r", "r", "y"];
  const guess3 = ["", "", "", "", ""];
  const guess4 = ["", "", "", "", ""];
  const guess5 = ["", "", "", "", ""];
  const guess6 = ["", "", "", "", ""];

  return (
    <>
      <div className="flex flex-col gap-1.5">
        <BoardRow guess={guess1} />
        <BoardRow guess={guess2} />
        <BoardRow guess={guess3} />
        <BoardRow guess={guess4} />
        <BoardRow guess={guess5} />
        <BoardRow guess={guess6} />
      </div>
    </>
  );
};

export default Board;
