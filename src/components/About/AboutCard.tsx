import { AboutProps } from "@/lib/data/aboutus.data";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface AboutCardProps {
  aboutus: AboutProps;
}

export default function AboutCard({aboutus}: AboutCardProps) {
  return (
    <div
      key={aboutus.id}
      className={`container bg-secondary p-4 rounded-3xl shadow-sm max-w-[12em] sm:max-w-[14em] lg:max-w-[16em] min-w-[12em] sm:min-w-[14em] lg:min-w-[16em] mx-auto`}
    >
      <Card className="rounded-2xl border-[0.35em] border-black">
        <CardHeader className={`rounded-t-xl ${aboutus.background} flex py-2 justify-center items-center border-b-[0.35em] border-black text-center`}>
          <CardTitle className="text-md text-white font-['OpenSans']">
            {" "}
            {aboutus.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="rounded-b-xl flex flex-col justify-center items-center px-8 py-8 md:py-16 bg-secondary text-center">
          <p className="flex justify-center items-center self-center">
            <img
              src={aboutus.image as string}
              alt={aboutus.title}
              className="w-28 h-28 md:w-40 md:h-40 object-contain"
            />
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
