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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tristique, ex a sodales fermentum, purus nulla feugiat justo, sed
              blandit nunc lacus vel lorem. Integer sit amet orci sem. Ut
              lacinia vestibulum lacus non volutpat. Donec ut aliquet purus. Sed
              vehicula, libero non pretium maximus, sapien ex dignissim lorem,
              ut tristique ipsum erat non mauris. Nullam quis nunc vehicula,
              sodales felis vitae,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent tristique, ex a sodales fermentum, purus
              nulla feugiat justo, sed blandit nunc lacus vel lorem. Integer sit
              amet orci sem. Ut lacinia vestibulum lacus non volutpat. Donec ut
              aliquet purus. Sed vehicula, libero non pretium maximus, sapien ex
              dignissim lorem, ut tristique ipsum erat non mauris. Nullam quis
              nunc vehicula, sodales felis vitae, fermentum nunc. Phasellus
              rhoncus, velit nec convallis dignissim, elit odio cursus arcu, et
              malesuada enim metus non quam. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Morbi vitae scelerisque mauris. Quisque congue sapien sit amet
              velit convallis tincidunt.
            </p>
          </div>
        </div>
        {/*When Fate releases, change theese iframe*/}
        <div className="container" id="music">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/SoqEyb6THhY?si=TvWCKqT5GBoziQKY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
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
