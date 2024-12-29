import AboutCard from "./AboutCard";
import { AboutUsList } from "@/lib/data/aboutus.data";
import Quote from "@/assets/icons/initial_quote.png";
import { useState } from "react";

export default function About() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <section
      id="about"
      className="container relative pt-14 sm:pt-22 pb-96 justify-center items-center flex flex-col gap-8"
    >
      <div className="text-center flex flex-col gap-4">
        <p className="text-title">About Us</p>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-8">
        {/** Selected Card */}
        <AboutCard aboutus={AboutUsList[selectedId]} />
        <div className="border-[0.4em] border-third rounded-3xl p-6 lg:p-10 my-2">
          <div className="relative text-lg md:text-xl lg:text-2xl font-medium mb-4">
            <span className="">
              <img src={Quote} alt="Quote" className="h-5" />
            </span>
            {AboutUsList[selectedId].description}
            <span className="absolute px-2">
              <img src={Quote} alt="Quote" className="h-5 rotate-180" />
            </span>
          </div>
        </div>
      </div>
      {/** Other Cards */}
      <div className="absolute right-10 bottom-28 sm:bottom-32 md:bottom-10 flex flex-row">
        {AboutUsList.filter((item) => item.id !== selectedId).map(
          (aboutus, index) => (
            <div
              onClick={() => setSelectedId(aboutus.id)}
              key={aboutus.id}
              className={`relative transform cursor-pointer ${
                index === 0
                  ? "rotate-[-10deg] translate-x-20 sm:translate-x-12 z-10"
                  : "rotate-[10deg] -translate-y-4 translate-x-4 sm:translate-x-0 z-10"
              }`}
            >
              <AboutCard aboutus={aboutus} />
            </div>
          )
        )}
      </div>
    </section>
  );
}
