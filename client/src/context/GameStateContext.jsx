import { createContext, useEffect, useState } from "react";

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState(
    JSON.parse(localStorage.getItem("gameState")) || null
  );

  const updateGameState = (newState) => {
    setCurrentState(newState);
  };

  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(currentState));
  }, [currentState]);

  return (
    <GameStateContext.Provider value={{ currentState, updateGameState }}>
      {children}
    </GameStateContext.Provider>
  );
};
