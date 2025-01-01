import { useEffect, useState } from "react";
import { SponsorList, SponsorProps } from "@/lib/data/sponsors.data";
import coin from "@/assets/coin.png"; // Ensure the path to coin.png is correct

export const Sponsors = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>([]);

  // Generate random positions for coins
  useEffect(() => {
    const randomPositions = Array.from({ length: 2 }, () => ({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 100}%`,
    }));
    setPositions(randomPositions);
  }, []);

  return (
    <section
      id="sponsors"
      className="relative container py-24 sm:py-32 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-sans mb-4">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Sponsors
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {SponsorList.map(({ name, logo, url }: SponsorProps) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all"
          >
            <img
              src={logo}
              alt={name}
              className="max-w-full h-auto mx-auto"
            />
          </a>
        ))}
      </div>

      {/* Add coins at random positions */}
      {positions.map((pos, index) => (
        <img
          key={index}
          src={coin}
          alt="Coin"
          style={{
            position: "absolute",
            top: pos.top,
            left: pos.left,
            width: "100px",
            height: "100px",
            transform: "rotate(20deg)", // Optional rotation for styling
          }}
        />
      ))}
    </section>
  );
};
