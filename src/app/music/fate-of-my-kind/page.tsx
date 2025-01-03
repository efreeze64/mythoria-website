"use client";

import React, { useState } from "react";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";
import Lyrics from "./fate-lyrics";

import "./fate-of-my-kind.css";

import Fate from "@/assets/img/Fate of My Kind.png";

const FateOfMyKind = () => {
  const [lyrics, setLyrics] = useState(false);

  const ToggleLyrics = () => {
    setLyrics(!lyrics);
  };

  return (
    <body>
      <Navbar />
      <div className="center-wrapper">
        <h1>Fate of My Kind</h1>
        <div className="container" id="upper">
          <img src={Fate.src} alt="Fate of My Kind Cover" />
          <div id="text">
            <ul className="row">
              <li>RELEASED: 26-11-2024</li>
              <li>TYPE: SINGLE (DEMO)</li>
            </ul>
            <p>
              Fate of My Kind is based on Platon’s mythology of Atlantis. The
              story is told through the eyes of a survivor of the tragedy. He
              explains how the kingdom and its folk, once stood tall and proud,
              but turned against each other as power and greed filled the minds
              of the citizens. Gods then decided to destroy the kingdom to
              punish its people, to its own demise.
              <br />
              <br />
              Fun fact: Fate of My Kind was written spontaneously during one of
              Daniel's gym sessions.
            </p>
          </div>
        </div>
        <div className="container" id="music">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/2IyvtTLx9cU"
            title="Mythoria  - Fate of My Kind (Official Audio)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="mobile"
          ></iframe>
        </div>

        <h1 className="open-lyrics" onClick={ToggleLyrics}>
          VIEW LYRICS
        </h1>

        <div className="container">{lyrics ? <Lyrics /> : <></>}</div>
        <div className="spacing"></div>
      </div>
      <Footer />
    </body>
  );
};

export default FateOfMyKind;
