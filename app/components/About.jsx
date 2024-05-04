import React from "react";
import { FaTwitter, FaTiktok } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="h-screen flex items-center justify-center text-white">
      <div className="container mx-auto">
        <h2 className="text-6xl text-center font-bold mb-8">Explore Eden</h2>
        <p className="text-lg mb-8">
          Eden is an audio drama about the survival of the human race and the search for paradise. Set in the year 2200, this futuristic adventure tells the story of Felicity Dawn and their ship, the Silver Fox.
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
