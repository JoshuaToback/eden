import React from "react";
import Image from "next/image";
import imdb from "../images/imdb.png";
import CastAndCrew from "./CastAndCrew";

import Vivian from "../images/Vivian.jpg";
import Ethan from "../images/ethan.jpg";
import Luis from "../images/luis.jpg";
import Josh from "../images/headshot2024.png";
import cody from "../images/codyrock.png";
import mitchell from "../images/mitchell.jpg";

const Cast = () => {
  const castMembers = [
    {
      name: "Vivian Reed | Felicity Dawn",
      image: Vivian,
      description: "",
      twitter: "https://twitter.com/aferalsunflower",
    },
    {
      name: "Ethan Grant | Warden Luna",
      image: Ethan,
      description: "",
      twitter: "https://twitter.com/EthanGrantVO",
    },
    {
      name: "Luis Luna | Jack Johnson",
      image: Luis,
      description: "",
      twitter: "https://twitter.com/gH0uLVA",
    },
    {
      name: "Joshua Toback | Daniel Carmine",
      image: Josh,
      description: "",
      twitter: "https://twitter.com/JTVoiceActor",
    },
    {
      name: "Cody Rock | Mobius Dawn",
      image: cody,
      description: "",
      twitter: "https://twitter.com/CodyRockVO",
    },
    {
      name: "MItchell Lee | Robert Hobbs",
      image: mitchell,
      description: "",
      twitter: "https://twitter.com/MitchellLeeVO",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl mb-4">Cast and Crew</h1>
      <h2 className="text-xl md:text-2xl mb-4">Check us out on IMDb!</h2>
      <div className="flex justify-center mb-4">
        <a
          href="https://www.imdb.com/title/tt31779267/?ref_=nm_flmg_unrel_1_act"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Image src={imdb} alt="IMDb" width={200} height={80} />
        </a>
      </div>
      <CastAndCrew castMembers={castMembers} />
    </div>
  );
};

export default Cast;
