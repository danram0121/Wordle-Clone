const Key = (prop) => {
  return (
    <>
      <button className="flex font-bold h-[58px] w-[43px] items-center justify-center bg-gray-200 rounded-md border border-white hover:bg-transparent hover:border-gray-200">
        {prop.letter}
      </button>
    </>
  );
};

export default Key;
