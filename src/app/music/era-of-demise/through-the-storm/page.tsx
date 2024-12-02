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
        ></iframe>
        <h1>About the song</h1>
        <div className="container" id="text">
          <p>
            From the Shadows is ahout From the Shadows is ahout From the Shadows
            is ahout From the Shadows is ahout From the Shadows is ahout From
            the Shadows is ahout From the Shadows is ahout From the Shadows is
            ahout{" "}
          </p>
        </div>
        <h1 className="open-lyrics" onClick={OpenLyrics}>
          VIEW LYRICS
        </h1>
        <div className="container">{lyrics ? <Lyrics /> : <></>}</div>
        <div className="spacing"></div>
      </div>
      <Footer />
    </body>
  );
};

export default ThroughTheStorm;
