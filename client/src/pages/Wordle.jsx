import Game from "../components/Game";
import KeyBoard from "../components/KeyBoard";

const Wordle = () => {
  return (
    <>
      <div className="flex flex-col gap-6 mt-8 items-center">
        <Game />
        <KeyBoard />
      </div>
    </>
  );
};

export default Wordle;
