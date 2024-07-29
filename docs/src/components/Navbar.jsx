import { FaBars, FaRegLightbulb, FaRegQuestionCircle } from "react-icons/fa";
import { FaChartSimple, FaGear } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="border-b">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center md:items-stretch md:justify-start">
              <button className="text-3xl px-2 py-1 rounded-md hover:bg-gray-200">
                <FaBars />
              </button>
            </div>
            <div className="flex flex-1 items-center md:items-stretch md:justify-end gap-">
              <button className="text-3xl px-2 py-1 rounded-md  hover:bg-gray-200">
                <FaRegLightbulb />
              </button>
              <button className="text-3xl px-2 py-1 rounded-md hover:bg-gray-200">
                <FaChartSimple />
              </button>
              <button className="text-3xl px-2 py-1 rounded-md hover:bg-gray-200">
                <FaRegQuestionCircle />
              </button>
              <button className="text-3xl px-2 py-1 rounded-md hover:bg-gray-200">
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
