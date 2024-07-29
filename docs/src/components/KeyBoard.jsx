import Key from "./Key";
import BackSpaceKey from "./BackSpaceKey";
import EnterKey from "./EnterKey";

const KeyBoard = () => {
  return (
    <>
      <div className="flex flex-col items-center sm:gap-y-2 xxsm:gap-1 keyboard xxsm:w-screen sm:w-[540px] xsm:w-[400px]">
        <div className="row-1 flex w-full justify-around gap-1">
          <Key letter="Q" state="" />
          <Key letter="W" state="" />
          <Key letter="E" state="" />
          <Key letter="R" state="" />
          <Key letter="T" state="" />
          <Key letter="Y" state="" />
          <Key letter="U" state="" />
          <Key letter="I" state="" />
          <Key letter="O" state="" />
          <Key letter="P" state="" />
        </div>
        <div className="row-2 flex w-full justify-around gap-1 px-6">
          <Key letter="A" state="" />
          <Key letter="S" state="" />
          <Key letter="D" state="" />
          <Key letter="F" state="" />
          <Key letter="G" state="" />
          <Key letter="H" state="" />
          <Key letter="J" state="" />
          <Key letter="K" state="" />
          <Key letter="L" state="" />
        </div>
        <div className="row-3 flex justify-around w-full gap-1">
          <EnterKey state="" />
          <Key letter="Z" state="" />
          <Key letter="X" state="" />
          <Key letter="C" state="" />
          <Key letter="V" state="" />
          <Key letter="B" state="" />
          <Key letter="N" state="" />
          <Key letter="M" state="" />
          <BackSpaceKey state="" />
        </div>
      </div>
    </>
  );
};

export default KeyBoard;
