import React from "react";
import Image from "next/image";
import arrow from "../images/Arrow.png";
import { Link } from "react-scroll";
import EdenLogo from "../images/Eden_Transparent.png";
import Amazon from "../images/AmazonMusic.png";
import Spotify from "../images/Spotify.png";
import Apple from "../images/Apple.png";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-900 to-green-700 text-white">
      <div className="flex flex-col items-center">
        <Image src={EdenLogo} width={300} height={300} alt="Logo" />
        <h2 className="text-xl md:text-3xl font-semibold mt-4 text-center">
          Check out the latest episodes!
        </h2>
        <Link to="episode" smooth={true} duration={500} className="cursor-pointer mt-4">
          <Image src={arrow} width={40} height={40} alt="Arrow" />
        </Link>
      </div>

      <div className="flex flex-col items-center mt-8">
        <button className="w-[200px] h-auto mb-4">
          <a href="https://music.amazon.com/podcasts/56ebb14b-0f32-4c7b-9a44-851d56f04d09/eden">
            <Image src={Amazon} alt="Amazon Music" />
          </a>
        </button>
        <button className="w-[200px] h-auto mb-4">
          <a href="https://open.spotify.com/show/0C5GqAWQNimj2NA3UkJPyn">
            <Image src={Spotify} alt="Spotify" />
          </a>
        </button>
        <button className="w-[200px] h-auto mb-4">
          <a href="https://podcasts.apple.com/us/podcast/eden/id1745784242">
            <Image src={Apple} alt="Apple" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
