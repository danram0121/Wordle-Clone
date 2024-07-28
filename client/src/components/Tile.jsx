const Tile = (prop) => {
  return (
    <>
      <div className="flex size-[62px] items-center justify-center text-3xl font-bold border-2 border-gray-300">
        {prop.letter}
      </div>
    </>
  );
};

export default Tile;
