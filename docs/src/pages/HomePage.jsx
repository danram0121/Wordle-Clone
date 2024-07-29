import DateSection from "../components/DateSection";
import Hero from "../components/Hero";
import StartButton from "../components/StartButton";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center xxsm:mt-40 xsm:mt-60">
        <Hero />
        <StartButton />
        <DateSection />
      </div>
    </>
  );
};

export default HomePage;
