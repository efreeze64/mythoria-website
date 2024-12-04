"use client";

import React, { useState } from "react";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";
import Lyrics from "@/app/music/era-of-demise/through-the-storm/through-lyrics";

import "@/assets/styling/song.css";

const ThroughTheStorm = () => {
  const [lyrics, setLyrics] = useState(false);

  const OpenLyrics = () => {
    setLyrics(!lyrics);
  };

  return (
    <body>
      <Navbar />
      <div className="center-wrapper">
        <h1>Throgh the Storm</h1>
        <iframe
          width="50%"
          height="500px"
          src="https://www.youtube.com/embed/Gta8Pi-uVb0?si=Tm0n7XuiEG_Cmjwt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mobile"
        ></iframe>
        <h1>About the song</h1>
        <div className="container" id="text">
          <p>
            Through the Storm is Mythoria’s first finished song with
            instrumental and lyrics. The story is told through the eyes of a
            soldier who is leaving his family behind to go to war. The soldier
            seems quite excited to fight, and imagine himself as a war hero. As
            the fight goes on in the song, he’ll soon realise that war is quite
            so awful. The song is written to portray war as something sinister
            and cruel, even though war might seem cool and heroic.
          </p>
        </div>
        <div className="spacing"></div>
        <div className="align-middle">
          <h1 className="open-lyrics" onClick={OpenLyrics}>
            VIEW LYRICS
          </h1>
        </div>
        <div className="container">{lyrics ? <Lyrics /> : <></>}</div>
        <div className="spacing"></div>
      </div>
      <Footer />
    </body>
  );
};

export default ThroughTheStorm;
