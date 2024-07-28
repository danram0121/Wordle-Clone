import { Link } from "react-router-dom";

const StartButton = () => {
  return (
    <>
      <section className="mb-6">
        <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <Link to="/wordle">
            <button className="mb-2 px-12 py-4 bg-black text-white text-lg rounded-full">
              Start
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default StartButton;
