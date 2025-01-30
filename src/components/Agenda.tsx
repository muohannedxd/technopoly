import { useState } from "react";
import gameDie2 from "../assets/gameDie2.png";
import gameDie4 from "../assets/gameDie4.png";
import { dayContent } from "../lib/data/agenda.data";

export const Agenda = () => {
  const [currentDay, setCurrentDay] = useState<number>(1);

  const handleDiceClick = () => {
    setCurrentDay((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const splitDay2Content = () => {
    const lines = dayContent[2].split("\n").filter((line) => line.trim() !== "");
    const midPoint = Math.ceil(lines.length / 2);
    const firstHalf = lines.slice(0, midPoint).join("\n");
    const secondHalf = lines.slice(midPoint).join("\n");
    return { firstHalf, secondHalf };
  };

  const dayDates: { [key: number]: string } = {
    1: "February 6, 2025 (Thursday)",
    2: "February 7, 2025 (Friday)",
    3: "February 8, 2025 (Saturday)",
  };

  return (
    <div
      id="agenda"
      className="w-full flex justify-center pt-[2vh] sm:pt-[14vh] flex-col items-center"
    >
      <div className="text-center flex flex-col gap-4 mb-14">
        <h1 className="text-3xl font-bold">Event Schedule</h1>
        <p className="text-lg text-lightblue">
          🎲 Roll the dice to see what’s waiting for you the next day! 🎲
        </p>
      </div>

      <div className="relative w-full max-w-6xl h-12 rounded-full shadow-md flex items-center justify-between px-8 border-4 border-black -mb-14 bg-[#fff4c4]">
        {[1, 2, 3].map((day) => (
          <span
            key={day}
            className="w-6 h-6 rounded-full shadow-md border-2 border-black"
            style={{ backgroundColor: "#FBBC04" }}
          ></span>
        ))}

        <img
          src={gameDie2}
          alt="Dice"
          className={`absolute top-1/2 -translate-y-1/2 w-[70px] h-[70px] transition-all duration-500 ${
            currentDay === 1
              ? "left-[calc(8px+1rem)]"
              : currentDay === 2
              ? "left-1/2 -translate-x-1/2"
              : "left-[calc(100%-8px-1rem)] -translate-x-full"
          }`}
          onClick={handleDiceClick}
          style={{ cursor: "pointer" }}
        />
      </div>

      <section className="container pt-16 sm:pt-32 flex justify-center items-center flex-col">
        <div className="relative w-full max-w-4xl h-[550px] bg-[#fff4c4] rounded-3xl shadow-lg border-r-[10px] border-b-[20px] border-4 border-black flex flex-col items-center p-6">
          <h2 className="text-2xl font-semibold mb-8">
            Day {currentDay} - {dayDates[currentDay]}
          </h2>

          <div className="text-lg text-left mt-4 whitespace-pre-line w-full">
            {currentDay === 2 ? (
              <div className="flex gap-8">
                <ul className="flex-1">
                  {splitDay2Content()
                    .firstHalf.split("\n")
                    .map((line, index) => (
                      <li key={index} className="mb-2">
                        {line.startsWith("-") ? (
                          <>
                            <span className="font-bold">
                              {line.split(":")[0].trim()}
                            </span>
                            : {line.split(":").slice(1).join(":").trim()}
                          </>
                        ) : (
                          line
                        )}
                      </li>
                    ))}
                </ul>
                <ul className="flex-1">
                  {splitDay2Content()
                    .secondHalf.split("\n")
                    .map((line, index) => (
                      <li key={index} className="mb-2">
                        {line.startsWith("-") ? (
                          <>
                            <span className="font-bold">
                              {line.split(":")[0].trim()}
                            </span>
                            : {line.split(":").slice(1).join(":").trim()}
                          </>
                        ) : (
                          line
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              <ul>
                {dayContent[currentDay]
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <li key={index} className="mb-2">
                      {line.startsWith("-") ? (
                        <>
                          <span className="font-bold">
                            {line.split(":")[0].trim()}
                          </span>
                          : {line.split(":").slice(1).join(":").trim()}
                        </>
                      ) : (
                        line
                      )}
                    </li>
                  ))}
              </ul>
            )}
          </div>

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