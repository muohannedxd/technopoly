import { useState } from "react";
import gameDie2 from "../assets/gameDie2.png";
import gameDie4 from "../assets/gameDie4.png";

export const Agenda = () => {
  const [currentDot, setCurrentDot] = useState(1);

  const handleDiceClick = () => {
    setCurrentDot((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const dayContent = {
    1: (
      <p className="text-lg text-center mt-4">
        Welcome to Day 1! Lorem, ipsum dolor sit amet consectetur adipisicing elit. At animi cumque officiis tempore illo nam consectetur vel amet, consequuntur corrupti similique minus itaque dignissimos quibusdam dolor magnam earum nulla neque!
      </p>
    ),
    2: (
      <p className="text-lg text-center mt-4">
        Day 2 is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ipsam non, omnis, harum, autem commodi atque fugiat similique corrupti voluptates distinctio quae itaque libero recusandae? Libero a voluptas incidunt doloremque!
      </p>
    ),
    3: (
      <p className="text-lg text-center mt-4">
        Day 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum reiciendis ducimus itaque veritatis atque! Mollitia alias dignissimos culpa itaque ex ducimus laborum fugit. Veniam adipisci obcaecati enim officiis eos maxime.
      </p>
    ),
  };

  return (
    <div className="w-full flex justify-center content-center flex-col items-center">
      <h1 className="text-title mb-14">Event Schedule</h1>

      <div className="relative w-full max-w-6xl h-12 rounded-full shadow-md flex items-center justify-between pl-8 pr-8 border-4 border-black -mb-14 bg-[#fff4c4]">
        <span className="w-6 h-6 bg-yellow-500 rounded-full mx-4 shadow-md border-2 border-black"></span>

        <img
          src={gameDie2}
          alt="Dice"
          className={`absolute top-1/2 -translate-y-1/2 w-[70px] h-[70px] transition-all duration-500 ${
            currentDot === 1
              ? "left-[calc(8px+1rem)]"
              : currentDot === 2
              ? "left-1/2 -translate-x-1/2"
              : "left-[calc(100%-8px-1rem)] -translate-x-full"
          }`}
          onClick={handleDiceClick}
          style={{ cursor: "pointer" }}
        />

        <span className="w-6 h-6 bg-yellow-500 rounded-full mx-4 shadow-md border-2 border-black"></span>

        <span className="w-6 h-6 bg-yellow-500 rounded-full mx-4 shadow-md border-2 border-black"></span>
      </div>

      <section
        id="agenda"
        className="container py-24 sm:py-32 flex justify-center items-center flex-col"
      >
        <div className="relative w-full max-w-4xl h-[550px] bg-[#fff4c4] rounded-3xl shadow-lg border-r-[10px] border-b-[20px] border-4 border-black flex flex-col items-center justify-start">
          <h2 className="text-title font-medium mt-4">DAY {currentDot}</h2>
          {dayContent[currentDot]}
          <img
            src={gameDie4}
            alt="Dice"
            className="absolute bottom-[-45px] right-[-30px] w-[100px] h-[100px]"
          />
        </div>
      </section>
    </div>
  );
};
