import { useContext, useMemo } from "react";
import { GameStateContext } from "../context/GameStateContext";
import { IoBackspaceOutline } from "react-icons/io5";

const BackSpaceKey = () => {
  const { updateGameState } = useContext(GameStateContext);

  const handleClick = (e) => {
    e.preventDefault();

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

  return (
    <>
      <button
        className="flex h-[58px] items-center justify-center text-3xl bg-gray-200 rounded-md grow border border-white hover:bg-transparent hover:border-gray-200"
        onClick={handleClick}
      >
        <IoBackspaceOutline />
      </button>
    </>
  );
};

export default BackSpaceKey;
