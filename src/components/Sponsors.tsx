import { SponsorList } from "@/lib/data/sponsors.data";

export default function Sponsors() {
  return (
    <div>
      <section
        id="faq"
        className="container py-14 sm:py-22 justify-center items-center flex flex-col gap-20"
      >
        <div className="text-center flex flex-col gap-4">
          <p className="text-title">Sponsors</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-16 lg:gap-40">
          {SponsorList.map((sponsor) => (
            <div key={sponsor.id}>
              <img
                src={sponsor.image as string}
                alt={`Sponsor ${sponsor.id}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
