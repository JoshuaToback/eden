import React from "react";
import imdb from "../images/imdb.png";
import Image from "next/image";
import CastAndCrew from "./CastAndCrew";

import Vivian from "../images/Vivian.jpg"

const Cast = () => {
  const castMembers = [
    {
      name: "Vivian Reed | Felicity Dawn",
      image: Vivian,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      twitter: "https://twitter.com/aferalsunflower"
    },

  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className=" text-7xl mb-4">Cast and Crew</h1>
      <h2 className="text-2xl mb-4">Check us out on iMDB!</h2>
      <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src={imdb}
          alt="IMDB"
          className="w-full h-20 mb-4 cursor-pointer"
        />
      </a>

      <CastAndCrew castMembers={castMembers} />
    </div>
  );
};

export default Cast;
