import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import eden from "../images/Eden_Transparent.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-900 text-white py-4 z-10">
      <div className="container mx-auto flex items-center justify-center px-4">
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="episode" smooth={true} duration={500}>
              Episodes
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="cast" smooth={true} duration={500}>
              Cast & Crew
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
