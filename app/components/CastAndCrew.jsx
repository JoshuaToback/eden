import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

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
              width={200}
              height={200}
              className="mt-2 mb-4 rounded-lg"
            />
          </div>
          <p className="text-sm text-center">{castMember.description}</p>
          <div className="flex justify-center mt-4">
            {castMember.twitter && (
              <a
                href={castMember.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CastAndCrew;