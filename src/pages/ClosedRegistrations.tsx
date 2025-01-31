import Closed from "@/assets/images/closed.png";
import Coin from "@/components/Coin";
import GDGIcon from "@/components/GDGIcon";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClosedRegistrations() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center flex-1 p-3">
        <div
          className=" bg-[#ED3237] text-white
                          font-bold text-center p-4 rounded-3xl border-8 border-white shadow-slate-500 shadow-lg"
        >
          <div className="flex flex-col gap-8 items-center justify-between border-4 border-white rounded-2xl py-10 md:py-20 px-4 md:px-10 ld:px-20">
            <p className="text-4xl md:text-6xl ">SORRY, Registrations are</p>
            <img src={Closed} alt="closed" className="w-60 md:w-80" />
            <Link to="/">
              <Button className="bg-white text-[#ED3237] hover:bg-white hover:bg-opacity-85">
                <ArrowLeft />
                <p className="text-base md:text-lg font-bold">Go Back Home</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/** coins and gdg icon */}
      <GDGIcon
        position={{ top: "6%", right: "58vw", angle: "0" }}
        rotationDegree={-48}
      />
      <Coin
        position={{ top: "18%", left: "74%", angle: "0" }}
        rotationDegree={-40}
      />
      <Coin
        position={{ top: "12%", left: "18%", angle: "0" }}
        rotationDegree={0}
      />
      <Coin
        position={{ top: "40%", left: "78%", angle: "0" }}
        rotationDegree={-60}
      />
      <Coin
        position={{ top: "78%", left: "18%", angle: "0" }}
        rotationDegree={-60}
      />
    </div>
  );
}
