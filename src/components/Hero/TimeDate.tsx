import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import TimeDateIcon from "@/assets/time-date.png";

export default function TimeDate() {
  /**
   * Timer to calculate the remaining time of the event
   */
   const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const targetDate = new Date("2025-02-06T18:00:00").getTime();

  /**
   * framer motion animation
   * cards stacking for timer
   */
  const controls = useAnimation();
  const cardColors = [
    "bg-blue-200",
    "bg-red-200",
    "bg-pink-200",
    "bg-pink-200",
  ];
  const totalCards = 4;

  useEffect(() => {
    // countdown timer logic
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    }, 1000);

    // sequential animation logic
    const sequence = async () => {
      await controls.start((index) => ({
        x: 0,
        opacity: 1,
        rotate: index < 4 ? index * 6 : 0, // rotation for background cards only
        transition: { duration: 0.5, delay: index * 0.3 }, // sequential delay
      }));
    };
    sequence();

    return () => clearInterval(interval);
  }, [targetDate, controls]);

  return (
    <div className="relative h-28 lg:h-44 w-40 sm:w-52 lg:w-72">
      {/* render the 4 stacked background cards */}
      {cardColors.map((color, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg ${color}`}
          initial={{ x: 200, opacity: 0 }} // start off-screen to the right
          animate={controls}
          custom={index + 1} // sequential animation based on index
        ></motion.div>
      ))}

      {/* render the main card */}
      <motion.div
        className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg bg-white flex items-center justify-center"
        initial={{ x: 200, opacity: 0 }} // start off-screen to the right
        animate={controls}
        custom={totalCards} // main card animation starts after the background cards
      >
        <div className="text-center flex flex-col justify-center items-center gap-2 lg:gap-4">
          <img src={TimeDateIcon} alt="time_date_icon" />
          <div className="flex space-x-2 md:space-x-4 lg:space-x-8 justify-center items-center font-['Montserrat']">
            {/* Days Section */}
            <div className="text-center">
              <span className="text-xl lg:text-3xl font-semibold">
                {timeLeft.days}
              </span>
              <span className="block text-sm">days</span>
            </div>

            {/* Hours Section */}
            <div className="text-center">
              <span className="text-xl lg:text-3xl font-semibold">
                {timeLeft.hours}
              </span>
              <span className="block text-sm">hours</span>
            </div>

            {/* Minutes Section */}
            <div className="text-center">
              <span className="text-xl lg:text-3xl font-semibold">
                {timeLeft.minutes}
              </span>
              <span className="block text-sm">mins</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
