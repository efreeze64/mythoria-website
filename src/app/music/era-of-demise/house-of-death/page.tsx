"use client";

import React, { useState } from "react";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";
import Lyrics from "@/app/music/era-of-demise/house-of-death/house-lyrics";

import "@/assets/styling/song.css";

const HouseOfDeath = () => {
  const [lyrics, setLyrics] = useState(false);

  const OpenLyrics = () => {
    setLyrics(!lyrics);
  };

  return (
    <body>
      <Navbar />
      <div className="center-wrapper">
        <h1>House of Death</h1>
        <iframe
          width="50%"
          height="500px"
          src="https://www.youtube.com/embed/SoqEyb6THhY?si=TvWCKqT5GBoziQKY"
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
            House of Death was written as a lyric filler. Before Mythoria had
            any idea on what direction to take, the song was created with the
            catchy melody and the memorable chorus. It was later debated if
            House of Death would continue as the song it is today, with the
            lyrics being all “misplaced” in the Mythoria catalog. But as time
            passed, it was pretty obvious that fans had grown quite fond of the
            song. Why fix something that works so well? House of Death takes you
            on a tour around a mansion where mysterious and awful experiments
            took place.
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

export default HouseOfDeath;
