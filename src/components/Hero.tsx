import { useState, useEffect } from "react";
import HeroImage from "@/assets/images/hero.png";
import HeroMobile from "@/assets/images/hero-mobile.png";
import TimeDate from "./Hero/TimeDate";
import Location from "./Hero/Location";
import { HashLink } from "react-router-hash-link";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="relative bg-white p-2 md:p-8">
      <img
        src={isMobile ? HeroMobile : HeroImage}
        alt="GDG Technopoly"
        className="h-[100vh] w-full"
      />
      <div className="absolute top-1/3 md:top-1/3 left-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <TimeDate />
      </div>
      <div className="absolute top-2/3 md:top-2/3 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <Location />
      </div>
      <HashLink
        rel="noreferrer noopener"
        to="/register"
        className="bg-blue-300 absolute bottom-4 md:bottom-10 left-1/2 -translate-x-[58%] md:-translate-x-[76%] h-32 md:h-44 w-[38%] md:w-[20%] opacity-0"
      >
        REGISTER
      </HashLink>
    </div>
  );
};
