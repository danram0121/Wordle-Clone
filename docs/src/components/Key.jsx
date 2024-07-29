import { useContext, useMemo } from "react";
import { GameStateContext } from "../context/GameStateContext";

const theme = {
  empty:
    "bg-gray-200 border-2 border-white hover:bg-transparent hover:border-gray-200",
  absent:
    "bg-[#787c7e] text-white hover:bg-[rgb(120,124,126,0.85)] hover:border-[#787c7e] hover:border-2",
  correct:
    "bg-[#58a351] text-white hover:bg-[rgb(88,168,81,0.85)] hover:border-[#58a351] hover:border-2",
};

const Key = ({ letter, state }) => {
  const { currentState, updateGameState } = useContext(GameStateContext);
  const keyWord = currentState.word;
  const currentGuesses = currentState.boardState.slice(
    0,
    currentState.currentRowIndex
  );

  const tileState = useMemo(() => {
    if (currentGuesses.toString().includes(letter) && !keyWord.includes(letter))
      // if letter is in current guesses but not in keyword
      return theme.absent;
    if (currentGuesses.toString().includes(letter) && keyWord.includes(letter))
      // if letter is in current guesses and in keyword
      return theme.correct;
    return theme.empty;
  }, [letter, state]);

  const handleClick = (e) => {
    e.preventDefault();

    updateGameState((prevState) => {
      const currentRowIndex = prevState.currentRowIndex;
      const currentRowContent = prevState.boardState[currentRowIndex];

      if (currentRowContent.length < 5) {
        const newBoardState = [...prevState.boardState];
        newBoardState[currentRowIndex] = currentRowContent + letter;

        return {
          ...prevState,
          boardState: newBoardState,
        };
      }
      return {
        ...prevState,
      };
    });
  };
  return (
    <>
      <button
        className={`flex font-bold h-[58px] w-[43px] items-center justify-center rounded-md border border-white hover:bg-transparent hover:border-gray-200 ${tileState}`}
        onClick={handleClick}
      >
        {letter}
      </button>
    </>
  );
};

export default Key;
