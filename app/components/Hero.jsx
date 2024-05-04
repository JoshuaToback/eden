import React from "react";
import Image from "next/image";
import arrow from "../images/Arrow.png";
import { Link } from "react-scroll";
import EdenLogo from "../images/Eden_Transparent.png"

const Hero = () => {
  return (
    <div className="h-screen flex items-center flex-col justify-center bg-gradient-to-r from-green-900 to-green-700 text-white">
       <Image src={EdenLogo} width={500} height={500} alt="Logo" />
      <h2 className="text-3xl font-semibold mb-8"> Check out the latest episodes!</h2>
      <Link to="episode" smooth={true} duration={500} className="cursor-pointer">
        <Image src={arrow} width={50} height={50} alt="Arrow" />
      </Link>
    </div>
  );
};

export default Hero;
