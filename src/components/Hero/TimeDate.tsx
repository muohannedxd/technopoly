import { useState, useEffect } from "react";
import TimeDateIcon from "@/assets/time-date.png";

export default function TimeDate() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  // Set the target date for the countdown
  const targetDate = new Date("2025-02-06T18:00:00").getTime();

  useEffect(() => {
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

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div className="relative h-32 lg:h-44 w-52 lg:w-72">
      <div className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg rotate-6 bg-blue-200"></div>
      <div className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg rotate-12 bg-green-200"></div>
      <div className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg rotate-18 bg-green-200"></div>
      <div className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg rotate-24 bg-red-200"></div>
      <div className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg flex items-center justify-center transform rotate-0 bg-white">
        <div className="text-center flex flex-col justify-center items-center gap-4">
          <img src={TimeDateIcon} alt="time_date_icon" />
          <div className="flex space-x-4 lg:space-x-8 justify-center items-center font-['Montserrat']">
            {/* Days Section */}
            <div className="text-center">
              <span className="text-xl lg:text-3xl font-semibold">
                {" "}
                {timeLeft.days}{" "}
              </span>
              <span className="block text-sm">days</span>
            </div>

            {/* Hours Section */}
            <div className="text-center">
              <span className="text-xl lg:text-3xl font-semibold">
                {" "}
                {timeLeft.hours}{" "}
              </span>
              <span className="block text-sm">hours</span>
            </div>

            {/* Minutes Section */}
            <div className="text-center">
              <span className="text-xl lg:text-3xl font-semibold">
                {" "}
                {timeLeft.minutes}{" "}
              </span>
              <span className="block text-sm">minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
