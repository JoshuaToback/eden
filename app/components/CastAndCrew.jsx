import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { Button } from "react-scroll";

const CastAndCrew = ({ castMembers }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {castMembers.map((castMember, index) => (
        <div
          key={index}
          className="p-4 border border-gray-200 rounded-lg flex flex-col items-center"
        >
          <h2 className="text-lg font-semibold">{castMember.name}</h2>
          <div className="flex justify-center">
            <Image
              src={castMember.image}
              alt={castMember.name}
              className="w-40 h-auto mt-2 mb-4"
            />
          </div>
          <p className="text-sm">{castMember.description}</p>
          <div className="flex justify-between mt-4">
          {castMember.twitter && (
              <a
                href={castMember.twitter}
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                <FaTwitter size={36} className="m-8" />
              </a>
            )}
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Button 2
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Button 3
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CastAndCrew;
