import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import LocationIcon from "@/assets/location.png";

export default function Location() {
  const controls = useAnimation();

  /**
   * framer motion animation
   * cards stacking for location
  */

  // sequential animation triggering
  useEffect(() => {
    const sequence = async () => {
      await controls.start((index) => ({
        x: 0, // final position in place
        opacity: 1,
        rotate: index < 4 ? index * 6 : 0, // rotate only the 4 background cards
        transition: { duration: 0.5, delay: index * 0.3 }, // sequential delay
      }));
    };
    sequence();
  }, [controls]);

  const cardColors = ["bg-green-200", "bg-blue-200", "bg-red-200", "bg-orange-200"]; // 4 background cards
  const totalCards = 4;

  return (
    <div className="relative h-28 lg:h-44 w-40 sm:w-52 lg:w-72">
      {/* render the 4 stacked background cards */}
      {cardColors.map((color, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg ${color}`}
          initial={{ x: -200, opacity: 0 }} // startoff-screen to the left
          animate={controls}
          custom={index + 1} // sequential animation based on index
        ></motion.div>
      ))}

      {/* render the main card */}
      <motion.div
        className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg bg-white"
        initial={{ x: -200, opacity: 0 }} // start off-screen to the left
        animate={controls}
        custom={totalCards} // main card animation starts after the background cards
      >
        <Link
          to="https://www.eshra.dz/?page_id=3089&lang=en"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center flex flex-col justify-center items-center gap-2 lg:gap-4">
            <img src={LocationIcon} alt="location_icon" />
            <p className="text-sm sm:text-xl lg:text-3xl font-bold"> ESHRA </p>
            <p className="text-sm sm:text-lg lg:text-2xl font-light"> 6-8 February, 2025 </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
