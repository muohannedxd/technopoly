import { SponsorList } from "@/lib/data/sponsors.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="container pt-20 sm:pt-32 pb-14 justify-center items-center flex flex-col gap-20"
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
                <div className="p-0 flex justify-center">
                  <img
                    className="w-36 sm:w-48 self-center"
                    src={sponsor.image as string}
                    alt={`Sponsor ${sponsor.id}`}
                  />
                </div>
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
            <img src={sponsor.image as string} alt={`Sponsor ${sponsor.id}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
