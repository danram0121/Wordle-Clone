import { useState } from "react";
import Tile from "./Tile";

const BoardRow = (prop) => {
  console.log(prop.guess);

  return (
    <>
      <div className="flex flex-row gap-1.5">
        {prop.guess.map((letter, index) => (
          <Tile letter={letter} key={index} />
        ))}
      </div>
    </>
  );
};

export default BoardRow;
