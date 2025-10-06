import { createContext, useEffect, useState } from "react";

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState(
    JSON.parse(localStorage.getItem("gameState")) || null
  );

  const updateGameState = (newState) => {
    setCurrentState(newState);
  };

  const handleKeyInput = (letter) => {
    console.log("Letter pressed:", letter);
  };

  const handleEnterInput = () => {
    console.log("Enter pressed");
  };

  const handleBackspaceInput = () => {
    console.log("Backspace pressed");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (["Backspace", "Enter"].includes(event.key)) {
        event.preventDefault();
      }

      const key = event.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        handleKeyInput(key);
      } else if (event.key === "Enter") {
        handleEnterInput();
      } else if (event.key == "Backspace") {
        handleBackspaceInput();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentState]);

  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(currentState));
  }, [currentState]);

  return (
    <GameStateContext.Provider value={{ currentState, updateGameState }}>
      {children}
    </GameStateContext.Provider>
  );
};
