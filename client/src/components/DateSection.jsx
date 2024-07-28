const DateSection = () => {
  const gameNo = 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  console.log(day, month, year);
  return (
    <>
      <section className="">
        <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <p>
              <b>
                {months[month]} {day}, {year}
              </b>
            </p>
            <p>No. {gameNo}</p>
            <p>Edited by Daniel</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DateSection;
