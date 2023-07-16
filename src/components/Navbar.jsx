import { Link } from "react-router-dom";
import Kasperia from "../assets/logo-kasperia.svg";

const Navbar = () => {
  return (
    <div className="flex justify-evenly py-5 bg-white navbar fixed top-0 left-0 w-full z-50 transition-transform duration-300 transform translate-y-0">
      <div className="flex justify-center items-center">
        <Link to="/">
          <img className="h-3/5" src={Kasperia} alt="Kasperia-Logo" />
        </Link>
      </div>
      <nav className="w-2/3 flex justify-center items-center">
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
