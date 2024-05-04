import React, { useRef } from "react";

const Episode = () => {
  const episodeRef = useRef(null);

  return (
    <div ref={episodeRef} className="h-screen flex items-center justify-center text-white">
      <h2 className="text-3xl font-semibold">Episode Section</h2>
    </div>
  );
};

export default Episode;
