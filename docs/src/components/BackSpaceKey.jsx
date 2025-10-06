import { useContext } from "react";
import { IoBackspaceOutline } from "react-icons/io5";
import { GameStateContext } from "../context/GameStateContext";

const BackSpaceKey = () => {
  const { handleBackspaceInput } = useContext(GameStateContext);

  return (
    <>
      <button
        className="flex sm:h-14 xxsm:h-12 items-center justify-center sm:text-3xl bg-gray-200 rounded-md grow border border-white hover:bg-transparent hover:border-gray-200 active:scale-105"
        onClick={handleBackspaceInput}
      >
        <IoBackspaceOutline />
      </button>
    </>
  );
};

export default BackSpaceKey;
