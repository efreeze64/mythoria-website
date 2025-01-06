"use client";

import React, { useState } from "react";
import Link from "next/link";

import Footer from "@/assets/components/footer";

import "./home.css";

import logo from "@/assets/img/mythoria.png";
import close from "@/assets/img/close_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import open from "@/assets/img/menu_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import facebook from "@/assets/img/Facebook_Logo_Primary.png";
import instagram from "@/assets/img/Instagram_Glyph_Gradient.png";
import x from "@/assets/img/logo-white.png";
import tiktok from "@/assets/img/TikTok_Icon_Black_Circle.png";
import youtube from "@/assets/img/youtube_social_icon_red.png";
import spotify from "@/assets/img/Spotify_Primary_Logo_RGB_Green.png";
import icon from "@/assets/img/Mythoria_icon_white.png";

const Home = () => {
  const [modalActive, setModaActive] = useState(false);

  const toggleModalActive = () => {
    setModaActive(!modalActive);
  };

  return (
    <body>
      <nav>
        <div className="transparent-navbar">
          <div className="dropdown">
            <Link href="/about">
              <button className="dropbtn">BAND</button>
            </Link>
            <div className="dropdown-content">
              <Link href="/about">ABOUT US</Link>
              <Link href="/facts">FACTS</Link>
              <Link href="/photo" target="_blank">
                PHOTOS
              </Link>
            </div>
          </div>
          <Link href="/music">MUSIC</Link>
          <Link href="/calender">CONCERTS</Link>
          <div className="dropdown">
            <Link href="/social">
              <button className="dropbtn">SOCIAL MEDIA</button>
            </Link>
            <div className="dropdown-content">
              <Link
                href="https://www.facebook.com/mythoriaband"
                target="_blank"
              >
                Facebook
              </Link>
              <Link
                href="https://www.instagram.com/mythoriaband"
                target="_blank"
              >
                Instagram
              </Link>
              <Link href="https://x.com/mythoriaband" target="_blank">
                X / Twitter
              </Link>
              <Link href="https://www.tiktok.com/@mythoriaband" target="_blank">
                TikTok
              </Link>
              <Link
                href="https://www.youtube.com/@Mythoriaband"
                target="_blank"
              >
                YouTube
              </Link>
              <Link
                href="https://open.spotify.com/artist/6gkSJ4e1ZGlb2PCoSFPJog"
                target="_blank"
              >
                Spotify
              </Link>
            </div>
          </div>
          <Link href="https://mythoria.bandcamp.com/merch" target="_blank">
            MERCH
          </Link>
          <Link href="/contact">CONTACT</Link>
        </div>

        <div className="open-modal" onClick={toggleModalActive}>
          <img src={open.src} className="toggle-button" />
        </div>

        {/*Mobile Navbar*/}
        <div className={`off-screen-menu ${modalActive ? "active" : ""}`}>
          <div className="close-modal" onClick={toggleModalActive}>
            <img src={close.src} />
          </div>
          <ul className="mobile-navbar">
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/facts">FACTS</Link>
            </li>
            <li>
              <Link href="/music"> MUSIC</Link>
            </li>
            <li>
              <Link href="/calender">CONCERTS</Link>
            </li>
            <li>
              <Link href="https://mythoria.bandcamp.com/merch" target="_blank">
                MERCH
              </Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
          <div className="social-media">
            <Link href="https://www.facebook.com/mythoriaband" target="_blank">
              <img src={facebook.src}></img>
            </Link>
            <Link href="https://www.instagram.com/mythoriaband" target="_blank">
              <img src={instagram.src}></img>
            </Link>
            <Link href="https://x.com/mythoriaband" target="_blank">
              <img src={x.src}></img>
            </Link>
            <Link href="https://www.tiktok.com/@mythoriaband" target="_blank">
              <img src={tiktok.src}></img>
            </Link>
            <Link href="https://www.youtube.com/@Mythoriaband" target="_blank">
              <img src={youtube.src}></img>
            </Link>
            <Link
              href="https://open.spotify.com/artist/6gkSJ4e1ZGlb2PCoSFPJog"
              target="_blank"
            >
              <img src={spotify.src}></img>
            </Link>
          </div>
          <div className="icon">
            <img src={icon.src}></img>
          </div>
        </div>
      </nav>
      <div className="image-container">
        <img className="image" alt="mythoria logo" src={logo.src} />
      </div>
      <Footer />
    </body>
  );
};

export default Home;
