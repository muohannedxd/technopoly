import { useState } from "react";
import gameDie2 from "../assets/gameDie2.png";
import gameDie4 from "../assets/gameDie4.png";
import { dayContent } from "../lib/data/agenda.data";

export const Agenda = () => {
  const [currentDot, setCurrentDot] = useState<number>(1);

  const handleDiceClick = () => {
    setCurrentDot((prev) => (prev === 3 ? 1 : prev + 1));
  };

  /*
  const generatePosition = () => {
    const top = `${40}%`; 
    const left = `${110}%`;
    const angle = `${10}deg`;
    return { top, left ,angle};
  };

  const getRandomRotation = () => {
    return 0;
  };
  */

  return (
    <div
      id="agenda"
      className="w-full flex justify-center content-center pt-[2vh] sm:pt-[14vh] flex-col items-center"
    >
      <div className="text-center flex flex-col gap-4 mb-14">
        <p className="text-title"> Event Schedule </p>
        <p className="text-main text-lightblue"> {'(>ᴗ•) Roll the dice to see what is waiting for you next day (•ᴗ<)'} </p>
      </div>

      <div className="relative w-full max-w-6xl h-12 rounded-full shadow-md flex items-center justify-between pl-8 pr-8 border-4 border-black -mb-14 bg-[#fff4c4]">
        <span
          className="w-6 h-6 rounded-full mx-4 shadow-md border-2 border-black"
          style={{ backgroundColor: "#FBBC04" }}
        ></span>

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

        <span
          className="w-6 h-6 rounded-full mx-4 shadow-md border-2 border-black"
          style={{ backgroundColor: "#FBBC04" }}
        ></span>

        <span
          className="w-6 h-6 rounded-full mx-4 shadow-md border-2 border-black"
          style={{ backgroundColor: "#FBBC04" }}
        ></span>
      </div>

      <section className="container pt-16 sm:pt-32 flex justify-center items-center flex-col">
        <div className="relative w-full max-w-4xl h-[550px] bg-[#fff4c4] rounded-3xl shadow-lg border-r-[10px] border-b-[20px] border-4 border-black flex flex-col items-center justify-start">
          <h2 className="text-title font-medium mt-4">DAY {currentDot}</h2>
          <p className="text-lg text-center mt-4">{dayContent[currentDot]}</p>
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
