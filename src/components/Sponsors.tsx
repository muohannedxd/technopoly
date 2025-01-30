import { SponsorList } from "@/lib/data/sponsors.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Link } from "react-router-dom";
import Coin from "./Coin";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="container relative pt-20 sm:pt-32 pb-14 justify-center items-center flex flex-col gap-20"
    >
      <div className="text-center flex flex-col gap-4">
        <p className="text-title">Sponsors</p>
      </div>
      {/** carousel for mobile */}
      <div className="flex md:hidden">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {SponsorList.map((sponsor) => (
              <CarouselItem key={sponsor.id}>
                <Link to={sponsor.link}>
                  <div className="p-0 flex justify-center">
                    <img
                      className="w-28 sm:w-40 self-center"
                      src={sponsor.image as string}
                      alt={`Sponsor ${sponsor.id}`}
                    />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-12 bg-yellow/80 hover:bg-yellow border-2 border-black transition-all duration-300" />
          <CarouselNext className="right-2 sm:right-12 bg-yellow/80 hover:bg-yellow border-2 border-black transition-all duration-300" />
        </Carousel>
      </div>
      {/** normal for desktop */}
      <div className="hidden md:flex md:flex-row justify-around items-center gap-16 lg:gap-40">
        {SponsorList.map((sponsor) => (
          <div key={sponsor.id}>
            <Link to={sponsor.link}>
              <img
                className="w-28 sm:w-40"
                src={sponsor.image as string}
                alt={`Sponsor ${sponsor.id}`}
              />
            </Link>
          </div>
        ))}
      </div>
      {/** coins and gdg icon */}
      <Coin
        position={{ top: "18%", left: "18%", angle: "0" }}
        rotationDegree={0}
      />
      <Coin
        position={{ top: "100%", left: "68%", angle: "0" }}
        rotationDegree={-60}
      />
    </section>
  );
}
