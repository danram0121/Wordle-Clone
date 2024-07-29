import { useContext, useMemo } from "react";
import { GameStateContext } from "../context/GameStateContext";

const theme = {
  empty: "border-2 border-gray-300",
  pending: "border-2 border-[#787c7e] transition-all duration-300",
  absent: "bg-[#787c7e] text-white",
  present: "bg-[#c9b458] text-white",
  correct: "bg-[#58a351] text-white",
};

const Tile = ({ value, index, state }) => {
  const { currentState } = useContext(GameStateContext);
  const keyWord = currentState.word;

  const tileState = useMemo(() => {
    if (value === " ") return theme.empty;
    if (state === "pending") return theme.pending;
    if (value === keyWord[index]) return theme.correct;
    if (keyWord.includes(value)) return theme.present;
    return theme.absent;
  }, [value, index, state]);

  return (
    <>
      <div
        className={`flex sm:size-[62px] xxsm:size-12 items-center justify-center text-3xl font-bold ${tileState}`}
      >
        {value}
      </div>
    </>
  );
};

export default Tile;
