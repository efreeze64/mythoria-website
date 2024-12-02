"use client";

import React from "react";
import Link from "next/link";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";

import "./music.css";
import "@/assets/styling/global-style.css";

import Era from "@/assets/img/Era of Demise.png";
import Fate from "@/assets/img/Fate of My Kind.png";
import Youtube from "@/assets/img/yt_logo_rgb_dark.png";
import Spotify from "@/assets/img/Full_Logo_Green_RGB.svg";

const Music = () => {
  return (
    <body>
      <Navbar />
      <div className="center-wrapper">
        <div className="container">
          <h1>DISCOGRAPHY</h1>
        </div>
        <div className="container" id="covers">
          <div className="music-container">
            <Link href="music/era-of-demise">
              <img src={Era.src} />
            </Link>
            <p>ERA OF DEMISE | EP</p>
          </div>
          <div className="music-container">
            <Link href="music/fate-of-my-kind">
              <img src={Fate.src} />
            </Link>
            <p>FATE OF MY KIND | Single</p>
          </div>
        </div>
        <div className="container">
          <p className="p">LISTEN TO OUR MUSIC ON:</p>
        </div>
        <div className="container" id="links">
          <div className="logo-box" id="spotify">
            <Link
              href="https://open.spotify.com/artist/6gkSJ4e1ZGlb2PCoSFPJog?si=f7f0fbc232e64788"
              target="_blank"
            >
              <img src={Spotify.src} />
            </Link>
          </div>
          <div className="logo-box" id="youtube">
            <Link href="https://www.youtube.com/@Mythoriaband" target="_blank">
              <img src={Youtube.src} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Music;
