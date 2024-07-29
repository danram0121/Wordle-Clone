import { wordDict } from "../lib/wordleDictionary";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameStateContext } from "../context/GameStateContext";
import Confetti from "react-confetti";

const EnterKey = () => {
  const [gameOver, setGameOver] = useState(false);
  const [winState, setWinState] = useState(false);
  const [loseState, setLoseState] = useState(false);
  const { currentState, updateGameState } = useContext(GameStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (gameOver) {
      const timeout = setTimeout(
        () => {
          navigate("/");
        },
        winState ? 8000 : 3000
      );

      return () => clearTimeout(timeout);
    }
  }, [gameOver, winState, navigate]);

  const handleClick = (e) => {
    e.preventDefault();

    const rowIndex = currentState.currentRowIndex;
    const currentGuess = currentState.boardState[rowIndex];
    const rowLength = currentGuess.length;
    const win = currentGuess === currentState.word;

    // if the word is not in the dictionary
    if (!wordDict.includes(currentGuess.toLowerCase()) || rowLength !== 5) {
      return;
    }

    updateGameState((prevState) => {
      const newState = {
        ...prevState,
        currentRowIndex: prevState.currentRowIndex + 1,
      };

      if (win || prevState.currentRowIndex === 5) {
        setGameOver(true);
        setWinState(win);
        setLoseState(!win);
      }

      return newState;
    });
  };

  return (
    <>
      {winState ? <Confetti /> : null}
      <button
        className="flex font-bold xxsm:text-xs sm:h-14 xxsm:h-10 items-center justify-center bg-gray-200 rounded-md grow border border-white hover:bg-transparent hover:border-gray-200  active:scale-105"
        onClick={handleClick}
      >
        Enter
      </button>
    </>
  );
};

export default EnterKey;
