import React from "react";
import { FaTwitter, FaTiktok } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-white">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-4xl md:text-6xl text-center font-bold mb-8">
          Explore Eden
        </h2>
        <h3 className="text-2xl md:text-3xl text-center font-bold mb-8">
          What is Eden?
        </h3>
        <p className="text-base md:text-lg mb-8 text-center">
          Eden is a sci-fi audio drama focused on the conflict between various
          factions for the control of the biggest oil reserve in the solar
          system, Eden. Eden is the codename for Titan, the moon on Saturn.
          According to reports Titan has the biggest oil reserves in the entire
          solar system, over 100 times what Earth had before the industrial
          revolution. The factions vying for this fuel are the on-the-surface
          benevolent Iris Corporation and the ruthless mercenary group the
          Emissaries of Mars. In between it all is Felicity Dawn, the
          resourceful and talented child of Mobius Dawn, the commander of Iris
          Corporation. Felicity’s crew aboard their ship the Silver Fox includes
          navigation expert and overall hardass Warden Luna, demolitions expert
          Jack Johnson, and the inexperienced war journalist Sgt. Daniel
          Carmine. The four adventurers (along with others who will join them)
          must find Eden before anyone else does and decide the future of the
          solar system.
        </p>
        <div className="flex items-center justify-center space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 transition duration-300"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
