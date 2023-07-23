import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Kasperia from "../assets/logo-kasperia.svg";
import KasperiaBlue from "../assets/logo-kasperia-blue.svg";

const Navbar = () => {
  const [isScrolledToThirdSection, setIsScrolledToThirdSection] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const thirdSection = document.getElementById("third-section");
      if (thirdSection) {
        const thirdSectionTop = thirdSection.getBoundingClientRect().top;
        const isThirdSectionInView =
          thirdSectionTop < window.innerHeight && thirdSectionTop > 0;
        setIsScrolledToThirdSection(isThirdSectionInView);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-evenly py-5 navbar fixed ${
        isScrolledToThirdSection ? "bg-black" : "bg-white"
      } top-0 left-0 w-full z-50 transition-transform duration-300 transform translate-y-0`}
    >
      <div className="flex justify-center items-center">
        <Link to="/">
          <img
            className="h-3/5"
            src={isScrolledToThirdSection ? KasperiaBlue : Kasperia}
            alt="Kasperia-Logo"
          />
        </Link>
      </div>
      <nav
        className={`w-2/3 flex justify-center items-center ${
          isScrolledToThirdSection ? "text-white" : "text-black"
        }`}
      >
        <ul className="flex justify-around w-3/5 font-custom">
          <li className="hover:text-red-500 cursor-pointer">
            <Link to="/supply">Supply</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <Link to="/install">Install</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
