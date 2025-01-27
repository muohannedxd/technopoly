import { useRef, useState } from "react";
import { AboutUsList } from "@/lib/data/aboutus.data";
import AboutCard from "./AboutCard";
import Quote from "@/assets/icons/initial_quote.png";
import Dice from "@/assets/images/aboutDice.png";
import "@/assets/CSS/About.css"

export default function About() {
  const [selectedId, setSelectedId] = useState(0);
  const currentCard = AboutUsList[selectedId];

  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const cardClasses = [
    "z-20",
    `
    card1_translation
    `,
    `
    card2_translation
    `,
    `
    card3_translation
    `,
  ];

  const handleSwap = (newId: number) => {
    if (newId === selectedId) return;
    const currentClass = cardRefs[selectedId].current?.className;
    const newClass = cardRefs[newId].current?.className;
    if (currentClass && newClass) {
      cardRefs[selectedId].current!.className = newClass;
      cardRefs[newId].current!.className = currentClass;
    }
    setSelectedId(newId);
  };

  return (
    <section
      id="about"
      className="container pt-16 sm:pt-32 pb-[32vh] sm:pb-[50vh] justify-center items-center flex flex-col gap-8"
    >
      <div className="text-center flex flex-col gap-4">
        <p className="text-title">About Us</p>
      </div>

      <div className="relative w-full flex flex-col md:flex-row gap-8">
        {/** Cards */}
        <div
          ref={cardRefs[0]}
          onClick={() => handleSwap(0)}
          className={`transition-all duration-300 ease-linear ${cardClasses[0]}`}
        >
          <AboutCard aboutus={AboutUsList[0]} />
        </div>
        <div
          ref={cardRefs[1]}
          onClick={() => handleSwap(1)}
          className={`transition-all duration-300 ease-linear flex-end
              absolute rotate-[-10deg] z-10 cursor-pointer hover:scale-105
              ${cardClasses[1]}
              `}
        >
          <AboutCard aboutus={AboutUsList[1]} />
        </div>
        <div
          ref={cardRefs[2]}
          onClick={() => handleSwap(2)}
          className={`transition-all duration-300 ease-linear 
              absolute z-20 cursor-pointer hover:scale-105
              ${cardClasses[2]}
              `}
        >
          <AboutCard aboutus={AboutUsList[2]} />
        </div>
        <div
          ref={cardRefs[3]}
          onClick={() => handleSwap(3)}
          className={`transition-all duration-300 ease-linear 
              absolute rotate-[10deg] z-10 cursor-pointer hover:scale-105
              ${cardClasses[3]}
              `}
        >
          <AboutCard aboutus={AboutUsList[3]} />
        </div>

        {/** Description */}
        <div
          className={`border-[0.4em] ${currentCard.borderColor} rounded-3xl p-4 md:p-6 lg:p-10 my-2 h-[22em]`}
        >
          <div className="relative text-base md:text-xl lg:text-2xl font-medium mb-2">
            <span className="">
              <img src={Quote} alt="Quote" className="h-5" />
            </span>
            {currentCard.description}
            <span className="absolute px-2">
              <img src={Quote} alt="Quote" className="h-5 rotate-180" />
            </span>
          </div>
        </div>
        {/** dice */}
        <div className="absolute translate-y-96 hidden md:flex transition-all duration-200 hover:rotate-12">
          <img src={Dice} alt="dice" />
        </div>
      </div>
    </section>
  );
}
