import { wordDict } from "../lib/wordleDictionary";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameStateContext } from "../context/GameStateContext";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customId = "custom-id-yes";

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

  const handleClick = async (e) => {
    e.preventDefault();
    // toast(`🦄 ${currentState.word}`, { autoClose: 1000 });

    const rowIndex = currentState.currentRowIndex;
    const currentGuess = currentState.boardState[rowIndex];
    const rowLength = currentGuess.length;
    const win = currentGuess === currentState.word;

    // if the word is not in the dictionary
    if (!wordDict.includes(currentGuess.toLowerCase()) || rowLength !== 5) {
      rowLength !== 5
        ? toast("🥸 You need more letters", { toastId: customId })
        : toast("🥸 Is that a word?", { toastId: customId });
      return;
    }

    updateGameState((prevState) => {
      const newState = {
        ...prevState,
        currentRowIndex: prevState.currentRowIndex + 1,
      };

      if (win || prevState.currentRowIndex === 5) {
        // if the word is correct or the user has made 5 guesses
        setGameOver(true);
        if (win) {
          setWinState(win);
        } else {
          toast(`📖 ${prevState.word}`, { toastId: customId });
          setLoseState(!win);
        }
      }

      return newState;
    });
  };

  return (
    <>
      {winState ? <Confetti /> : null}
      <button
        className="flex font-bold xxsm:text-xs sm:h-14 xxsm:h-12 items-center justify-center bg-gray-200 rounded-md grow border border-white hover:bg-transparent hover:border-gray-200  active:scale-105"
        onClick={handleClick}
      >
        Enter
      </button>
    </>
  );
};

export default EnterKey;
