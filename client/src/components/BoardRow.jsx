import { useState } from "react";
import Tile from "./Tile";

const BoardRow = (prop) => {
  console.log(prop.guess);

  return (
    <>
      <div className="flex flex-row gap-1.5">
        <Tile letter={prop.guess[0]} />
        <Tile letter={prop.guess[1]} />
        <Tile letter={prop.guess[2]} />
        <Tile letter={prop.guess[3]} />
        <Tile letter={prop.guess[4]} />
      </div>
    </>
  );
};

export default BoardRow;
