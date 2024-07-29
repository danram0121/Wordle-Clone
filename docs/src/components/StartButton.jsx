import { Words } from "../lib/wordleList";
import { Easy } from "../lib/easyList";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GameStateContext } from "../context/GameStateContext";

const StartButton = () => {
  const { updateGameState } = useContext(GameStateContext);
  const [word, setWord] = useState(
    Easy[Math.floor(Math.random() * Easy.length)].toUpperCase()
  );

  const navigate = useNavigate();
  const gameState = {
    boardState: ["", "", "", "", "", ""],
    currentRowIndex: 0,
    word: word,
    puzzleId: "1",
    legacyStats: {
      currentStreak: 0,
      gamesPlayed: 0,
      gamesWon: 0,
      longestStreak: 0,
    },
  };

  const handleStart = (e) => {
    e.preventDefault();

    updateGameState(gameState);

    navigate("/wordle");
  };

  return (
    <>
      <section className="mb-6">
        <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <button
            className="mb-2 px-12 py-4 bg-black text-white text-lg rounded-full"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </section>
    </>
  );
};

export default StartButton;
