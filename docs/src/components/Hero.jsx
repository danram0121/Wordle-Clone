const Hero = () => {
  return (
    <>
      <section className="">
        <div className="max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center mb-2">
            <h1 className="text-4xl font-extrabold  sm:text-5xl md:text-6xl xxsm:text-3xl sm:mb-6 xxsm:mb-2">
              Welcome to Wordle
            </h1>
            <p className="sm:text-5xl xxsm:text-3xl sm:mb-2 xxsm:mb-2">
              Good luck!
            </p>
            <p className="sm:text-lg xxsm:text-xs xxsm:font-light">
              Note: words don&apos;t have repeating letters
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
