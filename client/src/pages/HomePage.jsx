import Wordle from "./Wordle";

const HomePage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <Wordle />
        </div>
      </div>
    </>
  );
};

export default HomePage;
