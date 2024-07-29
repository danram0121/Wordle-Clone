import { useContext, useMemo } from "react";
import { GameStateContext } from "../context/GameStateContext";

const theme = {
  empty:
    "bg-gray-200 border-2 border-white hover:bg-transparent hover:border-gray-200",
  absent:
    "bg-[#787c7e] text-white hover:bg-[rgb(120,124,126,0.85)] hover:border-[#787c7e] hover:border-2",
  present:
    "bg-[#c9b458] text-white hover:bg-[rgb(201,180,88,0.85)] hover:border-[#c9b458] hover:border-2",
  correct:
    "bg-[#58a351] text-white hover:bg-[rgb(88,168,81,0.85)] hover:border-[#58a351] hover:border-2",
};

const Key = ({ letter }) => {
  const { currentState, updateGameState } = useContext(GameStateContext);
  const { word, boardState, currentRowIndex } = currentState;

  const tileState = useMemo(() => {
    const pastGuesses = boardState.slice(0, currentRowIndex);

    const isCorrect = pastGuesses.some(
      (guess, rowIndex) => guess[word.indexOf(letter)] === letter
    );
    if (isCorrect) return theme.correct;

    const isPresent = pastGuesses.some(
      (guess) => guess.includes(letter) && word.includes(letter)
    );
    if (isPresent) return theme.present;

    const isAbsent = pastGuesses.some(
      (guess) => guess.includes(letter) && !word.includes(letter)
    );
    if (isAbsent) return theme.absent;

    return theme.empty;
  }, [letter, word, boardState, currentRowIndex]);

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
        className={`flex font-bold sm:h-14  xxsm:text-xs xxsm:h-10 items-center justify-center rounded-md border grow border-white hover:bg-transparent hover:border-gray-200 ${tileState} xxsm:active:scale-120 sm:active:scale-105`}
        onClick={handleClick}
      >
        {letter}
      </button>
    </>
  );
};

export default Key;
