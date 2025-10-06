import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { wordDict } from "../lib/wordleDictionary";

export const GameStateContext = createContext();

const customId = "custom-id-yes";

export const GameStateProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState(
    JSON.parse(localStorage.getItem("gameState")) || null
  );

  const updateGameState = (newState) => {
    setCurrentState(newState);
  };

  // Handle letter input (used by both physical and on-screen keyboard)
  const handleKeyInput = (letter) => {
    if (!currentState || currentState.currentRowIndex > 5) return;

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

  // Handle Enter key
  const handleEnterInput = () => {
    if (!currentState || currentState.currentRowIndex > 5) return;

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
        if (!win) {
          toast(`📖 ${prevState.word}`, { toastId: customId });
        }
      }

      return newState;
    });
  };

  // Handle Backspace key
  const handleBackspaceInput = () => {
    if (!currentState || currentState.currentRowIndex > 5) return;

    updateGameState((prevState) => {
      const currentRowIndex = prevState.currentRowIndex;
      const currentRowContent = prevState.boardState[currentRowIndex];

      if (currentRowContent.length > 0) {
        const newBoardState = [...prevState.boardState];
        newBoardState[currentRowIndex] = currentRowContent.slice(0, -1);

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

  // Physical keyboard listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Don't handle if no current state
      if (!currentState) return;

      if (["Backspace", "Enter"].includes(event.key)) {
        event.preventDefault();
      }

      const key = event.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        handleKeyInput(key);
      } else if (event.key === "Enter") {
        handleEnterInput();
      } else if (event.key === "Backspace") {
        handleBackspaceInput();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentState]);

  useEffect(() => {
    if (currentState) {
      localStorage.setItem("gameState", JSON.stringify(currentState));
    }
  }, [currentState]);

  return (
    <GameStateContext.Provider
      value={{
        currentState,
        updateGameState,
        handleKeyInput,
        handleEnterInput,
        handleBackspaceInput,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};
