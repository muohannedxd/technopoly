import { Link } from "react-router-dom";
import Gmail from "@/assets/icons/gmail.png";
import Instagram from "@/assets/icons/instagram.png";
import Discord from "@/assets/icons/discord.png";
import LinkedIn from "@/assets/icons/linkedin.png";
import GDGCoin from "@/assets/images/gdgCoin.png";

export const Footer = () => {
  return (
    <footer id="footer">
      <section
        id="contact"
        className="container relative py-32 justify-center items-center flex flex-col"
      >
        <div className="text-center flex flex-col gap-4">
          <p className="text-title">Contact Us</p>
        </div>

        {/** GDG Coin */}
        <div className="absolute left-4 md:left-12 top-0 md:top-10 hover:rotate-12 transition-all duration-300">
          <img src={GDGCoin} alt="GDGCoin" className="w-32 sm:w-44 lg:w-56" />
        </div>

        <div className="flex pt-20 pb-12 gap-12 md:gap-20 items-center">
          <a
            href="mailto:gdg@ensia.edu.dz"
            className="w-10 md:w-16 hover:scale-105 transition-all duration-300"
          >
            <img src={Gmail} alt="Gmail" />
          </a>
          <Link
            to="https://discord.gg/PBcXJ8h2rc"
            className="w-10 md:w-16 hover:scale-105 transition-all duration-300"
          >
            <img src={Discord} alt="Discord" />
          </Link>
          <Link
            to="https://www.instagram.com/gdg_ensia/"
            className="w-10 md:w-16 hover:scale-105 transition-all duration-300"
          >
            <img src={Instagram} alt="Instagram" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/gdg-ensia/"
            className="w-10 md:w-16 hover:scale-105 transition-all duration-300"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </Link>
        </div>
      </section>
      <div className="bg-lightblue w-full">
        <p className="text-white text-center py-3 text-xs sm:text-sm md:text-base">
        All Rights Reserved © GDG on Campus: ENSIA
        </p>
      </div>
    </footer>
  );
};
