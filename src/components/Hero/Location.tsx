import { Link } from "react-router-dom";
import LocationIcon from "@/assets/location.png";

export default function Location() {
  return (
    <div className="relative h-32 lg:h-44 w-52 lg:w-72">
      <div className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg rotate-6 bg-blue-200"></div>
      <div className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg rotate-12 bg-red-200"></div>
      <div className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg rotate-18 bg-yellow-200"></div>
      <div className="absolute inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg rotate-24 bg-orange-200"></div>
      <Link
        to="https://www.eshra.dz/?page_id=3089&lang=en"
        className="absolute py-16 inset-0 border-black border-l-2 border-t-2 border-r-8 border-b-8 rounded-lg flex items-center justify-center transform rotate-0 bg-white"
      >
        <div className="text-center flex flex-col justify-center items-center gap-4">
          <img src={LocationIcon} alt="location_icon" />
          <p className="text-xl lg:text-3xl font-bold"> ESHRA </p>
          <p className="text-lg lg:text-2xl font-light"> 6-8 February, 2025 </p>
        </div>
      </Link>
    </div>
  );
}
