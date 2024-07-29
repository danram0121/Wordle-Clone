import { wordDict } from "../lib/wordleDictionary";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameStateContext } from "../context/GameStateContext";
import Confetti from "react-confetti";

const EnterKey = () => {
  const [winState, setWinState] = useState("");
  const [loseState, setLoseState] = useState("");
  const { currentState, updateGameState } = useContext(GameStateContext);
  const rowIndex = currentState.currentRowIndex;
  const currentGuess = currentState.boardState[rowIndex];
  const rowLength = currentState.boardState[rowIndex].length;
  const win = currentGuess === currentState.word;

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    // if the word is not in the dictionary
    if (!wordDict.includes(currentGuess.toLowerCase())) {
      return;
    }

    updateGameState((prevState) => {
      const currentRowIndex = prevState.currentRowIndex;

      // Check if the current row is less than 5 and the row length is 5
      if (currentRowIndex < 5 && rowLength === 5) {
        if (win) {
          // Win condition
          setWinState(true);
          setTimeout(() => {
            navigate("/");
          }, 8000);
        }
        return {
          ...prevState,
          currentRowIndex: currentRowIndex + 1,
        };
      }

      if (currentRowIndex === 5) {
        // Game Over no more guesses remaining loss condition
        setLoseState(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }

      return {
        ...prevState,
      };
    });
  };

  return (
    <>
      {winState ? <Confetti /> : null}
      <button
        className="flex font-bold xxsm:text-xs sm:h-14 xxsm:h-10 items-center justify-center bg-gray-200 rounded-md grow border border-white hover:bg-transparent hover:border-gray-200"
        onClick={handleClick}
      >
        Enter
      </button>
    </>
  );
};

export default EnterKey;
