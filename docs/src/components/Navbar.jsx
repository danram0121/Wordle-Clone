import { Link } from "react-router-dom";
import { FaBars, FaRegLightbulb, FaRegQuestionCircle } from "react-icons/fa";
import { FaChartSimple, FaGear } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="border-b">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center md:items-stretch md:justify-start xxsm:h-10">
              <button className="text-3xl px-2 py-1 rounded-md hover:bg-gray-200">
                <FaBars />
              </button>
            </div>
            <Link to={"/"}>
              <button className="sm:text-sm xxsm:text-sm px-2 py-1 rounded-md  hover:bg-gray-200 bg-black text-white xxsm:h-10">
                New Game
              </button>
            </Link>
            <div className="flex flex-1 items-center md:items-stretch xxsm:justify-end xxsm:h-10">
              <button className="text-3xl px-2 py-1 rounded-md  hover:bg-gray-200 xxsm:hidden sm:block">
                <FaRegLightbulb />
              </button>
              <button className="text-3xl px-2 py-1 rounded-md hover:bg-gray-200 xxsm:hidden sm:block">
                <FaChartSimple />
              </button>
              <button className="text-3xl px-2 py-1 rounded-md hover:bg-gray-200  xxsm:hidden sm:block">
                <FaRegQuestionCircle />
              </button>
              <button className="text-3xl px-2 py-1 rounded-md hover:bg-gray-200  xxsm:hidden sm:block">
                <FaGear />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
