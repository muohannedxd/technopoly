import { useState, useEffect } from "react";
import HeroImage from "@/assets/images/hero.svg";
import HeroMobile from "@/assets/images/hero-mobile.svg";
import TimeDate from "./Hero/TimeDate";
import Location from "./Hero/Location";
import { HashLink } from "react-router-hash-link";
import RollingDice from "@/assets/icons/rolling-dice.gif"


export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <>
      {!isImageLoaded && (
        <div className="w-full h-screen flex items-center justify-center bg-slate-50">
          <img src={RollingDice} alt="Loading" className="w-20 h-20 md:w-24 md:h-24" />
        </div>
      )}

      <div
        className={`relative bg-white p-2 md:p-8 ${
          !isImageLoaded ? "hidden" : ""
        }`}
      >
        <img
          src={isMobile ? HeroMobile : HeroImage}
          alt="GDG Technopoly"
          className="w-full"
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute top-[30%] md:top-[36%] left-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <TimeDate />
        </div>
        <div className="absolute top-[70%] md:top-[62%] left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <Location />
        </div>
        <HashLink
          rel="noreferrer noopener"
          to="/register"
          className="bg-blue-300 absolute bottom-4 md:bottom-8 left-1/2 -translate-x-[57%] md:-translate-x-[76%] h-[12%] md:h-[18%] w-[39%] md:w-[20%] opacity-0"
        >
          REGISTER
        </HashLink>
      </div>
    </>
  );
};
