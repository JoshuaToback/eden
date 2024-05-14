import React, { useRef } from "react";

const Episode = () => {
  const episodeRef = useRef(null);

  return (
    <div
      ref={episodeRef}
      className="h-screen flex items-center flex-col justify-center text-white"
    >
      <h2 className="text-3xl font-semibold m-8">Listen to Eden here!</h2>

      <iframe
        width="70%"
        height="70%"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1821143316&color=%2394b098&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
  );
};

export default Episode;
