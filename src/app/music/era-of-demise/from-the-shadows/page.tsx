"use client";

import React, { useState } from "react";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";
import Lyrics from "@/app/music/era-of-demise/from-the-shadows/from-lyrics";

import "@/assets/styling/song.css";

const FromTheShadows = () => {
  const [lyrics, setLyrics] = useState(false);

  const OpenLyrics = () => {
    setLyrics(!lyrics);
  };

  return (
    <body>
      <Navbar />
      <div className="center-wrapper">
        <h1>From the Shadows</h1>
        <iframe
          width="50%"
          height="500px"
          src="https://www.youtube.com/embed/Enrj5T5_E74?si=UwMo6-noyVMnF9Qt"
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
            With inspiration from old tales of a Grim Reaper, who takes the soul
            of every living creature, and seals them in a lantern, to light its
            path to its next victim. From the Shadows puts you in the shoes of a
            person who wanders on mysterious grounds where only a few have
            survived. A green mist fills the place and it’s hard to make out
            what's appearing from the dark scene. The only thing that really
            stands out is the sound of a chain rattling, and a green light
            shining slightly through the cloudy area.
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

export default FromTheShadows;
