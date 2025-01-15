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
        <div className="absolute left-6 md:left-12 top-10 hover:scale-105 transition-all duration-300">
          <img src={GDGCoin} alt="GDGCoin" className="w-32 sm:w-44 lg:w-56" />
        </div>

        <div className="flex pt-20 pb-12 gap-12 md:gap-20 items-center">
          <Link
            to="mailto:gdg@ensia.edu.dz"
            className="w-10 md:w-16 hover:scale-105 transition-all duration-300"
          >
            <img src={Gmail} alt="Gmail" />
          </Link>
          <Link
            to="https://discord.gg/Tk8xG3T8"
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
        <p className="text-white text-center py-3">
          Copyright © Copyright 2025 GDG on Campus: ENSIA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
