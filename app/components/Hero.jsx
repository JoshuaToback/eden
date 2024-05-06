import React from "react";
import Image from "next/image";
import arrow from "../images/Arrow.png";
import { Link } from "react-scroll";
import EdenLogo from "../images/Eden_Transparent.png";

import Amazon from "../images/AmazonMusic.png";
import Spotify from "../images/Spotify.png";

const Hero = () => {
  return (
    <div className="h-screen flex items-center flex-col justify-center bg-gradient-to-r from-green-900 to-green-700 text-white">
      <Image src={EdenLogo} width={500} height={500} alt="Logo" />
      <h2 className="text-3xl font-semibold mb-8">
        Check out the latest episodes!
      </h2>
      <Link
        to="episode"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <Image src={arrow} width={50} height={50} alt="Arrow" />
      </Link>

      <div className="m-8 flex justify-between">
        <button className="w-[200px] h-auto">
          <a href="https://music.amazon.com/podcasts/56ebb14b-0f32-4c7b-9a44-851d56f04d09/eden">
            <Image src={Amazon} alt="Amazon Music" />
          </a>
        </button>
        <button className="w-[200px] h-auto">
          <a href="https://open.spotify.com/show/0C5GqAWQNimj2NA3UkJPyn">
            <Image src={Spotify} alt="Spotify" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
