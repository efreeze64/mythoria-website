"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import "./navbar.css";

import mythoria from "@/assets/img/mythoria.png";
import close from "@/assets/img/close_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import open from "@/assets/img/menu_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import facebook from "@/assets/img/Facebook_Logo_Primary.png";
import instagram from "@/assets/img/Instagram_Glyph_Gradient.png";
import x from "@/assets/img/logo-white.png";
import tiktok from "@/assets/img/TikTok_Icon_Black_Circle.png";
import youtube from "@/assets/img/youtube_social_icon_red.png";
import spotify from "@/assets/img/Spotify_Primary_Logo_RGB_Green.png";
import icon from "@/assets/img/Mythoria_icon_white.png";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [modalActive, setModaActive] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleModalActive = () => {
    setModaActive(!modalActive);
  };

  const isActive = (path) => (currentPath === path ? "active" : "");

  return (
    <nav className="navbar">
      <div className="open-modal" onClick={toggleModalActive}>
        <img src={open.src} className="toggle-button" />
      </div>

      <div className={`off-screen-menu ${modalActive ? "active" : ""}`}>
        <div className="close-modal" onClick={toggleModalActive}>
          <img src={close.src} />
        </div>
        <ul className="mobile-navbar">
          <li>
            <Link href="/about" className={isActive("/about")}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/music" className={isActive("/music")}>
              {" "}
              MUSIC
            </Link>
          </li>
          <li>
            <Link href="/calender" className={isActive("/calender")}>
              CONCERTS
            </Link>
          </li>
          <li>
            <Link href="https://mythoria.bandcamp.com/merch" target="_blank">
              MERCH
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive("/contact")}>
              CONTACT
            </Link>
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

      {/* Left Tabs */}
      <div className="navbar-tabs" id="left">
        <div className="dropdown">
          <Link href="/about">
            <button className="dropbtn">BAND</button>
          </Link>
          <div className="dropdown-content">
            <Link href="/about" className={isActive("/about")}>
              ABOUT US
            </Link>
            <Link href="/photo" className={isActive("/photo")}>
              PHOTOS
            </Link>
          </div>
        </div>

        <Link href="/music" className={`navbar-tab ${isActive("/music")}`}>
          MUSIC
        </Link>
        <Link
          href="/calender"
          className={`navbar-tab ${isActive("/calender")}`}
        >
          CONCERTS
        </Link>
      </div>

      {/* Logo in the Center */}
      <div className="navbar-logo">
        <Link href="/">
          <img src={mythoria.src} alt="Mythoria" className="logo-image" />
        </Link>
      </div>

      {/* Right Tabs */}
      <div className="navbar-tabs" id="right">
        <div className="dropdown">
          <Link href="/social">
            <button className="dropbtn">SOCIAL MEDIA</button>
          </Link>
          <div className="dropdown-content">
            <Link href="https://www.facebook.com/mythoriaband" target="_blank">
              Facebook
            </Link>
            <Link href="https://www.instagram.com/mythoriaband" target="_blank">
              Instagram
            </Link>
            <Link href="https://x.com/mythoriaband" target="_blank">
              X / Twitter
            </Link>
            <Link href="https://www.tiktok.com/@mythoriaband" target="_blank">
              TikTok
            </Link>
            <Link href="https://www.youtube.com/@Mythoriaband" target="_blank">
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
        <Link
          href="https://mythoria.bandcamp.com/merch"
          className="navbar-tab"
          target="_blank"
        >
          MERCH
        </Link>
        <Link href="/contact" className={`navbar-tab ${isActive("/contact")}`}>
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
