import { useContext, useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { GameStateContext } from "../context/GameStateContext";

const customId = "custom-id-yes";

const EnterKey = () => {
  const [gameOver, setGameOver] = useState(false);
  const [winState, setWinState] = useState(false);
  const [loseState, setLoseState] = useState(false);
  const { currentState, handleEnterInput } = useContext(GameStateContext);
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

  // Monitor for game over state
  useEffect(() => {
    if (currentState && currentState.currentRowIndex > 0) {
      const previousGuess =
        currentState.boardState[currentState.currentRowIndex - 1];
      const win = previousGuess === currentState.word;

      if (win) {
        setGameOver(true);
        setWinState(true);
      } else if (currentState.currentRowIndex > 5) {
        setGameOver(true);
        setLoseState(true);
      }
    }
  }, [currentState]);

  return (
    <>
      {winState ? <Confetti /> : null}
      <button
        className="flex font-bold xxsm:text-xs sm:h-14 xxsm:h-12 items-center justify-center bg-gray-200 rounded-md grow border border-white hover:bg-transparent hover:border-gray-200  active:scale-105"
        onClick={handleEnterInput}
      >
        Enter
      </button>
    </>
  );
};

export default EnterKey;
