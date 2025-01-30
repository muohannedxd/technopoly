import { useState, useEffect } from "react";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Agenda } from "@/components/Agenda";
import About from "@/components/About/About";
import Sponsors from "@/components/Sponsors";
import RollingDice from "@/assets/icons/rolling-dice.gif"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay the loading by 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer); // Cleanup in case the component unmounts
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-slate-50">
        <img src={RollingDice} alt="Loading" className="w-20 h-20 md:w-24 md:h-24" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Agenda />
      <Sponsors />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
