import { IoBackspaceOutline } from "react-icons/io5";

const BackSpaceKey = () => {
  return (
    <>
      <button className="flex h-[58px] items-center justify-center text-3xl bg-gray-200 rounded-md grow border border-white hover:bg-transparent hover:border-gray-200">
        <IoBackspaceOutline />
      </button>
    </>
  );
};

export default BackSpaceKey;
